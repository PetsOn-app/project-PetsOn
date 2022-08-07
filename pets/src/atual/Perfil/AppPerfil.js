//Importações para a composição COMPLETA da página de perfil do usuário:
import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importações das composições de parte da página de perfil do usuário:
import Header from './src/componentes/header.js';
import Modal1 from './src/componentes/Modal.js';
import SubHeader from './src/componentes/subheader.js';
import Perfil from './src/componentes/perfil.js';
import Teste2 from './src/componentes/teste2.js';

//ATENÇÃO:
//Para instalar a dependencia linear gradient = expo install expo-linear-gradient
//Para instalar depedencia Paper = yarn add react-native-paper


//Exportação da função para Tela do perfil do usuário:
export default function TelaPerfil() {

	const Stack = createNativeStackNavigator();

	return (
		<SafeAreaView> 
			<Header/>

			<Text style={styles.textPerfil}>Nome_dPerfil</Text>
			<View style={styles.perfil}>
				<Image style={styles.img3} source={require('./src/img/fotoperfil1.jpg')}/>
				<Image style={styles.img4} source={require('./src/img/fotoperfil2.jpg')}/>
				
				<TouchableOpacity style={styles.modal}>
					<Modal1/>
				</TouchableOpacity>
			</View>

			<ScrollView>
				<LinearGradient
					// Background Linear Gradient
					colors={['#09A3B2','#04EABD']}
					style={styles.background}>
						
					<View style={styles.box}></View>
					<View style={styles.box}></View>
					<View style={styles.box}></View>					
				</LinearGradient>
			</ScrollView>	
		</SafeAreaView>
	);
}


//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

// Estilização dos containners / Views da página:
const styles= StyleSheet.create({
	perfil: {
		backgroundColor: 'white',
		height: '15%',
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '17%',
		paddingLeft: '17%',
		borderBottomWidth: 3,
		borderBottomColor:'black',
	},
	modal: {
		marginTop: 430,
	},
	img3: {//Foto perfil pessoa
		width: 150, 
		height: 150,
		borderRadius: 100,
	},
	img4: {//Foto perfil animais
		width: 106, 
		height: 106,
		borderRadius: 50,
	},
	textPerfil:{
		fontSize: 20,
		textAlign: 'center',
		marginTop: '2%',
	},
	divisoes:{
		fontSize: 21,
		marginLeft: 35,
		paddingTop: 5,
	  },
	box: {
		height: 350,
		width: 'auto',
		backgroundColor: '#DDD',
		margin: '7%',
	} //só para teste por enquanto
});



