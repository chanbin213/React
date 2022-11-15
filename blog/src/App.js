/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App(){
 
  let posts = '우동 맛집';
  let [글제목, 글제목변경] = useState(['코트 추천','맛집 추천', '관광 추천']);
  let [좋아요,좋아요늘리기] = useState(0);
  let [modal, setmodal] = useState(false);
  let [title, settitle] = useState(0);
  let [input, setinput] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      {
        글제목.map(function(a, i){
          return(
            <div className="list" key={i}>
              <h4 onClick={()=>{ setmodal(true);settitle(i) }}>{ 글제목[i] } 
              <span onClick={(e) => {e.stopPropagation(); 좋아요늘리기(좋아요+1)}}>👍</span>{좋아요}</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        setinput(e.target.value)
        }}></input>

      <button onClick={()=> {
        let copy = [...글제목];
        copy.unshift(input)
        글제목변경(copy)
        }}>글 발행</button>

      {
        modal == true ? <Modal color ={'gray'} 글제목 = {글제목} 글제목변경 ={글제목변경} title = {title}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] ='후드티 추천'
        props.글제목변경(copy);}}>글 수정</button>
    </div>    
  );
}

export default App;
