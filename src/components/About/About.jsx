import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width:100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
`
const Content = styled.div`
    width:350px;    
    flex-direction: column;
    display: flex;
    gap:20px

`
const Info = styled.div`
    color: blue;
    margin: 70px 0 0 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 36px;
    margin: 0 auto;
`
const Text = styled.div`
font-size:18px;
line-height:28px;
`
const About = () => {
    return (
        <Wrapper>
            <Content>
                <Info>Про нас </Info>
                <Title>Наші експерти - найкращі</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta dolor exercitationem. Veniam id itaque consequatur asperiores amet repellendus! Exercitationem, aperiam facere deserunt quaerat harum natus at sit expedita provident.</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta dolor exercitationem. Veniam id itaque consequatur asperiores amet repellendus! Exercitationem, aperiam facere deserunt quaerat harum natus at sit expedita provident.</Text>
            </Content>
            <img src="https://cdn-icons-png.flaticon.com/512/4221/4221628.png" alt="Grafick" />
            
        </Wrapper>
    );
};

export default About;