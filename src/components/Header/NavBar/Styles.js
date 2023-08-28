import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;
export const NavItem = styled.div`
  font-size: 17px;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  transition-property: color;

  &:hover {
    color: #ab11ff;
  }
`;
