import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:500px;
    display: grid;
    grid-template-areas: 
    "h1 h1 h1"
    "h2 h2 h2"
    "c c c"
    ;
    grid-template-rows: 100px 100px 1fr ;
    grid-template-columns: 1fr 1fr 1fr;
`
export const Title = styled.div`
    grid-area: h1;
    text-align: center;
    color: blue;
    margin: 70px 0 0 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;

`
export const UnderTitle = styled.div`
    grid-area: h2;
    font-weight: 600;
    text-align: center;
    font-size: 36px;
    width:350px;
    margin: 0 auto;

`
export const ItemConteiner = styled.div`
    grid-area: c;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
`