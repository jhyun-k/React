import logo from './logo.svg';
import './App.css';
import './reset.css'
import Nav from './nav'

function App() {
  const arr = [1,2,3]
  // let lis1 = arr.forEach(ele => <li>{ele}</li>)
  let lis2 = arr.map((ele,key)=><li key = {key}>{ele}</li>) // key 라는 값으로 식별자를 만들어줘야함 리액트에서map을 돌리면 어떤 항목을 추가 변경할 때 식별자로 사용하기 위해서 키값을 꼭 적용해야한다
  return (
    <div className="App">
    
      <h1>Map 함수</h1>
      <ul>
        {lis2}
      </ul>
    </div>
  );
}
/* jsx문법 js, html 혼합해서 사용 */ 
export default App;
