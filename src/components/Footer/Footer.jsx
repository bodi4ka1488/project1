import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    height:50px;
    text-align:center;
    padding-top:30px
`
const Footer = () => {
    return (
        <Wrapper>
            © 2023 БізБуд. Створено за допомогою<a href="https://manage.wix.com/dashboard/1cc33f76-073e-4822-8c61-b899aaa3109c/home">Wix.com</a>  
        </Wrapper>
    );
};

export default Footer;