import React from 'react';
import './css/ProductTab.css'
import '../productData.json'


const ProductItem = ({data}) => {
    return (
        <div>
            <li>
                <img src={data} alt="" />
            </li>
        </div>
    );
};

export default ProductItem;