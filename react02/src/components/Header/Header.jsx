import React from 'react';
import './css/index.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <h1 className='logo'>instargam</h1>
                <nav className='navigation'>
                    <ul className='nav-wrapper'>
                        <li className='nav'>
                            <img src="/assets/feed-dac.svg" alt="" />
                        </li>
                        <li className='nav'>
                            <img src="/assets/profile-dac.svg" alt="" />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;