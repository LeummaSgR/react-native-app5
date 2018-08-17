import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

const RootStack = createStackNavigator(
	{
		Principal: CenaPrincipal,
		Clientes: CenaClientes,
		Contatos: CenaContatos,
		Empresa: CenaEmpresa,
		Servicos: CenaServicos,
	},
	{
		initialRouteName: 'Principal',
		headerMode: 'none',
	}
);

export default class App extends Component {
	render() {
		return (
			<RootStack style={{ backgroundColor: '#FFF', flex: 1 }} />
		);
	}
}
