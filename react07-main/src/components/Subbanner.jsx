import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper';
import styled from 'styled-components';


const Subbanner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <div>
            <SubSlider>
            <Swiper 
                modules={[Navigation, Pagination]} 
                spaceBetween={0} // 슬라이더 사이 마진 
                slidesPerView={1} // 한번에 보여지는 슬라이더 
                navigation
                pagination={{ clickable: true }}
                loop = 'true'
                onSlideChange={()=> console.log('slide change')} // 슬라이드 넘길 때 마다 호출되는 콜백함수
                onSwiper={(swiper) => console.log(swiper)}

                >
                <SwiperSlide><img src="/img/slide/slide01.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/slide/slide02.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/slide/slide03.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/slide/slide04.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/img/slide/slide05.png" alt="" /></SwiperSlide>
            </Swiper>
        </SubSlider>
        </div>
    );
};

export default Subbanner;

const SubSlider = styled.div`

width : 1200px;
height : auto;
margin : 1rem auto;
& .swiper-slide img{
width : 100%;
}
.mySwiper .pagination-box{
    display: flex;
    justify-content : center;
    margin-top: 1rem
} 
.mySwiper .Pagination-Box .swiper-pangination-bullet {
    width : 24px;
    height:24px;
    border : 2px solid transparent;
    opacitiy : 1;
    font-size: 0
}

`