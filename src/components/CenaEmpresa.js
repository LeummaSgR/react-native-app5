import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
	render() {
		return (
			<View style={{backgroundColor: '#FFF', flex:1}}>
				<StatusBar 
					backgroundColor = '#EC7148'
				/>
				<BarraNavegacao voltar navigation={this.props.navigation} corDeFundo='#EC7148' />

				<View style={styles.topo}>
					<Image source={detalheEmpresa} />
					<View style={styles.topoTitulo}>
						<Text style={styles.topoTxt}>A Empresa</Text>
					</View>
				</View>
				<Text style={styles.detalheEmpresa}>Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorem sit</Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	detalheEmpresa: {
		fontSize: 16,
		marginTop: 20,
		marginHorizontal: 10
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
		color: '#EC7148',
		fontSize: 30,
	}
});
