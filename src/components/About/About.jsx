import React from 'react';
import styled from 'styled-components';
import Circle from './Circle/Circle';
import AboutItem from './AboutItem/AboutItem';
const Wrapper =  styled.div`
    width:100%;
    height:400px;
    background-color:#23234d;
`
const Title = styled.div`
padding-top:50px;
height:100px;
font-size:40px;
font-weight:600;
color:white;
text-align:center;
`
const Content = styled.div`
    width:80%
    height:300px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    gap:70px
`
const About = () => {
    return (
        <Wrapper>
            <Title>Ми добре розуміємося на числах</Title>
            <Content>
                <AboutItem number="15" text="Років досвіду"/>
                <Circle/>
                <AboutItem number="36" text="Фахівців"/>
                <Circle/>
                <AboutItem number="120" text="Клієнтів щороку"/>
                <Circle/>
                <AboutItem number="9" text="Партнерів"/>
            </Content>
        </Wrapper>
    );
};

export default About;