import React from 'react';
import '../style/Detail.css'
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    const {id} = useParams();

    return (
        <div className='detail'>
            <h3 className='detailHead'>Detail info</h3>
            <h1 className='title'>{props.cardData[id-1].title}</h1>
            <p className='imgbox'><img src={props.cardData[id-1].imgUrl} alt="" /></p>
            <h3 className='content'>{props.cardData[id-1].content}</h3>
           
            

            
        </div>
    );
};

export default Detail;