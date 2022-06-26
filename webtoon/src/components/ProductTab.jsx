import React, { useState } from 'react';
import ProductItem from './ProductItem';
import webtoonData from '../webtoonData.json'
import '../style/tab.css'

const ProductTab = () => {
    const webData = webtoonData;
    const [dataIndex,setDataIndex] = useState(0)

    const code = webData.filter((data,index)=>index===dataIndex);
    
    console.log(code);

    const fncTab = (e,index) =>{
        e.preventDefault();
        setDataIndex(index)
    }

    return (
        <div className='productTab'>
            <div className='inner'>
                <div className='genre'>
                    {
                        webData.map((data,index)=>
                            <button key={data.id} onClick={(e)=>{fncTab(e,index)}}>{data.genre}</button>
                        )
                    }
                </div>
                <div className='ul'>
                    {
                    code[0].item.map((data,index)=><ProductItem key={data.author} data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductTab;