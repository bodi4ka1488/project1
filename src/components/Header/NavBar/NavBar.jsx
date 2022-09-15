import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css'
const Nav = styled.nav`
    display:flex;
    flex-direction:row;

`
const NavItem = styled.div`
    font-size:17px
    transition-timing-function: ease-in-out;
    transition-duration: 1s;
    transition-property: color;
    &:hover{
        color: #ab11ff;
    }
`
const NavBar = () => {
    return (
        <Nav>
            <NavLink to ="/"><NavItem>Головна</NavItem></NavLink>
            <NavLink to ="/"><NavItem>Послуги</NavItem></NavLink>
            <NavLink to ="/"><NavItem>Про нас</NavItem></NavLink>
            <NavLink to ="/"><NavItem>Відгуки</NavItem></NavLink>
            <NavLink to ="/"><NavItem>Клієнти</NavItem></NavLink>
            <NavLink to ="/"><NavItem>Контакти</NavItem></NavLink>
        </Nav>
    );
};

export default NavBar;