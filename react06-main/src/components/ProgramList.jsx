import React from 'react';
import ProgramData from './programData.json'
import Program from './Program';
import '../style/program.css'

const ProgramList = () => {

    const tabData = ProgramData;
    console.log(ProgramData);
    
    return (
        <div>
            <ul className='programList'>
                {
                    tabData.map((data,index)=>{
                        return (
                            <Program data={data} key={data.id} />
                        )
                        
                    })
                }
                
            </ul>
        </div>
    );
};

export default ProgramList;