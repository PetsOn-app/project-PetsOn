//Importações para a composição de parte da página de perfil do usuário:
import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Modal1 from './Modal.js';

//Importando á página de rotas do Back-end:
import api from '../../../../api/api.js';

//IMPORTAÇÕES PARA COMUNICAÇÃO ENTRE O FRONT-END E O FIREBASE:
import { app, storage } from '../../../Firebase/firebase.js';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { render } from 'react-dom';


//Exportação da função da pagina de Perfil do usuário:
export default function Perfil() {

	//Instânciando o JWT para a validação da página:
	const jwt = localStorage.getItem('tokenJWT');
	console.log('jwt');

	//Instânciando o ID do usuário para a validação do usuário que fez a requisição:
	const id_usuarioo = localStorage.getItem('id_user');
	const id = id_usuarioo;
	
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
	//Usando o useEffect para compor á página com a busca dos dados requeridos:
	useEffect(() => {
		async function getDados() {
			const { data } = await api.get(`/Cadastro/dataUser/${id}`);
			setDados(data.message[0]);
			console.log(data.message[0]);
			setLoading(false);

			// if(data.err == '') {
			// 	setDados(data.message[0]);
			// } else{
			// 	alert("Error: " + data.err);
			// }
		}
		getDados();
	}, [tasks]);	
	
  
	//Criando função para o carregamento da inserção dos dados alterados:
	async function dadosUser(event)  {
	  event.preventDefault();

		try {

			//Instânciando o JWT para a validação da página:
			

								
		} catch (err) {
			alert(`Erro na lteração dos dados. Tente novamente. \nCódigo erro: ${err}`);
		}
	}

	
	//Retornando a composição da página com os dados cadastrados:
  	return(
		<View style={styles.perfil}>
			<Image style={styles.img3} source={dados.fotoPerfil} />
			<Image style={styles.img4} source={require('../img/fotoperfil2.jpg')} />
			
			<TouchableOpacity style={styles.modal}>
				<Modal1/>
			</TouchableOpacity>
		</View>
	);
};

//Estilização da página de Perfil:
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
});
