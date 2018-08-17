import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaClientes extends Component {
	render() {
		return (
			<View style={{backgroundColor: '#FFF', flex:1}}>
				<StatusBar 
					backgroundColor = '#61BD8C'
				/>
				<BarraNavegacao voltar navigation={this.props.navigation} corDeFundo='#61BD8C' />

				<View style={styles.topo}>
					<Image source={detalheContato} />
					<View style={styles.topoTitulo}>
						<Text style={styles.topoTxt}>Contatos</Text>
					</View>
				</View>
				<View style={styles.detalheContato}>
					<Text style={styles.detalheContatoTxt}>TEL: (11) 1234-1234</Text>
					<Text style={styles.detalheContatoTxt}>CEL: (11) 91234-1234</Text>
					<Text style={styles.detalheContatoTxt}>EMAIL: contato@atmconsultoria.com</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	detalheContato: {
		marginTop: 20,
		padding: 20,
	},
	detalheContatoTxt: {
		fontSize: 15,
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
		color: '#61BD8C',
		fontSize: 30,
	}
});
