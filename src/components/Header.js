import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import '../planet_css/Header.css';
import '../planet_css/Header.css';

const Header = () => {
  return (
    <>
     
        <Navbar bg="dark" variant="dark">

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>

            <Nav className="mr-auto">

              <Link to="/saveForm" className="nav-link">
               +공구추가
             </Link>
              <Link to="/" className="navbar-brand">
              Planet-09
              </Link>
              <Link to="/loginForm" className="nav-link">
                로그인
              </Link>
              <Link to="/joinForm" className="nav-link">
                회원가입
             </Link>   

            </Nav>     

        </Navbar>
        
      <br />

    </>
  );
};

export default Header;
