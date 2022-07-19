import React from 'react';
import './index.css';
import VideoItem from '../VideoItem';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVideoList } from './../../store/video/videoSlice';
const VideoList = () => {
    const dispatch = useDispatch();
    const videoData = useSelector((state) =>state.video.data)
    useEffect(() => {
        const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=AIzaSyCUVEvzmfL7VLqdE9HGQ82PGiZUJCm2itY`
        dispatch(getVideoList(url))
    },[])
    return (
        <ul className='videoList VideoGrid'>
            {
                videoData.map((item , idx) => (
                    <VideoItem key={item.snippet.thumbnails.default.url} item={item.snippet} />           
                ))
            }
           
        </ul>
    );
};

export default VideoList;