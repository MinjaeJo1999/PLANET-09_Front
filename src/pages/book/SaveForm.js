import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = (props) => {
  const [book, setBook] = useState({
    title: '', //초기값 세팅
    author: '',
    category: '',
    info: '',
    startDate: '',
    endDate: '',
    payDate: '',
    bank : '',
    account : '',
  });

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

    fetch('http://localhost:8001//book/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        console.log(1,res);
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        // Catch는 여기서 오류가 나야 실행됨.
        console.log(2,res);
        if (res !== null) {
          props.history.push('/');
        } else {
          alert('책 등록에 실패하였습니다.');
        }
      });
  };

  return (
    <Form onSubmit={submitBook}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={changeValue}
          name="title"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>진행자</Form.Label>
        <Form.Control
          type="text"
          placeholder="진행자 개인이나 팀을 대표할 수 있는 이름을 입력하세요."
          onChange={changeValue}
          name="author"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>분야</Form.Label>
        <Form.Control
          type="text"
          placeholder="분야를 입력하세요."
          onChange={changeValue}
          name="category"
        />
      </Form.Group>

     
      <Form.Group controlId="formBasicEmail">
      <Form.Label>분야</Form.Label>
      <Form>
        {['checkbox'].map((type) => (
         <div key={`inline-${type}`} className="mb-3">
           
          <Form.Check
            inline
            label="의류"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
           />
           
          <Form.Check
            inline
            label="식품"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="도서"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="생활용품"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
          <Form.Check
            inline
            label="기타"
            name="group1"
            type={type}
            id={`inline-${type}-5`}
          />
          
          </div>
          ))}
        </Form>
        </Form.Group>
        

        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>대표이미지</Form.Label>
       <Form.Control 
          type="file"
          onChange={changeValue}
          name="info"
           />
        </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>상세정보</Form.Label>
        <Form.Control 
          as="textarea" rows={8} 
          placeholder="상세정보를 입력하세요."
          onChange={changeValue}
          name="info"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>공구 시작일</Form.Label>
        <Form.Control
          type="text"
          placeholder="공구 시작일을 입력하세요."
          onChange={changeValue}
          name="startDate"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>공구 종료일</Form.Label>
        <Form.Control
          type="text"
          placeholder="공구 종료일을 입력하세요."
          onChange={changeValue}
          name="endDate"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>수요조사 참여자 결제 마감일</Form.Label>
        <Form.Control
          type="text"
          placeholder="수요조사 참여자 결제 마감일을 입력하세요."
          onChange={changeValue}
          name="payDate"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>입금은행</Form.Label>
        <Form.Control
          type="text"
          placeholder="입금은행을 입력하세요."
          onChange={changeValue}
          name="bank"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>계좌번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="계좌번호를 입력하세요."
          onChange={changeValue}
          name="account"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SaveForm;
