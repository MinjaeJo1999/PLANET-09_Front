import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Detail = (props) => {
  console.log('detail', props);
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    info: '',
    startDate: '',
    endDate: '',
    payDate: '',
    bank: '',
  });

  useEffect(() => {
    fetch('http://localhost:8001//book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const deleteBook = () => {
    fetch('http://localhost:8001//book/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          props.history.push('/');
        } else {
          alert('삭제실패');
        }
      });
  };

  const updateBook = () => {
    props.history.push('/updateForm/' + id);
  };

  return (
    <div>
      <h1>공구 상세보기</h1>
      <Button variant="warning" onClick={updateBook}>
        수정
      </Button>
      {'  '}
      <Button variant="danger" onClick={deleteBook}>
        삭제
      </Button>
      <hr />
      
      <h1>진행자 : {book.author}</h1>
      <br></br>
      <h2>공구제목 : {book.title}</h2>
      <h2>공구분야 : {book.category}</h2>
      <h2>상세정보 : {book.info}</h2>
      <h2>공구 시작일 : {book.startDate}</h2>
      <h2>공구 종료일 : {book.endDate}</h2>
      <h2>수요조사 참여자 결제 마감일 : {book.payDate}</h2>
      <h2>공구 은행 : {book.bank}</h2>
      <h2>계좌 번호 : {book.account}</h2>
    </div>
  );
};

export default Detail;
