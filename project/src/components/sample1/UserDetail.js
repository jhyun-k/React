import React from 'react';

const UserDetail = ({ userItem}) => {
    console.log(`유저디테일 ${userItem.id} 번 컴포넌트 리랜더`)
    return (
        <div>
            <h2>name:{userItem.name}</h2>
            <h3>age:{userItem.age}</h3>
            <h3>eng:{userItem.engScore}</h3>
        </div>
    );
};

export default React.memo(UserDetail);