
import React from 'react';
import Card from './Card';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../style/container.css'
import Detail from './Detail';



const CardList = () => {

    const [cardData,setCardData] = useState([]); 

    const dataUrl = './data/cardData.json';

  /*   useEffect(()=>{
         axios.get(dataUrl)
        .then(response => response.data)
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error);})
    },[]) */

    useEffect(()=>{
       (async()=>{
            const response = await axios.get(dataUrl);
            setCardData(response.data);
        })();
    },[]);
    
    /* const [cardData,setCardData] = useState([]);    
    useEffect(()=>{
        fetch('./data/cardData.json')
        .then(response => response.json())
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error);})
    },[]) */
    
    
    // const [cardData,setCardData] = useState([]);    
    // useEffect(()=>{
    //     axios('./data/cardData.json')
    //     .then(response => response.data)
    //     .then(data=>setCardData(data))
    //     .catch(error=>{console.log(error);})
    // },[])
     
    return (
        <div className='card_area'>
            <h3>CardList</h3>
            <ul className='card_wrap'>
                {
                    cardData.map((card)=>
                        <Card key={card.id} card={card} />
                    )
                }
            </ul>
            
        </div>
    );
};

export default CardList;
