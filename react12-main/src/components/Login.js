import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = (e) => {
        dispatch(login(true))
        e.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={loginUser}>
                <div>
                    <div><label htmlFor="userId">아이디</label></div>
                    <div><input type="text" id='userId' placeholder='아이디입력' autoComplete='off' /></div>
                </div>
                <div>
                <div><label htmlFor="userPass">아이디</label></div>
                <div><input type="text" id='userPass' placeholder='비밀번호' autoComplete='off' /></div>
                </div>
                <div>
                    <input type="submit" value='로그인' />
                </div>
            </form>
        </div>
    );
};

export default Login;