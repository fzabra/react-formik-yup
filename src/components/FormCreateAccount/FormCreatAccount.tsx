import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomCheckbox, CustomButton, CustomTextField } from './StyledExtends';

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  confirmarEmail: Yup.string()
    .oneOf([Yup.ref('email'), ''], 'Os e-mails devem corresponder')
    .required('Confirmação de e-mail é obrigatória'),
  senha: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .max(12, 'A senha deve conter no máximo 12 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[@$!%*?&#]/, 'A senha deve conter pelo menos um caractere especial')
    .required('A senha é obrigatória'),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref('senha'), ''], 'As senhas devem corresponder')
    .required('Confirmação de senha é obrigatória'),
});

const initialValues = {
  nome: '',
  email: '',
  confirmarEmail: '',
  senha: '',
  confirmarSenha: '',
};

const FormCreatAccount: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                as={CustomTextField}
                label="Nome"
                name="nome"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage className="errormsg" name="nome" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={CustomTextField}
                label="E-mail"
                name="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage className="errormsg" name="email" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={CustomTextField}
                label="Confirmar E-mail"
                name="confirmarEmail"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage className="errormsg" name="confirmarEmail" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={CustomTextField}
                label="Senha"
                name="senha"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ErrorMessage className="errormsg" name="senha" component="div" />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={CustomTextField}
                label="Confirmar Senha"
                name="confirmarSenha"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ErrorMessage className="errormsg" name="confirmarSenha" component="div" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<CustomCheckbox name="autorizacaoImagem" />}
                label="Eu autorizo o uso de imagem"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<CustomCheckbox name="receberNewsletter" />}
                label="Aceito receber newsletter"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomButton type="submit" variant="contained" disabled={isSubmitting}>
                Enviar
              </CustomButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormCreatAccount;
