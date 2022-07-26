import React from 'react';

const AvgValue = ({avg}) => {
    console.log('평균값 출력 컴포넌트 리렌드');
    return (
        <div>
            <h1>영어점수의 평균은 {avg}입니다</h1>
        </div>
    );
};

export default AvgValue;