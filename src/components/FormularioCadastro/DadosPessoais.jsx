import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

export default function DadosPessoais({ aoEnviar, validarCPF }) {
	const [nome, setNome] = useState('');
	const [sobrenome, setSobrenome] = useState('');
	const [cpf, setCpf] = useState('');
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const [erros, setErros] = useState({ cpf: { valido: true, text: '' } });

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
			}}>
			<TextField
				value={nome}
				onChange={(event) => {
					setNome(event.target.value);
				}}
				id='nome'
				label='Nome'
				variant='outlined'
				margin='normal'
				fullWidth
			/>
			<TextField
				value={sobrenome}
				onChange={(event) => {
					setSobrenome(event.target.value);
				}}
				id='sobrenome'
				label='Sobrenome'
				variant='outlined'
				margin='normal'
				fullWidth
			/>
			<TextField
				value={cpf}
				onChange={(event) => {
					setCpf(event.target.value);
				}}
				onBlur={(e) => {
					const evalido = validarCPF(cpf);
					setErros({ cpf: evalido });
				}}
				error={!erros.cpf.valido}
				helperText={erros.cpf.texto}
				id='CPF'
				label='CPF'
				variant='outlined'
				margin='normal'
				fullWidth
				mask='000.000.000-00'
			/>

			<FormControlLabel
				label='Promoções'
				control={
					<Switch
						checked={promocoes}
						onChange={(event) => {
							setPromocoes(event.target.checked);
						}}
						name='promocoes'
						color='primary'
					/>
				}
			/>

			<FormControlLabel
				label='Novidades'
				control={
					<Switch
						checked={novidades}
						onChange={(event) => {
							setNovidades(event.target.checked);
						}}
						name='novidades'
						color='primary'
					/>
				}
			/>

			<Button type='submit' variant='contained' color='primary'>
				Cadastrar
			</Button>
		</form>
	);
}
