import React from 'react';
import langDb from '../db/lang.json'
import Lang from './Lang';
import './css/lang.css'

const LangList = () => {

    const lang = langDb
    return (
        <ul>
           <li> {
            lang.map(({lang})=>{
                return(<Lang lang={lang} key={lang} />)
            })
        }</li>
        </ul>
    );
};

export default LangList;