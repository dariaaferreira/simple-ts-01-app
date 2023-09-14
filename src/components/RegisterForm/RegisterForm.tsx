import React from 'react';
import { Button, Container, Typography, Checkbox } from '@mui/material';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, ButtonContainer, CheckMeBox } from './RegisterForm.styled';
import TextField from '@mui/material/TextField';

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

const RegisterForm: React.FC = () => {
  const initialValues: RegisterFormValues = {
    username: '',
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Поле "Username" обов\'язкове для заповнення'),
    email: Yup.string()
      .email('Невірний формат електронної пошти')
      .required('Поле "Email" обов\'язкове для заповнення')
      .matches(/@/, 'Поле "Email" повинно містити символ "@"'),
    password: Yup.string()
      .required('Поле "Password" обов\'язкове для заповнення')
      .min(6, 'Пароль повинен містити щонайменше 6 символів'),
    rememberMe: Yup.boolean(),
  });

  const handleSubmit = (values: RegisterFormValues) => {
    console.log('Submitted data:', values);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Реєстрація
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <StyledForm>
            <Field
              name="username"
              type="text"
              label="Username*"
              fullWidth
              as={TextField}
              variant="outlined"
              margin="normal"
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            <Field
              name="email"
              type="email"
              label="Email*"
              fullWidth
              as={TextField}
              variant="outlined"
              margin="normal"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Field
              name="password"
              type="password"
              label="Password*"
              fullWidth
              as={TextField}
              variant="outlined"
              margin="normal"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <CheckMeBox>
              <Checkbox
                name="rememberMe"
                checked={formik.values.rememberMe || false} 
                onChange={formik.handleChange}
              />
              Запам'ятати мене
            </CheckMeBox>

            <ButtonContainer>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!formik.isValid}
              >
                Зареєструватися
              </Button>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
