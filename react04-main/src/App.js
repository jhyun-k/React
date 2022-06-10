import logo from './logo.svg';
import './App.css';
import FunList from './FunList';
import Test from './Test/Test';
import { useState } from 'react'
import Lang from './Lang/Lang';
import '../src/Lang/css/lang.css'
import LangList from './Lang/LangList';


function App() {

  const [num,setNum] = useState(0); // const 는 원래 상수변수인데 이 경우에는 함수를 새로 시작하는 케이스로 인식되어서 const여도 숫자 바뀐다. 버튼 누르면 숫자 바뀌는 함수

  const plus = ()=>{
    setNum(number => number+1) 
  }

  const minus = ()=>{
    setNum(number => number-1)
  }

  const[name,setName] = useState('미니')
  const changeName=()=>{
    setName(name==='미니'?'미키':'미니') // 삼항연산자, 버튼 누르면 미키<->미니 바뀌는 함수
  }
  
  const[isOn,setIsOn] = useState('false') // FUN버튼 누르면 FunList 사라졌다 나왔다 토글하게 하는 함수
  const showFun=()=>{
    setIsOn(isOn=>!isOn)
  }

  const[isActive,setIsActive] = useState('false')
  const showLang=()=>{
    setIsActive(isActive=>!isActive)
  }

 


 /*  let number = 0;
  const plus = ()=>{
    number= number+1
    console.log(plus);
    document.querySelector('h2').innerText=number;
  }
  const minus = ()=>{
    number= number-1
    console.log(minus);
    document.querySelector('h2').innerText=number;
  } */

  return (
    <div className="App">
        <h1 onClick={showFun}>FUN</h1>
        <div className={isOn?`fun-box on`:`fun-box off`}>
          <FunList />
       </div>
       <Test />
       <div className='count-box'>
          <h2>{num}</h2>
          <button onClick={plus}>1씩 증가</button>
          <button onClick={minus}>1씩 감소</button>
       </div>
       <div>
          <h2>{name}</h2>
          <button onClick={changeName}>불러봐</button>
       </div>
       <h1 onClick={showLang}>KR</h1>
        <div className={isActive?`lang-box active`:`lang-box unactive`}>
         <LangList />
         </div>
         <div>
          <p>안녕안녕안녕하세요</p>
         </div>
      </div>
  );
}

export default App;
