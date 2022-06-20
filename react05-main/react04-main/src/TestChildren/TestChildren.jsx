import React from 'react';
import Test from '../Test/Test';

const TestChildren = ({a,b,c}) => {
    // const {a,b,c} = props;
    return (
        <div>
            <ul>
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
            </ul>
        </div>
    );
};

export default TestChildren;