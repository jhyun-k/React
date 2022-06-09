import React from 'react';
import './css/index.css';
import userData from './userData.json'

const MainFeed = () => {

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
                    <div className="feed">
                        <div className="top">
                            <div className="profile-image"> </div>
                            <div className="profile-desc">
                                <div className="nickname txt-bold">파이리</div>
                                <div className="timestamp">08:15 pm, yesterday</div>
                            </div>
                        </div>
                        <div className="contents">
                            피카츄 라이츄 파이리 꼬부기 버터플 야도란 피존투 또가스 서로 생긴 모습은 달라도 우리는 모두 친구 맞아맞아 산에서 들에서 때리고 뒹굴고 사막에서 정글에서 울다가 웃다가 서로 만나기까지 힘들었어도 우리는 모두 친구 맞아맞아 내가 원하는 걸 너도 원하고 마주 잡은 두 손에 맹세해 힘을 내봐 그래 힘을 내봐 용기를 내봐 그래 용기를 내봐 피카피카피카츄 피카피카피카츄 아름다운 우리 추억 기억해 피카피카피카츄 피카피카피카츄 아름다운 꿈을 위해 피카츄!
                        </div>
                        <div className="bottom">
                            <div className="like">
                                <div className="asset">
                                    <img src="/assets//like-dac.svg" alt="좋아요" />
                                </div>
                                <div className='count txt-bold'>
                                    25k
                                </div>
                            </div>
                            <div className='comment'>
                            <div className="asset">
                                <img src="/assets//comment.svg" alt="" />
                            </div>
                        </div>
                        </div>
                       
                    </div>{/**feed end */}
                    <div className="feed">
                        <div className="top">
                            <div className="profile-image"> </div>
                            <div className="profile-desc">
                                <div className="nickname txt-bold">파이리</div>
                                <div className="timestamp">08:15 pm, yesterday</div>
                            </div>
                        </div>
                        <div className="contents">
                            피카츄 라이츄 파이리 꼬부기 버터플 야도란 피존투 또가스 서로 생긴 모습은 달라도 우리는 모두 친구 맞아맞아 산에서 들에서 때리고 뒹굴고 사막에서 정글에서 울다가 웃다가 서로 만나기까지 힘들었어도 우리는 모두 친구 맞아맞아 내가 원하는 걸 너도 원하고 마주 잡은 두 손에 맹세해 힘을 내봐 그래 힘을 내봐 용기를 내봐 그래 용기를 내봐 피카피카피카츄 피카피카피카츄 아름다운 우리 추억 기억해 피카피카피카츄 피카피카피카츄 아름다운 꿈을 위해 피카츄!
                        </div>
                        <div className="bottom">
                            <div className="like">
                                <div className="asset">
                                    <img src="/assets//like-dac.svg" alt="좋아요" />
                                </div>
                                <div className='count txt-bold'>
                                    25k
                                </div>
                                <div className='comment'>
                            <div className="asset">
                                <img src="/assets//comment.svg" alt="" />
                            </div>
                            </div>
                            
                        </div>
                        </div>
                        
                    </div>{/**feed end */}
                    <div className="feed">
                        <div className="top">
                            <div className="profile-image"> </div>
                            <div className="profile-desc">
                                <div className="nickname txt-bold">파이리</div>
                                <div className="timestamp">08:15 pm, yesterday</div>
                            </div>
                        </div>
                        <div className="contents">
                            피카츄 라이츄 파이리 꼬부기 버터플 야도란 피존투 또가스 서로 생긴 모습은 달라도 우리는 모두 친구 맞아맞아 산에서 들에서 때리고 뒹굴고 사막에서 정글에서 울다가 웃다가 서로 만나기까지 힘들었어도 우리는 모두 친구 맞아맞아 내가 원하는 걸 너도 원하고 마주 잡은 두 손에 맹세해 힘을 내봐 그래 힘을 내봐 용기를 내봐 그래 용기를 내봐 피카피카피카츄 피카피카피카츄 아름다운 우리 추억 기억해 피카피카피카츄 피카피카피카츄 아름다운 꿈을 위해 피카츄!
                            <div className="image"></div>
                        </div>
                        <div className="bottom">
                            <div className="like">
                                <div className="asset">
                                    <img src="/assets//like-dac.svg" alt="좋아요" />
                                </div>
                                <div className='count txt-bold'>
                                    25k
                                </div>
                            </div>
                            <div className='comment'>
                            <div className="asset">
                                <img src="/assets//comment.svg" alt="" />
                            </div>
                        </div>
                        </div>
                        
                    </div>{/**feed end */}
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
                        </ul>x
                    </div>
                </div>
                {/*friend-list*/}
            </div>
            
        </div>
    );
};

export default MainFeed;