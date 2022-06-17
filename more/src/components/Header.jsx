import React from 'react';
import '../style/Header.css'

const Header = () => {
    return (
        <div className='inner'>
            <div className='gnb'>
                <h1>인기TV영상</h1>
                <ul>
                    <li>전체</li>
                    <li>주간아이돌</li>
                    <li>골때리는외박</li>
                    <li>이브</li>
                    <li>라디오스타</li>
                    <li>나는자연인이다</li>
                    <li>징크스의 연인</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;