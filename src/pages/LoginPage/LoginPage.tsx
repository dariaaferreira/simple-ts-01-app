import React from 'react';
import { BackLinkContainer, Container } from './LoginPage.styled';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useLocation } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import Footer from '../../components/Footer/Footer';

const LoginPage: React.FC = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  
  return (
    <>
      <BackLinkContainer>
        <BackLink goBackLink={goBackLink} />
      </BackLinkContainer>
      <Container>
        <LoginForm />
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;