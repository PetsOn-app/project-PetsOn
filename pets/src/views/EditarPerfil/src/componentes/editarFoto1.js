// //Importações para a composição de parte da página de perfil do usuário:
// import * as React from 'react';
// import { useState, useEffect } from "react";
// import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Platform, RefreshControl } from 'react-native';

// //IMPORTAÇÕES PARA A COMPOSIÇÃO DA INSERÇÃO DA IMAGEM:
// import Constants from 'expo-constants'; // Para pedir às permissões do usuário via código JavaScript.
// import * as Permissions from 'expo-permissions'; // Para solicitar às permissões ao usuário.
// import * as ImagePicker from 'expo-image-picker'; // Para compor a seleção e escolha das imagens, além de selecionar a imagem especificada pelo usuário.

// //Importando á página de rotas do Back-end:
// import api from "../../../../api/api.js";
// import { app, storage } from '../../../Firebase/firebase.js';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// //expo doctor --fix-dependencies

// //Exportação da função para Adcionar/Editar a primeira foto no perfil do usuário:
// export default function EditarFoto1() {

// 	/*
	
// 	//import { request, PERMISSIONS } from 'react-native-permissions';
// 	const handleAutorization = async () => {
//         setCoords(null);
//         let result = await request(
//             Platform.OS === 'ios' ?
//                 PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//                 :
//                 PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//         );
// 	}
// 	*/

// 	const BUCKET = 'petson-eac94.appspot.com';
// 	//Instânciando o useState para INSERIR a foto selecionada pelo usuário:
// 	const [avatar, setAvatar] = useState('');
// 	const [ progress, setProgress ] = useState(0);
// 	//Função para a chamada da seleção das fotos pelo usuário:
// 	async function imagePickerCall() {
		
// 		if(Constants.platform.ios){
// 			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
			
// 			if(status !== 'granted') {
// 				alert("É necessário permitir, para que seja possível\n acessar à camera e ou às fotos de sua galeria.");

// 				return;
// 			}
// 		}

// 		const recebImage = await ImagePicker.launchImageLibraryAsync({
// 			mediaTypes: ImagePicker.MediaTypeOptions.Images
// 		});
// 		console.log(recebImage);

// 		if(recebImage.cancelled) {
// 			return;
// 		}

// 		if(!recebImage.uri) {
// 			return;
// 		}

// 		setAvatar(recebImage);
// 	}

// 	//Função para o envio da imagem ao Banco de Dados:
// 	async function uploadImage(event) {
// 		event.preventDefault();

// 		//Criando formulário do próprio JS:
// 		const data = new FormData();
// 		//Criando pasta para a imagem selecionada:
// 		// type: avatar.type,
// 		data.append('file', JSON.stringify({
// 			uri: avatar.uri,
// 		}));
// 		console.log(data);

// 		// for (let obj of data) {
// 		// 	console.log(obj);
// 		// }
		
// 		// data.storage.append('file', JSON.stringify({
// 		// 	uri: avatar.uri,
// 		// }));

// 		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 		const storageRef = ref(storage, `${data}`);
// 		const uploadStorage = uploadBytesResumable(storageRef, data);

// 		uploadStorage.on("state_changed", snapshot => {
// 				const progresso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
// 				setProgress(progresso);
// 			},
// 			error => {
// 				alert(error);
// 			},
// 			() => {
// 				getDownloadURL(uploadStorage.snapshot.ref).then(url => {
// 					setAvatar(url)}
// 				);
// 			}
// 		);
		

// 		//const {dataUrl} = avatar.uri.data;

// 		const fotoo = {
// 			"file": data,
// 		}
// 		const response = await api.put('/Comum/fotoPerfilAlter/id_usuario', data, {
// 			headers: {
// 				"Authorization": `Bearer ${jwt}`,
// 				"Content-Type": "multipart/form-data"
// 			}, 
// 		});
// 	}

// 	//Instânciando o JWT para a validação da página:
// 	const jwt = localStorage.getItem('tokenJWT');
// 	console.log('jwt');

// 	//Instânciando o ID do usuário para a validação do usuário que fez a requisição:
// 	const id_usuarioo = localStorage.getItem('id_user');
// 	const id = id_usuarioo;
	
// 	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
// 	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
// 	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
// 	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
// 	//Usando o useEffect para compor á página com a busca dos dados requeridos:
// 	useEffect(() => {
// 		async function getPhoto() {
// 			const { data } = await api.get(`/Cadastro/dataUser/${id}`);
// 			setDados(data.message[0]);
// 			setLoading(false);

// 			// if(data.err == '') {
// 			// 	setDados(data.message[0]);
// 			// } else{
// 			// 	alert("Error: " + data.err);
// 			// }
// 		}
// 		getPhoto();
// 	}, [tasks]);	
	
	
// 	//Usando o useState para declarar o estado atual e consequentemente atualizar os dados, caso
// 	// o usuário realize alguma alteração dos dados cadastrados:
// 	// const [ image, setImage ] = useState('');
	
// 	// async function PhotoAlterPerfil(event)  {
// 	//   event.preventDefault();
  
// 	//   try {

// 	// 	//Instânciando o JWT para a validação da página:
// 	// 	const jwt = localStorage.getItem('tokenJWT');
// 	// 	console.log('jwt');
  
// 	// 	//Constante para receber o Objeto com a foto inserida pelo usuário para alteração:
// 	// 	const photoPerfil = {
// 	// 		"file": image,
// 	// 	}
// 	// 	const response = await api.put( '/Comum/fotoPerfilAlter/id_usuario', photoPerfil, {
// 	// 		headers: {
// 	// 			"Authorization": `Bearer ${jwt}`,
// 	// 			"Content-Type": "multipart/form-data"
// 	// 		}, 
// 	// 	});            
  
// 	// 	console.log('aqui >>>>', response.status);


// 	// 	//Consição caso o carregamento do envio dos dados ocorra com sucesso:
// 	// 	if(response.status === 201){
  
// 	// 	  alert(`Foto de Perfil editada com sucesso!`);
  
// 	// 	  setImage(image);
  
// 	// 	} else {
// 	// 	  alert(`Algo deu errado. Por favor, tente novamente!`);
// 	// 	}
  
		
// 	//   } catch (err) {
  
// 	// 	alert(`Erro ao tentar inserir a foto. Tente novamente. \nCódigo erro: ${err}`);
		
// 	//   }
// 	// }
	
// // `https://firebasestorage.googleapis.com/${BUCKET}/1654629014321.PNG`
// 	//Retornando a composição da página com os dados cadastrados e campos para a alteração dos mesmos:
//   	return(
// 		<View style={styles.View}>
// 			<form >
// 				<Image style={styles.img1} source={{
// 					uri: avatar
// 					? 
// 					avatar.uri 
// 					:
// 					require('../img/fotoPerfil1.jpg')}} 
// 				/>

// 				<TouchableOpacity onPress={imagePickerCall}>
// 					<Text style={styles.buttonConfirm}>Escolher Imagem</Text>
// 				</TouchableOpacity>

// 				<TouchableOpacity onPress={uploadImage}>
// 					<Text style={styles.buttonConfirm}>Enviar Imagem</Text>
// 				</TouchableOpacity>


// 				{/* <TouchableOpacity>
// 					<input type='file' name='file' 
// 						style={{
// 							borderRadius: 10,
// 							width: '80%',
// 							height: '35%',
// 							borderColor: 'black',
// 							borderWidth: 2,
// 							fontSize: 16,
// 							textAlign: 'center',
// 							alignItems: 'center',
// 							marginLeft: '5%',
// 							marginTop: '4%',
// 							paddingLeft: '3%'
// 						}}
// 						placeholder=" "
// 						value={image}
// 						onChange={e => setImage(e.target.value)}
// 					/>					
// 				</TouchableOpacity>

// 				<TouchableOpacity onPress={PhotoAlterPerfil}>
// 					<Text style={styles.buttonConfirm}>Inserir Imagem</Text>
// 				</TouchableOpacity> */}
// 			</form>
// 		</View>
//   	);
// }


// // Estilização dos containners / Views da página:
// const styles= StyleSheet.create({
// 	View: {
// 		flexDirection: 'row',
// 		width: '100%',
// 	},
// 	img1: {
// 		width: 60,
// 		height: 60,
// 		borderRadius: 10,
//     	marginLeft: '7%',
// 		marginTop: '10%'
// 	},
// 	input: {
// 		borderRadius: 10,
// 		width: '65%',
// 		height: '35%',
// 		borderColor: 'black',
// 		borderWidth: 2,
// 		fontSize: 18,
// 		marginLeft: '5%',
// 		marginTop: '13%',
// 		paddingLeft: '3%'
// 	},  
//  	buttonConfirm: {
//     	//Estilização borda
//     	borderRadius: 20,
//     	border:'1px solid #1E5D63',

//     	//Estilização botâo
//     	backgroundColor: '#FFFFFF',
//     	alignSelf: 'center',
//     	padding: '10px',
//     	width: '85%',
//     	height: '95%',
//     	marginTop: '5%',

//     	//Estilização texto "Confirmar"
//     	textAlign: 'center',
//     	color: '#1E5D63',
//     	fontSize: 17,
//     	fontWeight: 'bold',
//     	textTransform: 'uppercase'
//   	},
// });