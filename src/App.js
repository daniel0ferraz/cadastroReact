import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';


export default function App() {

  function aoEnviarForm(dados) {
    console.log(dados)
  }

  function validarCPF(cpf) {
    if(cpf.length !== 11) {
     return{valido: false, texto: "CPF deve ter 11 dígitos!!"}
    } else{
      return {valido: true, texto:""}
    }
  }
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">Formulario de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>

  );
}



