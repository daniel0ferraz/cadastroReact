import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
	// definir estado atual do form
	const [etapaAtual, setEtapaAtual] = useState(0);
	const [dadosColetados, setDados] = useState({});

	useEffect(() => {
		if (etapaAtual === formularios.length - 1) {
			aoEnviar(dadosColetados);
		}
		// ciclo de vida do componente, dispara o estado
		// console.log(dadosColetados);
	});

	const formularios = [
		<DadosUsuario aoEnviar={coletarDados} />,
		<DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
		<DadosEntrega aoEnviar={coletarDados} />,
		<Typography variant='h5'>Obrigado pelo Cadastro!</Typography>,
	];

	function coletarDados(dados) {
		setDados({ ...dadosColetados, ...dados });
		proximo();
	}
	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}
	return (
		<>
			<Stepper activeStep={etapaAtual}>
				<Step>
					<StepLabel>Login</StepLabel>
				</Step>
				<Step>
					<StepLabel>Dados Pessoais</StepLabel>
				</Step>
				<Step>
					<StepLabel>Entrega</StepLabel>
				</Step>
				<Step>
					<StepLabel>Finalização</StepLabel>
				</Step>
			</Stepper>
			{formularios[etapaAtual]}
		</>
	);
}

// 1 form cadastro
// 2 apos cadastro exibir form dados pessoais
// 3 apos dadosPessoais exibir dadosEntrega
