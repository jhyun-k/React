import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Card from './Card';
import '../style/Detail.css'

const Detail = (card) => {

    const [cardData,setCardData] = useState([]); 

    const dataUrl = '../data/cardData.json';

    useEffect(()=>{
        (async()=>{
             const response = await axios.get(dataUrl);
             setCardData(response.data);
         })();
     },[]);
     console.log(cardData);
    //  const viewData = cardData.filter(function(ele,index){return index===1})
    return (
        <div>
            <h3>CardList</h3>
            <ul className='card_wrap'>
                {
                    cardData.map((card,index)=>
                        <li key={card.id} card={card}><img src={card.imgUrl} alt="" /></li>
                        
                    )
                }
            </ul>
            
            

            
        </div>
    );
};

export default Detail;