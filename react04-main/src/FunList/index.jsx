import React from 'react';
import FunItem from '../FunItem';
import enterNews from '../db/entNews.json';
import './css/index.css'


const FunList = () => {
    const newsData = enterNews
    return (
        <ul className='fun-list'>
            {
            newsData.map(({title,info,imgSrc})=>{
                return(<FunItem  title={title} info={info} img={imgSrc}/>)
            })
        }
        </ul>
    );
};

export default FunList;