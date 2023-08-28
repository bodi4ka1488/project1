import React from 'react';

import {Form} from './Form/Form';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { Content, Info,ContactSide, LinkWrapper, Text, Title, Wrapper } from './Styles';


export const Contact = () => {
    return (
        <Wrapper id='contact'>
            <Content>
                <ContactSide>
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
                </ContactSide>
                 <Form></Form>
            </Content>
           
        </Wrapper>
    );
};
