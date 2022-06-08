import React from 'react'

function  Nav(){
    const navList = {width : 100,height : 50,lineHeight:'50px',backgroundColor :'#194',margin:'50px auto',borderRadius:'10px'}
    return(
        <nav style={{display:'flex',justifyContent:'center'}}>
            <ul>
                <li style={navList}>메뉴1</li>
                <li style={navList}>메뉴2</li>
                <li style={navList}>메뉴3</li>
            </ul>
        </nav>
    )

}

export default Nav;