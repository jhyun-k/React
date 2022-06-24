import React from 'react';
import {useState,useCallback} from 'react'

const Counter = () => {
  const[value,setValue] = useState(0) // 상태값과 그 상태값을 업데이트 해주는 hook but 메모리 낭비 심해
  //useCallback 

  /* useCallback(
    ()=>{
      callback
    },
    [input]
  )
  // 기본공식 */

  const plus = useCallback(
    ()=>{
      setValue(value + 1)
    },[value]) // 똑같은 함수가 여러개 만들어지는게 아니라 dependency값의 변화가 있을 때만 ㅇㅇ

  /* const plus = ()=>{
    setValue(value + 1)
  } 얘랑 같은건데 메모리 소비 줄일 수 있어 */

  const resetPlus = useCallback(
    ()=>{
      setValue(0)
    },[]
  )
  
    return (
        <div>
        <h1> 값 : {value} </h1>
        <button onClick={plus}>
          plus 🍮 
        </button>
        <button onClick={resetPlus}>
          리셋🧀
        </button>
      </div>
    );
};

export default Counter;