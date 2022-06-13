import React from 'react';
import {useState} from 'react'
import  productData  from '../productData.json';
import TabUl from './TabUl';

const Tab = (props) => {
    const tabData = productData;
    const [dataIndex,setDataIndex] = useState(0);
    const handleTab = (e,index) =>{     
        e.preventDefault();
        setDataIndex(index);
        console.log(dataIndex);
    }

    const dataUl = tabData.filter((data,index)=>index===dataIndex)

    return (
        <div className='Tab'>
            <div className='Tab-title'>
                {
                    tabData.map((dataItem,index)=>
                        <button className={dataIndex===index?'btn active':'btn'} key={dataItem.id} onClick={(e)=>{handleTab(e,index)}}>{dataItem.title}</button>)
                    
                }
                
            </div>
            <div className='Tab-body'>
                {
                    dataUl.map((data,index)=><TabUl key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Tab;