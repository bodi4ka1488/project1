import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width:70%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    gap:20px
    `
const Title = styled.div`
    text-align:center;
    font-weight: 600;
    font-size: 55px;
    margin: 0 auto;
`
const Name = styled.div`
font-weight: 600;
font-size: 16px;
margin: 0 auto;
`
const CompanyName = styled(Name)`
font-weight: 400;
font-size: 16px;
margin: 0 auto;
`
const ReviewsItem = () => {
    return (
        <Wrapper>
           <Title>Web Site is really good , i hope you will ... </Title>
           <Name>Boris Britva</Name>
           <CompanyName>WebGroupDEvelopment</CompanyName>
        </Wrapper>
    );
};

export default ReviewsItem;