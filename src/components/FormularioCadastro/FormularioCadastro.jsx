import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
	// definir estado atual do form
	const [etapaAtual, setEtapaAtual] = useState(1);

	function formularioAtual(etapa) {
		switch (etapa) {
			case 0:
				return <DadosUsuario />;

			case 1:
				return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />;

			case 2:
				return <DadosEntrega />;

			default:
				return <Typography>Erro ao selecionar formulário</Typography>;
		}
	}
	return <>
	{formularioAtual(etapaAtual)}</>;
}

// 1 form cadastro
// 2 apos cadastro exibir form dados pessoais
// 3 apos dadosPessoais exibir dadosEntrega
