import React from 'react';
import './css/index.css';
import MovieData from './../data/movieData.json'



const MovieList = () => {

    const MovieList = MovieData;
    const gradeColor = {
        '12' : 'gradeinfo on12',
        '15' : 'gradeinfo on15',
        '전체' : 'gradeinfo onall'
    }
    
    return (
        <div>
            <ul className='movie-list'>
                {
                    MovieList.map((movie)=>{
                        const gradeVaule = movie.grade
                        return(
                        <li key={movie.id}>
                            <div className='imgbox'>
                                <img src={movie.poster} alt="{movie.title}" />
                                <span className={gradeColor[gradeVaule]}>{movie.grade}</span>

                                <div className='dimmed'>
                                    <li>
                                    <a href="#">예매하기</a>
                                    <a href="#">상세정보</a>
                                    </li>
                                </div>
                            </div>
                            <div className="txtbox">
                                <div className='title'>{movie.title}</div>
                                <div className='info'>
                                    <span className='rateinfo'>{movie.rateinfo}</span>
                                    <span className='star'> <strong className='starinfo'>★{movie.starinfo}</strong></span>
                                </div>
                            </div>
                        </li>)
                    })                }
                {/* <li>
                    <div className='imgbox'>
                        <img src="" alt="" />
                        <span className='gradeinfo'>1212</span>
                        <div className='dimmed'>
                            <a href="#">예매하기</a>
                            <a href="#">상세정보</a>
                        </div>
                    </div>
                    <div className="txtbox">
                        <div className='title'>제목</div>
                        <div className='rateinfo'>
                            <span className='ta'>예매율</span>
                            <span>★ <strong className='starinfo'>8.9</strong></span>
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    );
};



export default MovieList;