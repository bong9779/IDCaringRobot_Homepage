import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class writehospital extends Component {
    constructor(props) {
        super(props)
        this.state ={
          title_board : "",
          writer_board : "",
          contents : ""
      }
    }

    
  _submitBoard = async function() {
    const title_board = document.getElementsByName('title_board')[0].value.trim();
    const writer_board = document.getElementsByName('writer_board')[0].value.trim();
    const contents = document.getElementsByName('contents')[0].value.trim();
    // 각 입력 칸이 비어있을때 입력버튼 눌렀으면
    if(title_board === "" ){ 
        return alert('제목을 입력하시오.');
    }else if(writer_board === ""){
        return alert('작성자를 입력하시오.');
    }else if(contents === ""){
        return alert('내용을 입력하시오.');
    }
    // 각 데이터 입력값 할당 
    const data = { title : title_board, writer : writer_board, contents : contents};
    const res = await axios ('/add/hospitalboard',{ //데이터베이스 삽입 요청
      method: 'POST', 
      data : data,
      headers : new Headers()
  })
  if(res.data){ //삽입 확인 
    alert('게시판 등록이 완료되었습니다');
    return window.location.replace('/'); //메인화면으로 복귀
  }
  
}

  render() {

    return (
        <div>
         <div className="Write">
        <InputGroup>
        <FormControl
         type='text'
         name='title_board'
         id='title_board'
         width = "100px"
        placeholder="제목"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  
        
        <InputGroup>
        <FormControl
         type='text'
         name='writer_board'
         id='writer_board'
         width = "100px"
        placeholder="작성인"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  

        <InputGroup>
        <FormControl as="textarea" id='content_txt2' name='contents' placeholder="내용을 입력하세요." />
        </InputGroup>
        
        

        <div id='post_submit'>
        <Button variant="light" onClick={() => this._submitBoard()}>등록</Button>
          </div>


      </div>
        </div>
    );
  }
}

export default writehospital;

