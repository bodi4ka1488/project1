import React from 'react';
import  { InfoItem } from './InfoItem/InfoItem';
import { CircleItem, Content, Title, Wrapper } from './Styles';

export const Info = () => {
    return (
        <Wrapper>
            <Title>Ми добре розуміємося на числах</Title>
            <Content>
                <InfoItem number="15" text="Років досвіду"/>
                <CircleItem/>
                <InfoItem number="36" text="Фахівців"/>
                <CircleItem/>
                <InfoItem number="120" text="Клієнтів щороку"/>
                <CircleItem/>
                <InfoItem number="9" text="Партнерів"/>
            </Content>
        </Wrapper>
    );
};
