import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';
import { useSelector } from 'react-redux';

const search = () => {
  const display = useSelector((state) => state.video.listayout);
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
            <VideoList display={display} />
          </section>
        </>
    );
};

export default search; 