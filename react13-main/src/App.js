import './App.css';
import Main from './pages/Main';
import Company from './pages/Company';
import {Routes ,Route} from 'react-router-dom' ;
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import RedirectsRoute from './route/RedirectsRoute';
import { useState } from 'react';

function App() {
  const [auth,setAuth] = useState(true); // 로그인상태(초기값은 true니까 로그인된상태)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} /> 
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/user' element={<RedirectsRoute auth={auth} />} /> {/* 로그인상태인 auth 를 props로 넘겨줌 */}

      </Routes>
    </div>
  );
}

export default App;

/*
path='/product/:id' 이 아이디 값을 가진 아이템을 보여준다 
/:id 하면 / 뒤에 어떤 값이 오든 (1,a .. 등) 무조건 해당 페이지로 간다 
id 는 라우터의 변수(파라미터) 같은 개념 
*/