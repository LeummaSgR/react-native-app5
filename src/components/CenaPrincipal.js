import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#FFF', flex: 1 }}>
				<StatusBar 
					backgroundColor = '#CCC'
				/>
				<BarraNavegacao />
				<View style={styles.logo}>
					<Image source={logo} />
				</View>
				<View style={styles.menu}>
					<View style={styles.menuGrupo}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes')}>
							<Image source={menuCliente} style={styles.img} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Contatos')}>
							<Image source={menuContato} style={styles.img} />
						</TouchableOpacity>
					</View>
					<View style={styles.menuGrupo}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Empresa')}>
							<Image source={menuEmpresa} style={styles.img} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Servicos')}>
							<Image source={menuServico} style={styles.img} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30,
	},
	menu: {
		alignItems: 'center'
	},
	menuGrupo: {
		flexDirection: 'row'
	},
	img: {
		margin: 15
	}
});
