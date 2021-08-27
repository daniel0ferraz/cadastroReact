import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';


export default function App() {
  return (

    <Container component="article" maxWidth="sm">
      <Typography variant="h3"  align="center">Formulario de Cadastro</Typography>
      <FormularioCadastro />
    </Container>

  );
}

