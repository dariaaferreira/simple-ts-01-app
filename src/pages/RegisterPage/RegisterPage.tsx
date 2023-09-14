import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { BackLinkContainer, Container } from './RegisterPage.styled';
import { useLocation } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import Footer from '../../components/Footer/Footer';

const RegisterPage: React.FC = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  
  return (
    <>
      <BackLinkContainer>
        <BackLink goBackLink={goBackLink} />
      </BackLinkContainer>
      <Container>
        <RegisterForm />
      </Container>
      <Footer />
    </>
  );
};

export default RegisterPage;