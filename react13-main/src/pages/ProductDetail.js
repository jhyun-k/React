import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams(); // 구조분해할당으로 {id} 하면 params.id 안해도돼
    // const params = useParams();
    // console.log('params는',params)
    return (
        <div>
            <h1>제품 상세페이지{id}</h1>
            {/* <h1>제품 상세페이지{params.id}</h1> */}
        </div>
    );
};

export default ProductDetail;