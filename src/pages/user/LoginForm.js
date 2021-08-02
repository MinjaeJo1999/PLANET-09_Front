import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <div>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control
          type="text"
          placeholder="비밀번호를 입력하세요."
      
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="비밀번호를 입력하세요."
      
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
   
  
    </div>
  );
};

export default LoginForm;
