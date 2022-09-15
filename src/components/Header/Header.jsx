import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css'
import NavBar from './NavBar/NavBar';
import Buttons from '../Buttons/appButons';
const Head = styled.header`
  width: 100%;
  height: 60px;
  background-color: #f9fafe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:fixed;
  `
  const Logo = styled.div`
  font-weight: 600;
  font-size:26px;
  padding-left:30px;
  color:black;

`
const Header = () => {
    return (
      <Head>
        <Link to ="/"><Logo>БізБуд</Logo></Link>
        <NavBar/>
        <Buttons>Зв'язатися</Buttons>
      </Head>
    );
};

export default Header;