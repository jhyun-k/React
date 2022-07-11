import React from 'react';
import { Link,useNavigate } from 'react-router-dom';



const Main = () => {
    const navigate = useNavigate();
    const goToProduct = () => {
        navigate('/product?page=1&num=10&name=dd')
        // navigate(`/product?page=${id}&num=${num}&name=${name}`)
    }
    return (
        <div>
            <h1>메인</h1>
            <Link to = '/company'> 회사소개 페이지</Link>
           <button onClick={goToProduct}>상품페이지 가기</button>
        </div>
    );
};

export default Main;

