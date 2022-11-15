/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App(){
 
  let posts = '우동 맛집';
  let [글제목, 글제목변경] = useState(['코트 추천','맛집 추천', '관광 추천']);
  let [좋아요,좋아요늘리기] = useState(0);
  let [modal, setmodal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] ='후드티 추천'
        글제목변경(copy);
      }}>글 수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {좋아요늘리기(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setmodal(true) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>    
  );
}

export default App;
