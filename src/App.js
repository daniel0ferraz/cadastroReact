import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import { validarCPF, validarSenha } from './models/cadastro'
import ValidacoesCadastro from './contexts/validacoesCadastro';

export default function App() {

  function aoEnviarForm(dados) {
    console.log(dados)
  }
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">Formulario de Cadastro</Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>

  );
}



