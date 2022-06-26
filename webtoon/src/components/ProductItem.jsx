import React from 'react';
import '../style/item.css'

const ProductItem = ({data}) => {
    return (
        <div className='ul'>
            <div className='li'>
                    <img src={data.image} alt="" />
                    <h2>{data.title}</h2>
                    <p>{data.author}</p>
            </div>
        </div>
    );
};

export default ProductItem;