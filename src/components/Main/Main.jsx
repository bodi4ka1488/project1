import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { MainContainer, MainText, MainWrapper, Text } from "./Styles";

export const Main = () => {
  return (
    <MainWrapper id="main">
      <MainContainer>
        <MainText>Сила дієвої поради</MainText>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        <CustomButton isbool={false} title={`Докладніше`} />
      </MainContainer>
    </MainWrapper>
  );
};
