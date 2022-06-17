import React from 'react';
import './../style/main.css';
import { useState, useEffect } from 'react';

const Main = () => {
    const listData = ['content01','content02','content03','content04']
    // listData.unshift('안녕')
    listData.unshift(listData[listData.length-1])
    const [num,setNum] = useState(0)
    const fncClassAdd = (i)=>{
        const on = i===num?' on':' on';
        const view='view_';
        const textNum = '0000'+(i+1)
        const viewText= view +textNum.slice(-2)
        return viewText+on
    }
    const[check,setCheck] = useState('next')


    const initialStyle= {
        position:`relative`,
        left : '-100%',
        marginLeft :`${num*-100}%`,
        /* transition : (num!==0)?'margin 500ms ease':'none',
        animation : (num===0)?'firstSlide 500ms ease 1':'none'  */
    }

    const[slideStyle,setSlideStyle] = useState(initialStyle)

    const fncPrevStyle = ()=>{
        setSlideStyle({...initialStyle,
            transition : (num!==3)?'margin 500ms ease':'none',
            animation : (num===0)?'lastSlide 500ms ease 1':'none'
        })
    }
    const fncNextStyle = () => {
        setSlideStyle({...initialStyle,
            transition : (num!==0)?'margin 500ms ease':'none',
            animation : (num===0)?'firstSlide 500ms ease 1':'none'
        })
    }

    const fncPrevSlide = () =>{
        setNum(num<=0?3:num-1);
        setCheck('prev')
    }
    const fncNextSlide = () =>{
        setNum(num>=3?0:num+1);
        setCheck('next')
    }

    // next 버튼을 클릭하면 fncNextSlide 호출 setNum +1 check는 next
    // useEffect 사용해서 num이 변화할 때 마다 체크상태 감지 next가 들어있으면 fncNextStyle 함수 호출해서 ul fncNextStyle 스타일 적용

    useEffect(()=>{
        check === 'next' ? fncNextStyle : fncPrevStyle
    },[num])


    return (
        <div className='mainContainer'>
                <h2>메인영역</h2>
                <div className='viewBox slideBtn'>
                    <button type='button' onClick={fncPrevSlide}>이전</button>
                    <button type='button' onClick={fncNextSlide}>이후</button>
                </div>
                <div className="viewContents">
                    <ul style={slideStyle}>
                        {
                            listData.map((list,index)=>{
                                return(
                                    <li className={fncClassAdd(index)}>{list}</li>
                                )
                            })
                        }
                        
                        {/* <li className='view_01 on'>01</li>
                        <li className='view_02'>02</li>
                        <li className='view_03'>03</li>
                        <li className='view_04'>04</li> */}
                    </ul>
                </div>
        </div>
    );
};

export default Main;

