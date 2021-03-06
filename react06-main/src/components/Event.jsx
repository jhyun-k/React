import React from 'react';
import EventStyle from '../style/event.module.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import EventItem from './EventItem';
import {FcPlus} from 'react-icons/fc'

const Event = () => {

    //데이터 불러오기
    const [dataList,setDataList] = useState([]);
    const [moreNum,setMoreNum] = useState(3)
    const dataUrl = './data/eventData.json'
    useEffect(()=>{ 
        (async ()=>{
            await fetch(dataUrl)
            .then(res=>res.json())
            .then(res=>setDataList(res))
        })()
    },[])

    const fncMore = () =>{
        setMoreNum(moreNum+3)
    }

    const viewData = dataList.filter((data,index)=>index<moreNum)

    return (
        <div className={EventStyle.event}>
            <h2>Event</h2>
            <ul>
                {
                    viewData.map((data,index)=>{
                        return(
                            <EventItem key={data.id} data={data} index={index} />
                        )
                    })
                }
                
            </ul>
            <div className={EventStyle.moreBtn}>
                <button type='button' onClick={fncMore}>
                    <FcPlus />
                </button>
            </div>
        </div>
    );
};

export default Event;