import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
	render() {
		return(
			<View style={{backgroundColor: '#FFF', flex:1}}>
				<StatusBar 
					backgroundColor='#19D1C8'
				/>
				<BarraNavegacao voltar navigation={this.props.navigation} corDeFundo='#19D1C8' />
				<View style={styles.topo}>
					<Image source={detalheServicos} />
					<Text style={styles.topoTxt}>Nossos Serviços</Text>
				</View>
				<Text style={styles.servicosTxt}>. Consultoria</Text>
				<Text style={styles.servicosTxt}>. Processos</Text>
				<Text style={styles.servicosTxt}>. Acompanhamento de Projetos</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topo: {
		flexDirection: 'row',
		marginVertical: 20,
	},
	topoTxt: {
		color: '#19D1C8',
		fontSize: 28,
		marginLeft: 10,
		marginTop: 20,
	},
	servicosTxt: {
		fontSize: 16,
		marginLeft: 20,
	}
});
