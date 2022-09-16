import React from 'react';
import styled from 'styled-components';
import Form from './Form/Form';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
const Wrapper = styled.div`\
    background-image: url(https://krot.info/uploads/posts/2021-01/1611843982_26-p-fon-bolshaya-kletka-28.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
` 
const Content = styled.div`
     width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    background-color:white;
    opacity:0.97;
    gap:30px    
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
`
const Text = styled.div`
font-size:18px;
line-height:28px;
`
const LinkWrapper = styled.div`
    color:black
`

const Contact = () => {
    return (
        <Wrapper>
            <Content>
               <Info>Контакти</Info> 
               <Title>Працюймо разом</Title>
                <div>
                    <Text>вул. Хрещатик, 22, м. Київ, 01001, Україна</Text>
                    <Text>info@mysite.ua</Text>
                    <Text>Тел.: +38 044 123 45 67</Text>
                </div>
                <LinkWrapper>
                    <FaFacebookF/>
                    <FaLinkedin/>
                    <FaTwitter/>
                </LinkWrapper>
            </Content>
            <Form></Form>
        </Wrapper>
    );
};

export default Contact;