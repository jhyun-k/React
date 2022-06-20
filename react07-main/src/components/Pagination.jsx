import React from 'react';
import styled from 'styled-components';

const Pagination = ({total,page,setPage,listPerPage}) => {
    const PageNum = Math.ceil(total/listPerPage) ; 
    const PagesNumArray = new Array(page);
    // PagesNumArray.fill('a');
    return (
        <div>
            <PaginationBox >
                <PrevButton onClick={()=>{setPage(page-1)}} disabled = {page===1}>
                    이전
                </PrevButton>
               
                   {
                    PagesNumArray.fill().map((ele,i)=>{
                        return (
                            <PageNumButton key={i+1}
                             onClick={()=>{setPage(i+1)}}>
                                {i+1}
                            </PageNumButton>
                        )
                    })
                   }
                
                <NextButton onClick={()=>{setPage(page+1)}} disabled = {page===10}>
                    이후
                </NextButton>
            </PaginationBox>
        </div>
    );
};

export default Pagination;

const PaginationBox = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    width : 1000px;
    margin : 1rem auto;
`
const PrevButton = styled.button`
    border-radius : 0.25rem;
    padding : 0.25rem 0.375rem;
    color : #000;
    width : 40px; height : 24px;
    background-color:#cda8a8;
    font-size : 0.75rem;
    &:hover {
        cursor : pointer;
        color : #f34
    }
    &[disable]{
        background : #e0e0e0;
        color: #fff
    }
`
const NextButton = styled(PrevButton)`

`

const PageNumButton = styled(PrevButton)`
    background : none;
    color : #000;
    font-size : 1rem;
`