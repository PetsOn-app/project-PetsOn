//Importações para a composição de parte da página de Configurações:
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


//EXPORTAÇÃO DA FUNÇÃO QUE IRÁ MUDAR A COR DA PÁGINA, CASO O USUÁRIO SELECIONE O 
// MODO NOTURNO OU CLARO:
export default function Configuracao() {

  	return(
  	  <View style={styles.modo}>
        	<Text style={styles.text}>modo noturno</Text>
			<TouchableOpacity onPress={()=>setTema(!tema)}>
				{tema ?
					<Image style={styles.modoNoturno} source={require('../img/modoClaro.png')}/>
					:
					<Image style={styles.modoNoturno} source={require('../img/modoNoturno.png')}/>
				}
			</TouchableOpacity>
		</View>
  	);
}

// Estilização dos containners / Views da página:
const styles= StyleSheet.create({
	modo:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		marginBottom: '5%',
		marginLeft: '7%',
		marginRight: '7%',
		paddingBottom: '5%',
	},
	text:{
		fontSize: 20,
		fontWeight: '500',
	},
	text1:{
		fontSize: 20,
		fontWeight: '500',
		marginLeft: '7%',
		marginRight: '7%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		marginBottom: '5%',
		paddingBottom: '5%',
	},
	modoNoturno:{
		height: 40,
		width: 100,
	},
	text2:{
		fontSize: 20,
		fontWeight: '500',
		marginLeft: '7%',
		marginRight: '7%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		paddingBottom: '5%',
		marginTop: '4%',
		color: '#87CEFA'
	}
});
