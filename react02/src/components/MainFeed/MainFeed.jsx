import React from 'react';
import './css/index.css';
import userData from './userData.json'
import TxtFeed from '../TxtFeed/index';
import feedData from '../../mainFeed.json';
import ImgFeed from '../ImgFeed/imgFeed';

const MainFeed = () => {
    const dbFeeds = feedData;
    const MainFeed = () => {
        const users = userData.map((item) => {
          return (
            <li className="friend" key={item.id}>
              <div className="profile-image"></div>
              <div className="nickname">{item.username}</div>
            </li>
          );
        });
    }          

    return (
        <div className='mainFeed'>
            <div className="wrapper">
                <div className="feed-list">
                    <form className='write-feed'>
                        <div className="profile-image">
                            <div className="inp">
                                <input type='text' placeholder='오늘은 무슨 일이 있었나요?' />
                            </div>
                            <div className="get-image">
                                <label for="get-image-input">
                                    <img src="/assets/img/add-image.svg" alt="" />
                                </label>
                                <input type="file" id='get-image-input' />
                            </div>
                        </div>
                    </form>
               
                  {
                  dbFeeds.map((feed)=>{
                       return (
                            !(feed.thumbnailUrl)?<TxtFeed name = {feed.name} email = {feed.email} body = {feed.body} key={feed.id} />:
                            <ImgFeed name = {feed.name} email = {feed.email} body = {feed.body} key={feed.id} img={feed.thumbnailUrl} />
                       )
                   })
                }
                </div>
                {/*feed-list*/}


                <div className="friend-list">
                    <div className="my-profile">
                        <div className="profile-image"></div>
                        <div className="nickname">김지현</div>
                    </div>
                    <div className="my-friend">
                        <div className="title txt-bold">나의 팔로워</div>
                        <ul className='friends'>
                            <li className='friend'>
                                <div className="profile-image"></div>
                                <div className="nickname">김지현</div>
                            </li>
                            <li className='friend'>
                                <div className="profile-image"></div>
                                <div className="nickname">피카츄</div>
                            </li>
                            <li className='friend'>
                                <div className="profile-image"></div>
                                <div className="nickname">꼬부기</div>
                            </li>
                            <li className='friend'>
                                <div className="profile-image"></div>
                                <div className="nickname">파이리</div>
                            </li>
                            <li className='friend'>
                                <div className="profile-image"></div>
                                <div className="nickname">이상해씨</div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*friend-list*/}
            </div>
            
        </div>
    );
};

export default MainFeed;