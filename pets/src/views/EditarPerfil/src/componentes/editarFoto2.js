//Importações para a composição de parte da página de perfil do usuário:
import * as React from 'react';
import {useState} from "react";
import {View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';


//Exportação da função para Adcionar/Editar a segunda foto no perfil do usuário:
export default function EditarFoto2() {

	/*
	const [ image, setImage ] = useState('');
	
	async function PhotoAlterPerfilDois(event)  {
	  event.preventDefault();
  
	  try {

	
		const jwt = localStorage.getItem('tokenJWT');
		console.log('jwt');
  
		const photoPerfil = {
			"file": image,
		}
		const response = await axios.put( 'http://localhost:3335/routes/Comum/fotoPerfilAlter/id_usuario', photoPerfil, {
			headers: {
				"Authorization": `Bearer ${jwt}`,
				"Content-Type": "multipart/form-data"
			}, 
		});            
  
		console.log('aqui EditarFoto2 >>>>', response.status);
		if(response.status === 201){
  
		  alert(`Foto de Perfil editada com sucesso!`);
  
		  setImage('');
  
		} else {
		  alert(`Algo deu errado. Por favor, tente novamente!`);
		}
  
		
	  } catch (err) {
  
		alert(`Erro ao tentar inserir a foto. Tente novamente. \nCódigo erro: ${err}`);
		
	  }
	}
	*/

  return(
	<View style={styles.View}>
		<Image style={styles.img1} source={require('../img/fotoperfil2.jpg')} resizeMode='contain' />
		
		<View>				
			<Text style={styles.input}>PetsOn, o amor entre você e o seu animal!</Text>
		</View>
    </View>
  );
}


// Estilização dos containners / Views da página:
const styles= StyleSheet.create({
	View: {
		flexDirection: 'row',
		width: '80%',
	},
	img1: {
		width: 106,
		height: 106,
		borderRadius: 53,
		marginLeft: '7%',
		marginTop: '10%'
	},
	input: {
		borderRadius: 18,
		width: '65%',
		height: 55,
		borderColor: 'gray',
		borderWidth: 1,
		fontSize: 18,
		textAlign: 'justify',
		marginLeft: '2%',
		marginTop: '15%',
		paddingLeft: '3%',
		paddingRight: '3%',
	},
	buttonConfirm: {
    	//Estilização borda
    	borderRadius: 20,
    	border:'1px solid #1E5D63',

    	//Estilização botâo
    	backgroundColor: '#FFFFFF',
    	alignSelf: 'center',
    	padding: '10px',
    	width: '85%',
    	height: '95%',
    	marginTop: '5%',

    	//Estilização texto "Confirmar"
    	textAlign: 'center',
    	color: '#1E5D63',
    	fontSize: 17,
    	fontWeight: 'bold',
    	textTransform: 'uppercase'
  	},
});