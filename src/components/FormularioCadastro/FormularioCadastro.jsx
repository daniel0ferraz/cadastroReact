import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
	// definir estado atual do form
	const [etapaAtual, setEtapaAtual] = useState(0);

	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}

	const formulario = [
		<DadosUsuario aoEnviar={proximo} />,
		<DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
		<DadosEntrega aoEnviar={aoEnviar} />,
	];

	return <>{formulario[etapaAtual]}</>;
}

// 1 form cadastro
// 2 apos cadastro exibir form dados pessoais
// 3 apos dadosPessoais exibir dadosEntrega
