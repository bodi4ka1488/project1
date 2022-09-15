import React from 'react';
import styled from 'styled-components';
import ServiseItem from './ServiseItem/ServiseItem';
const Wrapper = styled.div`
    width:100%;
    height:400px;
    display: grid;
    grid-template-areas: 
    "h1 h1 h1"
    "h2 h2 h2"
    "c c c"
    ;
    grid-template-rows: 100px 100px 1fr ;
    grid-template-columns: 1fr 1fr 1fr;
`
const Title = styled.div`
    grid-area: h1;
    text-align: center;
    color: blue;
    margin: 70px 0 0 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;

`
const UnderTitle = styled.div`
    grid-area: h2;
    font-weight: 600;
    text-align: center;
    font-size: 36px;
    width:350px;
    margin: 0 auto;

`
const ItemConteiner = styled.div`
    grid-area: c;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
`



const Servise = () => {
    return (
        <Wrapper>
            <Title>Послуги</Title>
            <UnderTitle>Виводимо ваш бізнес на новий рівень</UnderTitle>  
            <ItemConteiner>
               <ServiseItem text={"Lorem is dolota caldi lodfce"} title={"Бізнес плани"}  foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53FTjVhwLK4vpdmEcTE6aJJigO38JHDO8Vg&usqp=CAU"}/>   
               <ServiseItem text={"Lorem is dolota caldi lodfce"} title={"Бухгалтерські послуги"}  foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXcMHaNojf9-Ux0ZXEJ4rv0I__7KDycOoag&usqp=CAU"}/>   
               <ServiseItem text={"Lorem is dolota caldi lodfce"} title={"Фінансова оптимізація"}  foto={"https://cdn-icons-png.flaticon.com/512/32/32463.png"}/>   
            </ItemConteiner> 
        </Wrapper>
    );
};

export default Servise;