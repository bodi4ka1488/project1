import React from 'react';
import { Fio, FormWrapper, Labela, NewInput } from './Styles';

export const Form = () => {
    return (
        <FormWrapper action=''>
            <Fio>
            <Labela for="name">Name<NewInput type="text" id='name'/></Labela>
            <Labela for="surname">Surname<NewInput type="text" id='surname'/></Labela>
            </Fio>
            <Labela for="email">Email</Labela><NewInput type="email" id='email'/>
            <Labela for="require">Give a feedback</Labela><NewInput type="text" id='require'/>

        </FormWrapper>
    );
};
