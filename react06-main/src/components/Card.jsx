import React from 'react';
import {MdFavorite} from "react-icons/md";
import { useState } from 'react';
import '../style/container.css'
import {Link} from 'react-router-dom'

const Card = ({card})  => {
   const favListColor = [ {color:'#ddd'},  {color:'#F20'}]
   const btnColor = [ 
    {color:'#fff',fontWeight:700,backgroundColor:'#ada'}, 
    {color:'#fff',fontWeight:700,backgroundColor:'#8f8'}
]
   const [fav,setFav]  = useState(0);
   const [checkState,setCheckState] = useState('')

   const fncFav = (e) => {
    setFav((fav === 0) ? 1 : 0) ; 
    setCheckState(e.target.checked);
    console.log(checkState);
   }

    return (
        <li>
        <div className='img_set' style={{background:`url(${card.imgUrl}) no-repeat center / cover`}}></div>
        <dl>
           <dt>{card.title}</dt>
           <dd>{card.content}</dd>
        </dl>
        <div className='btns'>
            <input type="checkbox" id={card.checkName} name={card.checkName} onChange={fncFav} data-checked={checkState} value='checked' className='blind' />
           <label 
           htmlFor={card.checkName} 
           style={btnColor[fav]}>
            좋아요
            <MdFavorite style={favListColor[fav]} />
           </label>
           <Link to={`/detail/${card.id}`}>상세보기</Link>
       </div>
     </li>
    );
};

export default Card;