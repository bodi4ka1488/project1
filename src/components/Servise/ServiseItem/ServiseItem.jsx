import React from 'react';
import styled from 'styled-components';
const Item = styled.div`
width:120px;
height:150px;
`

const Foto = styled.img`
// background-image: url(${(props)=>props.foto});
width:100%;
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
margin: 0 auto;
height:120px;
`
const ItemTitle = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight:400;
`
const ItemText = styled(ItemTitle)`
font-weight:300;
font-size:14px

`

const ServiseItem = (props) => {
    return (
        <Item>
            <Foto src={props.foto}></Foto>
            <ItemTitle>{props.title}</ItemTitle>
            <ItemText>{props.text}</ItemText>
        </Item>
    );
};

export default ServiseItem;