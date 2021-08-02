import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import '../planet_css/Header.css';
import '../planet_css/Header.css';
import logo from '../planet_css/logo.svg';
import search from '../planet_css/search.svg';
import user_image from '../planet_css/user_image.svg';


function Header(props){

    return(
        <div className = "containerr">
            <div className = "item1">
                <button id = "search_item">
                    <img src = {search} alt="돋보기" id = "search_image"/>
                    <span id = "search">search</span>
                </button>
                {   
                    props.isLogin === true
                    ? <Link to = "/saveForm" id="add_item">
                        +공구추가
                    </Link>
                    : null
                }
            </div>

            <div className = "item2">
                <Link to = "/">
                    <img src = {logo} alt = "로고이미지" id="logo"/>
                </Link>
            </div>
            
            <div className = "item3">
                <div id = "profile">
                    {
                        props.isLogin === true
                        ? <Profile/>
                        :null
                    }
                    {
                        props.isLogin === true
                        ? <UserName/>
                        : <Login/>
                    }
                    <span id = "top">|</span>
                    {
                        props.isLogin === true
                        ? <Logout isLogin={props.isLogin} setIsLogin={props.setIsLogin}/>
                        : <Join/>
                    }
                    <br/><br/><br/>
                </div>  
            </div>      
        </div>
        
    )
}

function Profile(){
    return(
        <Link to = "/myPage">
            <button id = "image_button"><img src={user_image} alt="유저이미지"/></button>
        </Link>
    )
}

function UserName(){
    return(
        <Link to = "/myPage" className = "top_button">
            칼라왈츠
        </Link>
    )
}

function Login(){
    return(
        <Link to = "/loginForm">
            <button className = "top_button">
                로그인
            </button>
        </Link>
    )
}

function Logout(props){
    return(
            <Link to = "/" >
                <button className = "top_button"  onClick ={()=>{props.setIsLogin(!props.isLogin)}}>
                    로그아웃
                </button>
            </Link>
    )
}

function Join(){
    return(
        <Link to = "/joinForm">
            <button className = "top_button">
                회원가입
            </button>
        </Link>
    )
}

export default Header;
