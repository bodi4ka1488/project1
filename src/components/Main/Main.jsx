import React from 'react';
import styled from 'styled-components';
import Buttons from '../Buttons/appButons';
const MainWrapper = styled.div`\
background-image: url(https://img.freepik.com/free-photo/flat-lay-assortment-of-purple-plastic-bags_23-2148829898.jpg?w=900&t=st=1663264485~exp=1663265085~hmac=9d7ce497577998eeed1ae2428df12d65486e2e2f4f61e9e13639452c241a258b);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 585px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
` 
const MainContainer = styled.div`
padding-left:110px;
width:500px;
`
const MainText = styled.h1`
font-size:90px;
line-height:80px
`
const Text = styled.div`
font-size:20px;
padding:20px 0;
`

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <MainText>Сила дієвої поради</MainText>
                <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                <Buttons>Докладніше</Buttons>
            </MainContainer>
        </MainWrapper>
    );
};

export default Main;