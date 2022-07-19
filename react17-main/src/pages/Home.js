import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';
const Home = () => {
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
             <VideoList />
          </section>
        </>
    );
};

export default Home;