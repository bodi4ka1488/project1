import React from 'react';
import { Foto, Item, ItemText, ItemTitle } from './Styles';


export const ServiseItem = (props) => {
    return (
        <Item>
            <Foto src={props.foto}></Foto>
            <ItemTitle>{props.title}</ItemTitle>
            <ItemText>{props.text}</ItemText>
        </Item>
    );
};
