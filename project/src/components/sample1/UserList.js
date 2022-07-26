import React from 'react';
import { useState,useMemo } from 'react';
import AvgValue from './AvgValue';
import UserDetail from './UserDetail';

const UserList = () => {
    console.log('유저리스트 리랜더링');
    const [text,setText] = useState('')
    const [users, setUsers] = useState([
        {
            id:0,
            name:'철수',
            age:30,
            engScore:90
        },
        {
            id:1,
            name:'영희',
            age:20,
            engScore:75

        }
    ])
    const addUser = () => {
        setUsers([
            ...users,
            {
                id:2,
                name:'정희',
                age:22,
                engScore:50
            }
        ])
    }
    const avg = useMemo(() => {
        console.log('평균을 구하는 함수가 호출 되었습니다.')
        return users.reduce((result,user)=>{
            return result + user.engScore / users.length
        },0)
    },[users]);
    return (

        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button disabled={users.length>=3} onClick={addUser}>
                유저만들기
            </button>
            <AvgValue avg={avg}/>
            {
                users.map(item => {
                    return <UserDetail key={item.id} userItem={item} />
                })
            }

        </div>
    );
};

export default UserList;