import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function DadosEntrega() {
	return (
		<>
			<TextField
				id='cep'
				label='cep'
				type='number'
				variant='outlined'
				margin='normal'
			/>

			<TextField
				id='endereco'
				label='Endereço'
				type='text'
				variant='outlined'
				margin='normal'
				fullWidth
			/>
			<TextField
				id='numero'
				label='Número'
				type='number'
				variant='outlined'
				margin='normal'
			/>
			<TextField
				id='estado'
				label='Estado'
				type='text'
				variant='outlined'
				margin='normal'
			/>
			<TextField
				id='cidade'
				label='Cidade'
				type='text'
				variant='outlined'
				margin='normal'
				fullWidth
			/>

			<Button type='submit' variant='contained' color='primary' fullWidth>
				Finalizar cadastro
			</Button>
		</>
	);
}
