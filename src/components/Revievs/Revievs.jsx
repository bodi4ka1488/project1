import React from 'react';
import styled from 'styled-components';
import ReviewsItem from './ReviewsItem/ReviewsItem';
const Wrapper = styled.div`
    width:100%;
    height:400px;
    background-color:#ab11ff;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
`

const Info = styled.div`
    width:100%;
    text-align:center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
`
const Revievs = () => {
    return (
        <Wrapper>
          <Info>Відгуки</Info>
          <ReviewsItem/>
        </Wrapper>
    );
};

export default Revievs;