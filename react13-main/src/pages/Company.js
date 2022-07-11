import React from 'react';
import { useNavigate } from 'react-router';

const Company = () => {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate('/')

    }
    return (
        <div>
            <h1>회사소개 페이지</h1>
            <span onClick={goToMain}>메인페이지로 이동</span>
        </div>
    );
};

export default Company;