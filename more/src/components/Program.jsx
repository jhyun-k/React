import React from 'react';

const Program = ({program}) => {



    return (
        <div>
            <div className='img' style={{background:`url(${program.imgUrl}) no-repeat center / cover`}}></div>
            <dl>
                <dt></dt>
            </dl>
        </div>
    );
};

export default Program;