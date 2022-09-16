import React from 'react';
import styled from 'styled-components';
const CircleItem = styled.div`
    width:10px;
    height:10px;
    border-radius:10px;
    background-color:white;
`
const Circle = () => {
    return (
       <CircleItem/>
    );
};

export default Circle;