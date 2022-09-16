import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width:100%;
    height:200px;
    background-color:whitesmoke;
    color:black;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
`
const Info = styled.div`
    width:100%;
    text-align:center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
`
const Content = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
`
const ClientItem = styled.div`
    width:100px;
    font-family: ${props => props.inputFamily};
  letter-spacing: ${props => props.space};
  font-weight: ${props => props.fontWeight};
  font-size:30px
    
   
`
const Clientu = () => {
    return (
        <Wrapper>
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

export default Clientu;