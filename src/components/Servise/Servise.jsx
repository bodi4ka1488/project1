/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {ServiseItem} from './ServiseItem/ServiseItem'
import { ItemConteiner, Title, UnderTitle, Wrapper } from './Styles';




export const Servise = () => {
    return (
        <Wrapper id='servise'>
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
