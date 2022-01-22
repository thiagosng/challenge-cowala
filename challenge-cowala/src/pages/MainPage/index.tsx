import React from 'react';

import Header from '../../components/Header';
import Forms from '../../components/Form';

import { Container, HeaderContainer, FormContainer } from './styles';


const MainPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header  />
            </HeaderContainer>  
            <FormContainer>
                <Forms />
            </FormContainer>
        </Container>
    );
    }

export default MainPage;