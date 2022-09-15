import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
width: fit-content;
height: 40px;
background-color: #ab11ff;
border-radius: 100px;
margin-right: 30px;
color:white;
padding:10px;
font-size:15px;
cursor: pointer;
border:none;
transition-timing-function: ease-in-out;
transition-duration: 1s;
transition-property: background-color;
&:hover{
    background-color: #632087;
}
`
const Buttons = (props) => {
    return (
        <Button {...props}/>
    );
};

export default Buttons;