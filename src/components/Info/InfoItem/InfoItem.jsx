import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width:fit-content;
    display:flex;
    flex-direction:column;
    color:white;
    align-items: center;
`
const Number = styled.div`
    height:100px;
    font-size:80px;
    font-weight:700;

`


const InfoItem = (props) => {
    return (
        <Wrapper>
            <Number>{props.number}</Number>
            <div>{props.text}</div>
        </Wrapper>
    );
};

export default InfoItem;