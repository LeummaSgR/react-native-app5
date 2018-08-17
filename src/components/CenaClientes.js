import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
	render() {
		return (
			<View style={{backgroundColor: '#FFF', flex:1}}>
				<StatusBar 
					backgroundColor = '#B9C941'
				/>
				<BarraNavegacao voltar navigation={this.props.navigation} corDeFundo='#B9C941' />

				<View style={styles.topo}>
					<Image source={detalheClientes} />
					<View style={styles.topoTitulo}>
						<Text style={styles.topoTxt}>Nossos clientes</Text>
					</View>
				</View>
				<View style={styles.clientes}>
					<Image source={cliente1} />
					<Text style={styles.clientesTxt}>Lorem ipsum dolorem</Text>
				</View>
				<View style={styles.clientes}>
					<Image source={cliente2} />
					<Text style={styles.clientesTxt}>Lorem ipsum dolorem</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	clientes: {
		marginLeft: 25,
		marginTop: 15,
	},
	clientesTxt: {
		marginLeft: 18,
	},
	topo: {
		flexDirection: 'row',
		marginTop: 20,
	},
	topoTitulo: {
		justifyContent: 'center',
		marginLeft: 10,
	},
	topoTxt: {
		color: '#B9C941',
		fontSize: 30,
	}
});
