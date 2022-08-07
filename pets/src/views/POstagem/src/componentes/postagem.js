import * as React from 'react';
import { useState, useEffect } from "react";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import Box1 from './box1.js';
import Box2 from './box2.js';
import Box3 from './box3.js';

//Importando á página de rotas do Back-end:
import api from "../../../../api/api.js";

export default function Postagem() {

	//Instânciando o JWT para a validação da página:
	const jwt = localStorage.getItem('tokenJWT');
	console.log('jwt');

	//Instânciando o ID do usuário para a validação do usuário que fez a requisição:
	const id_usuarioo = localStorage.getItem('id_user');
	const id = id_usuarioo;
	
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
	//const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
	//Usando o useEffect para compor á página com a busca dos dados requeridos:
	/*useEffect(() => {
		async function getPostagens() {
			const { data } = await api.get(`/Listar/Postagens/${id}`);
			setDados(data.message[0]);
			//setLoading(false);

			// if(data.err == '') {
			// 	setDados(data.message[0]);
			// } else{
			// 	alert("Error: " + data.err);
			// }
		}
		getPostagens();
	}, [tasks]);	
	
	//Usando o useState para declarar o estado atual e consequentemente atualizar os dados, caso
	// o usuário realize alguma alteração dos dados cadastrados:
	const [ image, setImage ] = useState('');

*/
  return(
    <LinearGradient
	   // Background Linear Gradient
	   colors={['#09A3B2','#04EABD']}
	   style={styles.background}
	>
		<Image style={styles.img4} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFGL5-5xawLNaJlvvB52-1C-T3tIeaFoq2ZEKxrMj5KJ6iOygIXRy98hCmQ4yCMBMd-vZtd6QqGfCRgLJuiQwZtgEK13r-9osRrtn3IfkpHXNNXil-9k-mKQK-wYwobS3yzTMqJW25_UUbEsnlES3fiINA2SLc4RTt-2krF5eCDjMwPMLH9f8mCddbieDVjix?width=371&height=40&cropmode=none'}} />
        <Box1/>
		<Box2/>
		<Box3/>
	</LinearGradient>
  );
}




const styles= StyleSheet.create({
	img4:{
		width: 430, 
		height: 27,
		marginTop: -15
	}
});