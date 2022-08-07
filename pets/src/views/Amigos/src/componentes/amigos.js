//Importações para a composição da página Amigos da Tela Amigos:
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


//Exportação da função Amigos da Tela de Amigos:
export default function Amigos() {

  return(
    <View>
		<View style={styles.modo1}>
			<Image style={styles.img1} source={require('../img/Amigo1.png')}/>
			<Text style={styles.text}>MiauAu</Text>
			<TouchableOpacity>
				<Image style={styles.img2} source={require('../img/x.png')}/>
			</TouchableOpacity>
		</View>

		<View style={styles.modo2}>
			<Image style={styles.img1} source={require('../img/Amigo2.png')}/>
			<Text style={styles.text}>_DogShow</Text>
			<TouchableOpacity>
				<Image style={styles.img2} source={require('../img/x.png')}/>
			</TouchableOpacity>
		</View>
    </View>
  );
}


//Estilização da página amigos da Tela de Amigos:
const styles= StyleSheet.create({
	modo1:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		borderTopWidth: 2,
		borderTopColor:'black',
		marginBottom: '5%',
		paddingBottom: '5%',
		paddingTop: '5%',
		paddingRight: '7%',
		paddingLeft: '7%',
		marginTop: '10%'
	},
	modo2:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		marginBottom: '5%',
		paddingBottom: '5%',
		paddingRight: '7%',
		paddingLeft: '7%',
	},
	text:{
		fontSize: 20,
		fontWeight: '500',
	},
	img1:{
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	img2:{
		width: 35,
		height: 35,
	},
});