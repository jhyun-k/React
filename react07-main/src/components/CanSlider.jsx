import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Navigation} from "swiper";

const CanSlider = () => {
    return (
        <CanSliderBox>
             <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        navigation={{
            nextEl : '.next',
            prevEl : '.prev'
        }}
      >
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/slide/can1.jpg" alt="" /></SwiperSlide>
        <NavPrev className='prev' />
        <NavNext className='next' />
      </Swiper>
    </CanSliderBox>
    );
};

export default CanSlider;

const CanSliderBox = styled.div`
    width : 1200px;
    height : auto;
    margin : auto;
    & .swiper-slide img{
        width : 150px
    }

`

const NavPrev = styled.button`
    background : url(./img/slide/prev.png) no-repeat center;
    width : 40px; height : 40px; position:absolute; top:50%; transform:translateY(-50%);
    left : 50px; z-index:5000;
`
const NavNext = styled(NavPrev)`
background : url(./img/slide/next.png) no-repeat center;right : 50px;left:auto
`