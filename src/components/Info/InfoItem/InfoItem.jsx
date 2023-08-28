import React from 'react';
import { Number, Wrapper } from './Styles';



export const InfoItem = (props) => {
    return (
        <Wrapper>
            <Number>{props.number}</Number>
            <div>{props.text}</div>
        </Wrapper>
    );
};
