import React from 'react';
import './../style/main.css';
import { useState, useEffect,useRef } from 'react';

// const box = {count : 10}

const Main = () => {
    // box.count = 100
    const listData = ['content01','content02','content03','content04']
    // listData.unshift('안녕')
    listData.unshift(listData[listData.length-1])
    const [num,setNum] = useState(0)
    const[check,setCheck] = useState('next');
    //useState 는 DOM에 직접 접근하는 Hook
    const checkRef = useRef('next')

    // console.log(checkRef); {current:'next'} 객체 타입으로 값을 저장하고 사용할 수 있다. 컴포컨트 함수를 재렌더링 하는 기능은 없다

    const fncClassAdd = (i)=>{
        const on = i===num?' on':' on';
        const view='view_';
        const textNum = '0000'+(i+1)
        const viewText= view +textNum.slice(-2)
        return viewText+on
    }
    


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
            animation : (num===3)?'lastSlide 500ms ease 1':'none'
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
        // setCheck('prev')
        checkRef.current = 'prev' 
    }
    const fncNextSlide = () =>{
        setNum(num>=3?0:num+1);
        // setCheck('next')
        checkRef.current = 'next' 
    }

    // next 버튼을 클릭하면 fncNextSlide 호출 setNum +1 check는 next
    // useEffect 사용해서 num이 변화할 때 마다 체크상태 감지 next가 들어있으면 fncNextStyle 함수 호출해서 ul fncNextStyle 스타일 적용

    useEffect(()=>{return(
        checkRef.current === 'next' ? fncNextStyle : fncPrevStyle)
    },[num])



    return (
        <div className='mainContainer'>
                <h2>메인페이지</h2>
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

/*
const list = [1,2,3,4,5]
        const list2 = list 
        const list3 = [...list]
        const obj = {a:1,b:2,c:3}
        const obj2 = obj
        const obj3 = {...obj,c:4,b:1,e:8}

        console.log(list);
        console.log(list2);
        console.log(list3);
        console.log(obj);
        console.log(obj2);
        console.log(obj3);

*/

/* 

useState 값이 바뀌면 값을 재할당하기 위해 컴포넌트가 다시 렌더링됨.  값이 바뀌면 해당하는 변수에 따라서  값을 재할당하기(업데이트) 컴포넌트를 다시 렌더링한다

useRef 값이 바뀌더라도 다시 렌더링 되지 않는다

const box = { a : 0 }
const useState [box, setBox] = useState(0)
setBox(10) 매개변수를 다시 넣어서 함수를 재실행시키는것

*/