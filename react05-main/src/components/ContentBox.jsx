import React, {useState} from 'react'
import {MdFavorite} from 'react-icons/md'


const ContentBox = () => {

    const favList = ['SoSo','Love'];
    const favListColor=[
        {color : '#ddd',fontSize:'1.5rem'},
        {color : '#f00',fontSize:'1.5rem'},
    ]
    const [fav,setFav] = useState(0);
    const fncFav = () =>{
        setFav((fav===0)?1:0);
    }

    const [num,setNum] = useState(0);
    const fncIncrement = ()=>{
        setNum(num<3?num+1:num)   // (num>=3?num=3:num+1) 도 가능
    } // 3보다 커지면 증가하지 못하게
    const fncDecrement = ()=>{
        setNum(num>0?num-1:num) //(num<=3?num=0:num-1) 도 가능
    } // 0까지만 감소

    /* let [fav,setFav] = useState('🍰');
    const fncFav = ()=>{
        setFav((fav === '🍰')? '🤓'  : '🍰')
    }
 */

    return (
        <div id='contentBox'>
            <h2>상품리스트</h2>
            <div className='pd-card'>
                <div className='img'>상품이미지</div>
                <dl>
                    <dt>아이템1</dt>
                    <dd>아이템 설명</dd>
                </dl>
                <div className='btn-area'>
                    <button type='button' onClick={fncFav}>좋아요</button>
                    <span style={favListColor[fav]}>{favList[fav]}<MdFavorite /></span>
                </div>
                <div className='btn-area'>
                    <button type='button' onClick={fncIncrement}>+1</button>
                    <button type='button' onClick={fncDecrement}>-1</button>
                    <span className='btn-num'>{num}</span>
                </div>
            </div>
        </div>
    );
};

export default ContentBox;