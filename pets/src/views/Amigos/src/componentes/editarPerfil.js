//Importações para a composição da página Editar Perfil da Tela de Amigos:
import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


//Exportação da função Editar Perfil da Tela de Amigos:
export default function EditarPerfil() {

  return(
    <View style={styles.view}>
    	<Text style={styles.text}>Nome do Usuário</Text>
    	<TextInput style={styles.input1} placeholder="nome_dPerfil"/>

		<Text style={styles.text}>Descrição:</Text>
		<TextInput style={styles.input2} multiline={true} numberOfLines={7}/>

		<TouchableOpacity onPress='buttonSalvar'>
    		<Text style={styles.button}>Salvar Alterações</Text>
      	</TouchableOpacity>
    </View>
  );
}


//Estuilização da página Editar Perfil da Tela de Amigos:
const styles= StyleSheet.create({
	view:{
		borderBottomWidth: 2,
		borderBottomColor: '#fafffb',
		paddingBottom: '10%'
		
	},
	text:{
		fontSize: 23,
		letterSpacing: 1,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '10%',
		color:'#fafffb'
	},
	input1:{
		borderRadius: 10,
		width: '90%',
		height: '10%',
		borderColor: '#fafffb',
		borderWidth: 2,
		fontSize: 18,
    	marginLeft: '5%',
    	marginTop: '5%',
		paddingLeft: '3%',
		color:'#fafffb'
	},
	input2:{
		borderRadius: 10,
		width: '90%',
		borderColor: '#fafffb',
		borderWidth: 2,
		fontSize: 18,
    	marginLeft: '5%',
    	marginTop: '5%',
		color:'#fafffb'
	},
	button:{
		borderRadius: 100,
		width: '90%',
		color: '#04EABD',
		borderColor: '#1E5D63',
		borderWidth: 2,
		fontSize: 16,
    	marginLeft: '5%',
    	marginTop: '10%',
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 10,
	}
});