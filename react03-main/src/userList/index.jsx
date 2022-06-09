import React from 'react';
import './css/index.css';
import userData from './../data/userData.json'

const UserList = () => {
    const users = userData;
    return (
        <div>
            <ul className="user-lists">
        {
            users.map((user)=>{
                return(
                <li className='user-list' key={user.id}>
                    <img src={user.picture} alt="{user.name}" />
                    <span className='username'>{user.name}</span>
                    {user.online?<span className='online on'>ONLINE</span>:<span className='online off'>OFFLINE</span>}
                </li>
                )
            })
        }
                {/* <li className='user-list'>
                    <img src="" alt="" />
                    <span className='username'>파이리</span>
                    <span className='online'>온라인</span>
                </li> */}
            </ul>
        </div>
    );
};

export default UserList;