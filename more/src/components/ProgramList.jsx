import React from 'react';
import Program from './Program';

const ProgramList = () => {
    const [programData,setProgramData] = useState([]); 

    const dataUrl = './data/programData.json'   
    useEffect(()=>{
         axios.get(dataUrl)
        .then(response => response.data)
        .then(data=>setProgramData(data))
        .catch(error=>{console.log(error);})
    },[])

    useEffect(()=>{
        const fnc = async()=>{
             const res = await axios.get(dataUrl);
             setProgramData(res.data);
         }
         fnc()
     })


    return (
        <div>
            
        </div>
    );
};

export default ProgramList;