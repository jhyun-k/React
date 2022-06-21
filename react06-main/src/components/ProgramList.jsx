import React from 'react';
import ProgramData from './programData.json'
import Program from './Program';
import '../style/program.css'
import {FcPlus} from 'react-icons/fc'

import { useState,useEffect } from 'react';


const ProgramList = () => {

    const tabData = ProgramData;
    /* const dataUrl = './programData.json'
    const [dataList,setDataList] = useState([]);
    useEffect(()=>{ 
        (async ()=>{
            await fetch(dataUrl)
            .then(res=>res.json())
            .then(res=>setDataList(res))
        })()
    },[]) */
    // console.log(ProgramData);
    
    const [moreNum,setMoreNum] = useState(3)
    const [more,setMore] = useState(false)
    const fncMore = () =>{
        setMoreNum(moreNum+3)
    }
    /* const fncMore = () =>{
        return(
      setMore(!more)
        )       
    } */

    console.log(more)
    
     /* const fncList = ()=>{
        return(
            more?"colorChange":"colorChange on"
        )
    }  */
    // const viewData = dataList.filter((data,index)=>index<moreNum)
    return (
        <div>
            
            <ul className='programList'>
                {
                    tabData.map((data,index)=>{
                        return (
                            <Program data={data} key={data.id} />
                        )
                        console.log(data.id);
                    })
                }
                {/* <h2 onClick={fncMore}>안녕</h2> */}
                {/* <h2 className={fncList()} >색바꾸기</h2> */}
                <div className='moreBtn' >
                <button type='button' >
                    <FcPlus />
                </button>
            </div>
                
            </ul>
        </div>
    );
};

export default ProgramList;