import React from 'react';
import { useState,useRef } from 'react';

const Form = (props) => {
    const writer = useRef(); //객체 형태의 변수가 생긴 것 writer => 작성자 input참조
    const content = useRef() ; //객체 형태의 변수 생성 content => 컨텐츠 input참조
    const [state,setState] = useState({
        writer : '', content : '',grade : 50
    })
    console.log(writer);

    const fncForm = (e) => {
        setState({...state, 
        [e.target.name] : e.target.value
    })
    }
    console.log(state);
    const fncSubmit = () => {

    }

    return (
        <div>
            <div style={{width:'1200px', margin : 'auto',fontSize :'2rem'}}>
                <input type="text" name='writer' placeholder='작성자' id='writer' ref={writer} onChange={fncForm}/>
                <label htmlFor="writer" className='blind'></label>
            </div>
            <div>
                 <textarea name="content" placeholder='오늘 수행한 일' ref={content} onChange={fncForm} />
            </div>
            <div>
                <select name="grade" id="" value={state.grade} onChange={fncForm}>
                    <option value="">50</option>
                    <option value="">60</option>
                    <option value="">70</option>
                    <option value="">80</option>
                    <option value="">90</option>
                    <option value="">100</option>
                </select>
            </div>
            <div>
                <button /* onClick={fncSubmit} */>저장하기</button>
            </div>
        </div>
    );
};

export default Form;