import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    const navList = [
        {content:'Main',href:'/'},
        {content:'Notice',href:'notice'},
        {content:'CardList',href:'cardList'},
        {content : 'Event', href : 'event'},
        {content : 'Form', href : 'form'},
        {content : 'Program', href : 'program'}

    ]
    return (
    
        <div id='nav'>
            <h2 className='blind'>메인 메뉴</h2>
            <ul>
                {
                navList.map((element,index)=>{
                    return(
                    <li key={index}><NavLink to={element.href}>{element.content}</NavLink></li>
                    )
                })
                    
                }
            </ul>
        </div>
    );
};

export default Nav;