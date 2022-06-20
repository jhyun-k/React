import React from 'react';
import './css/lang.css'
import '../db/lang.json'


const Lang = ({lang}) => {
    return (
        <div>
                <div className="lang-box">
                    <h1>{lang}</h1>
                </div>
        </div>
    );
};

export default Lang;