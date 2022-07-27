import React from 'react';
import { useNavigate} from 'react-router-dom'

const Login = ({setAuth}) => {
  const navigate = useNavigate()
  const login = (e) =>{
    e.preventDefault();
    console.log('로그인테스트');
    setAuth(true)
    navigate('/')
  }
    return (
            <div>
             <form onSubmit={(e)=>{login(e)}}>
                <div>
                    <div><label htmlFor='userId'>아이디</label></div>
                    <div><input type="text" id="userId"  placeholder='Email aadress' autoComplete='off' required /></div>
                </div>
                <div>
                    <div><label htmlFor='userPass'>비밀번호</label></div>
                    <div><input type="password"  id="userPass" autoComplete='off' placeholder='pw입력' required /></div>
                </div>
                <div>
                   <input type="submit" value="로그인" />
                </div>
              </form>
            </div>
          );
 }
        

export default Login;
