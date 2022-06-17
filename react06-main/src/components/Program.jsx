import React from 'react';
import '../style/program.css'



const Program = ({data}) => {



    return (
        <div>
            <div className='programList'>
                <img src={data.image} alt="" />
            </div>
            <div className='programDes'>
                <h2>{data.title}</h2>
                <h3>{data.content}</h3>
            </div>
        </div>
    );
};

export default Program;