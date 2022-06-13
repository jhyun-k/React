import React from 'react';
import ProductList from './ProductList';
import './css/ProductTab.css'
import  productData  from '../productData.json'
import {useState} from 'react'


function ProductTab () {
    const [num,setNum] = useState(0);
    const tabData = productData;
    const code = tabData.filter((data,index)=> index === num)
    console.log(code);
    const fncTab = (e,index) =>{
        e.preventDefault();
        setNum(index)
    }
       
    
    return (
        <div className='prodcut-tab'>
            <div className='tab-btn'>
                {tabData.map((data,index)=>
                <button className={num+1===data.id?'btn active':'btn'} key={data.id} onClick = {(e)=>{fncTab(e,index)}}>{data.brand}</button>)/*클릭한 탭에 색 넣기 조건 : num===index 도 가능*/
                }
            </div>
            <div className="tab-contents">
                {
                    code.map((data,index)=><ProductList key={data.id} data = {data} />)
                }
            </div>
        </div>
    );
};

export default ProductTab;