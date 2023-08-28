import React from 'react';
import { ClientItem, Content, Info, Wrapper } from './Styles';

export const Clientu = () => {
    return (
        <Wrapper id='clients'>
            <Info>Наші задоволені клієнти</Info>
            <Content>
                <ClientItem inputFamily="Roboto Mono" space="16px" fontWeight="600" >DFkmin</ClientItem>
                <ClientItem inputFamily="Reem Kufi Fun" space="7px" fontWeight="700" >DreamFK</ClientItem>
                <ClientItem inputFamily="Aref Ruqaa Ink" space="3px" fontWeight="400" >Loginte</ClientItem>
                <ClientItem inputFamily="Aref Ruqaa Ink" space="3px" fontWeight="700" >Lonoen</ClientItem>
            </Content>
        </Wrapper>
    );
};
