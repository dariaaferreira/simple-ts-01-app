import React from 'react';
import { Container, Text, Title, LinkSection } from './HomePage.styled';
import Footer from '../../components/Footer/Footer';

const HomePage: React.FC = () => {
  
  return (
    <>
      <Container>
        <Title>Welcome!</Title>
        <Text>
          Please, <LinkSection to="/register">Sign Up</LinkSection> or{' '}
          <LinkSection to="/login">Log in</LinkSection>  to have access to the app.
        </Text>
      </Container>   
      <Footer />
    </>
  );
};

export default HomePage;