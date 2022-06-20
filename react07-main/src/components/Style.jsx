import React from 'react';
import styled, { keyframes } from 'styled-components';

const Style = () => {
    return (
        <div>
            <Box> {/* 디자인을 하기 위한 컴포넌트 css디자인을 주기 위해서는 태그 단위 아니고 컴포넌트 단위 */}
                <Title fontSize='2rem' color='#d39'>스타일드 컴포넌트</Title>
                <Title fontSize='1.5rem' color='#39630f'>CSS IN JS</Title>
                <Title color='#ee7124'>Fun And Easy</Title>
                <Btn fontSize='1rem' color='#579' active>normal</Btn>
                <Btn display = 'none'>disable</Btn>
                <Btn fontSize='1rem' color='#822'>active</Btn>
                <Text fontSize='20px' color='#199'>2022년 6월 20일</Text>
                <Text fontSize='16px' color='#545'>월요일</Text>
                <Text fontSize='22px' color='#812'>오전 10시 15분</Text>
            </Box>
            <Box as ='ul'>
                <Text as='li' fontSize='16px' color='#962'>menu1</Text>
                <Text as='li' fontSize='16px' color='#962'>menu1</Text>
                <Text as='li' fontSize='16px' color='#962'>menu1</Text>
            </Box>
            <Box>
                <AniBtn>애니메이션버튼</AniBtn>
            </Box>
        </div>
    );
};

export default Style;

const Box = styled.div`
    width : 500px;
    height : 300px;
    border : 5px solid red;
    margin : 3rem auto;
    text-align : center;

`

const Title = styled.h2`
    font-size :${(props) => props.fontSize};
    color : ${(props)=>props.color};
    margin : 1rem 0;
`

const Btn = styled.button.attrs(props => ({
    type : 'button',
    className : props.active ? 'btn on' : 'btn' 
}))`
    color : ${(props)=>props.color};
    font-size : ${(props)=>props.fontSize};
    border : 1px solid ${(props)=>props.color};
    width : 80px;
    height:40px;
    border-radius : 3px;
    display : ${(props)=>props.display};
    margin :  0 4rem;
    font-weight: bold;

`
const Text = styled.p`
    color : ${(props)=>props.color};
    font-size : ${(props)=>props.fontSize};
    margin : 1rem  ;
`
const colorChange = keyframes`
    0%{background:red}
    100%{background:yellow};
    
`

/* 확장시키고 애니메이션 적용 */
const AniBtn = styled(Btn)`
    width : 400px;
    animation : ${colorChange} 1.5s alternate infinite ;
    margin : 120px auto;
`


/* 
1. as사용
2. props사용
3. attrs 사용
4. 확장
5. 애니메이션 적용
6. 글로벌 css

scss
module.css
*/