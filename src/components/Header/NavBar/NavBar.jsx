import React from 'react';
import { Nav, NavItem } from './Styles';
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
    return (
        <Nav>
            <Link to ="main" spy={true} smooth={true} offset={-70} duration={500}><NavItem>Головна</NavItem></Link>
            <Link to ="servise" spy={true} smooth={true} offset={-70} duration={500}><NavItem>Послуги</NavItem></Link>
            <Link to ="about" spy={true} smooth={true} offset={-70} duration={500}><NavItem>Про нас</NavItem></Link>
            <Link to ="revievs" spy={true} smooth={true} offset={-70} duration={500}><NavItem>Відгуки</NavItem></Link>
            <Link to ="clients" spy={true} smooth={true} offset={-70} duration={500}><NavItem>Клієнти</NavItem></Link>
            <Link to ="contact" spy={true} smooth={true} offset={-70} duration={500}><NavItem>Контакти</NavItem></Link>
        </Nav>
    );
};
