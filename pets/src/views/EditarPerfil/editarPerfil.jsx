//Importações para a composição da Edição do Perfil da página de perfil do usuário:
import * as React from 'react';
import { useState, useEffect } from "react";
//import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, TextInput, Image, Platform, RefreshControl, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import AsyncStorage  from '@react-native-async-storage/async-storage';


//Importações das composições de parte da página da tela de Configuração do usuário:
import EditarFoto2 from './src/componentes/editarFoto2.js';


//Importando á página de rotas do Back-end:
import api from '../../api/api.js';

//expo doctor --fix-dependencies


//Exportando à página da TELA DE CONFIGURAÇÕES DO USUÁRIO:
export default function TelaConfg({navigation}) {

	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);

	//Endereço da pasta do STORAGE do Firebase:
	const BUCKET = 'petson-eac94.appspot.com';
		
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
	//Usando o useEffect para compor á página com a busca dos dados requeridos:
	useEffect(() => {
		async function getDados() {
		
			const id_usuario = await AsyncStorage.getItem('@id_use');
			const id = id_usuario;
	
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
	


	//Usando o useState para declarar o estado atual e consequentemente atualizar os dados, caso
	// o usuário realize alguma alteração dos dados cadastrados:
	const [	url, 		setUrl		 ] = useState(''); // Iniciando a Url como vazia.
	const [ Username, 	setUsername  ] = useState('');
	const [ email, 		setEmail     ] = useState('');
	const [ password,	setPassword  ] = useState('');
	const [ phone,		setPhone     ] = useState('');
	const [ typeCount, 	setTypeCount ] = useState('');
  

	
	//Criando função para o carregamento da inserção dos dados alterados:
	async function dadosUser(event)  {
	  event.preventDefault();

		try {
			
			//Instânciando o JWT para validar á página:
			const jwt = await AsyncStorage.getItem("@tokenJWT");

			//Instânciando o ID do usuário:
			const id_usuario = await AsyncStorage.getItem('@id_use');
			const id = id_usuario;

			//Constante para receber o Objeto com os dados inseridos pelo usuário para alteração:
			const alterDados = {
				"email": email,
				"password": password,
				"name": Username,
				"telephone": phone,
				"typeCount": typeCount,
			}
			const respost = await api.put(`/Comum/perfilAlter/${id}`, alterDados, {
				headers: {
					"Authorization": `Bearer ${jwt}`,
					"Content-Type": "application/json",
				},
			});
			console.log('aqui Editar Perfil >>>>', respost.status);

			const envioURL = {
				"file": url,
			}
			const response = await api.put('/Comum/fotoPerfilAlter/id_usuario', envioURL, {
				headers: {
					"Authorization": `Bearer ${jwt}`,
					"Content-Type": "multipart/form-data"
				}, 
			});

			 
			//Consição caso o carregamento do envio dos dados ocorra com sucesso:
			if(respost.status === 201){
	
				alert(`Alterações realizadas com sucesso!: ${Username}`);
		
				setUrl('');
				setUsername('');
				setEmail('');
				setPassword('');
				setPhone('');
				setTypeCount('');
		
				navigation.navigate('configuracao');				
	
			}  if(response.status === 404){
	
				alert(`Dados não encontrados.`);
	
			} /*if(response.status === 401){
	
				alert(`Por favor, Preencha Todos os campos.`);

			}*/ if(response.status === 400){
	
				alert(`Verifique se todos os campos estão preenchidos corretamente.`);

			} if(response.status === 500){
	
				alert(`Sem conexão com o Servidor.`);

			}
			
					
		} catch (err) {
			alert(`Erro na lteração dos dados. Tente novamente. \nCódigo erro: ${err}`);
		}
	}

	 // `https://firebasestorage.googleapis.com/${BUCKET}/${dados.fotoPerfil}`
	 // `https://firebasestorage.googleapis.com/${BUCKET}/1654629014321.PNG`
	 //Retornando a composição da página com os dados cadastrados e campos para a alteração dos mesmos:
	return (
		<ScrollView style={{backgroundColor: 'white'}} >
		<SafeAreaView >
			<View style={styles.header}> 
				<TouchableOpacity onPress={() => {
						navigation.navigate('configuracao');
					}}
				>
					<Text style={styles.textConfig}>Configurações</Text>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
				}}
				>					
					<Image style={styles.img01} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
					/>
				</TouchableOpacity>
			</View>
			
			<View style={styles.subHeader}>
				<TouchableOpacity style={styles.botaoSand} onPress={() => {
					navigation.navigate('configuracao');
				}}
				>
					<Image style={styles.img2} source={require('../Configuraçao/src/img/menu2.1.png')}/>
				</TouchableOpacity>

				<Searchbar style={styles.pesquisa}
					placeholder="Pesquise aqui"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</View>
			
			<Text style={styles.text1}>Editar Perfil</Text>
			<Image style={styles.img1} source={{uri: dados.fotoPerfil}} resizeMode='contain'
			/>
			
			<EditarFoto2/>
			
			<View style={styles.view}>
				<Text style={styles.text}>Link da Imagem do Perfil: </Text>
				<TextInput style={styles.input1}
					value={url}
					onChangeText={e => setUrl(e)}
					required 
				/>

				<Text style={styles.text}>Nome do usuário: </Text>
				<Text style={styles.textDados}>NOME: {dados.nome}</Text>
				<TextInput style={styles.input1}
					value={Username}
					onChangeText={e => setUsername(e)}
					required 
				/>

				<Text style={styles.text}>Email cadastrado: </Text>
				<Text style={styles.textDados}>EMAIL: {dados.email}</Text>
				<TextInput style={styles.input1}
					value={email}
					onChangeText={e => setEmail(e)}
					required 
				/>

				<Text style={styles.text}>Número de Celular: </Text>
				<Text style={styles.textDados}>CELULAR: {dados.telefone}</Text>
				<TextInput style={styles.input1}
					value={phone}
					keyboardType='numeric'
					onChangeText={e => setPhone(e)}
					required 
				/>

				<Text style={styles.text}>Tipo de Conta: </Text>
				<Text style={styles.textDados}>TIPO: {dados.tipoConta}</Text>
				<TextInput style={styles.input1}
					value={typeCount}
					onChangeText={e => setTypeCount(e)}
					required 
				/>

				<Text style={styles.text}>Para alteração dos dados, insira a sua senha: </Text>
				<TextInput style={styles.input1}
					value={password}
					keyboardType='numeric'
					onChangeText={e => setPassword(e)}
					required 
				/>

				<TouchableOpacity onPress={dadosUser}>
					<Text style={styles.button}>Salvar Alterações</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.view1}>
				<Text style={styles.textExclusao}>Excluir sua conta</Text>
				
				<TouchableOpacity onPress={() => {
					navigation.navigate('excluirPerfil');
				}}>
					<Text style={styles.button1}>Ok</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
		</ScrollView>
	);
}



//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho:

//Estilização da página da Tela de Configurações do usuário:
const styles= StyleSheet.create({
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		height: '8%',
		marginTop: '5%'
	},
	textConfig: {
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase',
		marginTop: '15%',
	},
  	img01: { //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
		marginTop: '70%',
	},
	subHeader: {
		backgroundColor: 'white',
		height: '8%',
		width: '100%',
		textTransform: 'uppercase',
		marginTop: '5%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: '20%'
	},
	img2:{
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa:{
		borderRadius: 100,
		width: '80%',
		marginBottom: '20%'
	},
	text1: {
		fontSize: 25,
		letterSpacing: 3,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '4%'
	},
	view1: {
		flexDirection: 'row',
    	height: 200,
		width: '90%',
	},
	textExclusao: {
		fontSize: 20,
		letterSpacing: 1,
		textTransform: 'uppercase',
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '5%',
	},
	button1: {
		borderRadius: 100,
		width: '100%',
		color: '#1E5D63',
		borderColor: '#04EABD',
		borderWidth: 2,
		fontSize: 18,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '8%',
		textAlign: 'center',
		fontWeight: 'bold',
    	padding: 5,
		paddingLeft: 35,
    	paddingRight: 35,
	},
	view:{
		borderBottomWidth: 2,
		borderBottomColor: 'black',
		paddingBottom: '5%',
		width: '100%',
		height: 1100,
	},
	text:{
		fontSize: 23,
		letterSpacing: 1,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '10%'
	},
	textDados: {
		fontSize: 16,
		letterSpacing: 1,
		marginLeft: '5%',
		color: '#1E5D63',
		textAlign: 'justify',
		textTransform: 'uppercase',
	},
	input1:{
		borderRadius: 10,
		width: '90%',
		height: '4%',
		borderColor: 'black',
		borderWidth: 2,
		fontSize: 18,
		marginLeft: '5%',
		marginTop: '5%',
	},
	input2:{
		borderRadius: 10,
		width: '90%',
		borderColor: 'black',
		borderWidth: 2,
		fontSize: 18,
		marginLeft: '5%',
		marginTop: '5%',
		
	},
	button:{
		borderRadius: 100,
		width: '90%',
		color: '#1E5D63',
		borderColor: '#04EABD',
		borderWidth: 2,
		fontSize: 16,
		marginLeft: '5%',
		marginTop: '10%',
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 5,
		alignItems: 'center'
	},
	View: {
		flexDirection: 'row',
		width: '100%',
	},
	img1: {
		width: 150,
		height: 150,
		borderRadius: 100,
    	marginLeft: '7%',
		marginTop: '10%'
	},
	input: {
		borderRadius: 10,
		width: '65%',
		height: '35%',
		borderColor: 'black',
		borderWidth: 2,
		fontSize: 18,
		marginLeft: '5%',
		marginTop: '13%',
		paddingLeft: '3%'
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



































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //ATUAL - 23-06-2022:
// //Exportando à página da TELA DE CONFIGURAÇÕES DO USUÁRIO:
// export default function TelaConfg({navigation}) {

// 	const [searchQuery, setSearchQuery] = useState('');
//   	const onChangeSearch = query => setSearchQuery(query);

// 	//Endereço da pasta do STORAGE do Firebase:
// 	const BUCKET = 'petson-eac94.appspot.com';

// 	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
// 	const [image, setImage] = useState(null); // Iniciando a imagem como vazia:
// 	const [url, setUrl] = useState(""); // Iniciando a Url como vazia.


// 	//Função para selecionar a imagem:
// 	const handleChange = e => {
// 		if(e.target.files[0]){
// 			setImage(e.target.files[0]);
// 		}
// 	};

// 	//Função para o envio da imagem selecionada ao Firebase:
// 	const handleUpload = (event) => {
// 		event.preventDefault();

// 		const storageRef = ref(firebase, `${image.lastModified}`);
// 		const uploadStorage = uploadBytesResumable(storageRef, image);

// 		uploadStorage.on("state_changed", snapshot => {
// 				const progresso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
// 				//setProgress(progresso);
// 			},
// 			error => {
// 				alert(error);
// 			},
// 			() => {
// 				getDownloadURL(uploadStorage.snapshot.ref).then(url => {
// 					setUrl(url)}
// 				);
// 			}
// 		);
		
// /*
// 		const uploadTask = storage.ref(`perfil/${image.lastModified}`).put(image);
// 		uploadTask.on(
// 			"state_changed",
// 			snapshot => {},
// 			error => {
// 				console.log(error);
// 			},
// 			() => {
// 				storage
// 					.ref("perfil")
// 					.child(image.name)
// 					.getDownloadURL()
// 					.then(url => {
// 						console.log(url);
// 						setUrl(url);
// 					});
// 			}
// 		);*/
// 	};

// 	console.log("IMAGEM SELECIONADA: ", image);
// 	console.log("IMG ", image);
// 	console.log("URL:  " , url);

	


// 	/*
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
// 	*/


// 	////////////////////////////////////////////////////////////////////////////////////////////
	
// 	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
// 	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
// 	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
// 	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
// 	//Usando o useEffect para compor á página com a busca dos dados requeridos:
// 	useEffect(() => {
// 		async function getDados() {
		
// 			const id_usuario = await AsyncStorage.getItem('@id_use');
// 			const id = id_usuario;
	
// 			const { data } = await api.get(`/Cadastro/dataUser/${id}`);
// 			setDados(data.message[0]);
// 			console.log(data.message[0]);
// 			setLoading(false);

// 			// if(data.err == '') {
// 			// 	setDados(data.message[0]);
// 			// } else{
// 			// 	alert("Error: " + data.err);
// 			// }
// 		}
// 		getDados();
// 	}, [tasks]);	
	

// 	//Usando o useState para declarar o estado atual e consequentemente atualizar os dados, caso
// 	// o usuário realize alguma alteração dos dados cadastrados:
// 	const [ Username, 	setUsername  ] = useState('');
// 	const [ email, 		setEmail     ] = useState('');
// 	const [ password,	setPassword  ] = useState('');
// 	const [ phone,		setPhone     ] = useState('');
// 	const [ typeCount, 	setTypeCount ] = useState('');
  

	
// 	//Criando função para o carregamento da inserção dos dados alterados:
// 	async function dadosUser(event)  {
// 	  event.preventDefault();

// 		try {
			
// 			//Instânciando o JWT para validar á página:
// 			const jwt = await AsyncStorage.getItem("@tokenJWT");

// 			//Instânciando o ID do usuário:
// 			const id_usuario = await AsyncStorage.getItem('@id_use');
// 			const id = id_usuario;

// 			//Constante para receber o Objeto com os dados inseridos pelo usuário para alteração:
// 			const alterDados = {
// 				"email": email,
// 				"password": password,
// 				"name": Username,
// 				"telephone": phone,
// 				"typeCount": typeCount,
// 			}
// 			const respost = await api.put(`/Comum/perfilAlter/${id}`, alterDados, {
// 				headers: {
// 					"Authorization": `Bearer ${jwt}`,
// 					"Content-Type": "application/json",
// 				},
// 			});
// 			console.log('aqui Editar Perfil >>>>', respost.status);

// 			const envioURL = {
// 				"file": url,
// 			}
// 			const response = await api.put('/Comum/fotoPerfilAlter/id_usuario', envioURL, {
// 				headers: {
// 					"Authorization": `Bearer ${jwt}`,
// 					"Content-Type": "multipart/form-data"
// 				}, 
// 			});

			 
// 			//Consição caso o carregamento do envio dos dados ocorra com sucesso:
// 			if(respost.status === 201){
	
// 				alert(`Alterações realizadas com sucesso!: ${Username}`);
		
// 				setUsername('');
// 				setEmail('');
// 				setPassword('');
// 				setPhone('');
// 				setTypeCount('');
// 				setImage(null);
		
// 				navigation.navigate('configuracao');				
	
// 			}  if(response.status === 404){
	
// 				alert(`Dados não encontrados.`);
	
// 			} /*if(response.status === 401){
	
// 				alert(`Por favor, Preencha Todos os campos.`);

// 			}*/ if(response.status === 400){
	
// 				alert(`Verifique se todos os campos estão preenchidos corretamente.`);

// 			} if(response.status === 500){
	
// 				alert(`Sem conexão com o Servidor.`);

// 			}
			
					
// 		} catch (err) {
// 			alert(`Erro na lteração dos dados. Tente novamente. \nCódigo erro: ${err}`);
// 		}
// 	}

// 	 // `https://firebasestorage.googleapis.com/${BUCKET}/${dados.fotoPerfil}`
// 	 // `https://firebasestorage.googleapis.com/${BUCKET}/1654629014321.PNG`
// 	 //Retornando a composição da página com os dados cadastrados e campos para a alteração dos mesmos:
// 	return (
// 		<SafeAreaView style={{backgroundColor: 'white'}} >
// 		<ScrollView>
// 			<View style={styles.header}> 
// 				<TouchableOpacity onPress={() => {
// 						navigation.navigate('configuracao');
// 					}}
// 				>
// 					<Text style={styles.textConfig}>Configurações</Text>
// 				</TouchableOpacity>
				
// 				<TouchableOpacity onPress={() => {
// 					navigation.navigate('postagens');
// 				}}
// 				>					
// 					<Image style={styles.img01} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
// 					/>
// 				</TouchableOpacity>
// 			</View>
			
// 			<View style={styles.subHeader}>
// 				<TouchableOpacity style={styles.botaoSand} onPress={() => {
// 					navigation.navigate('configuracao');
// 				}}
// 				>
// 					<Image style={styles.img2} source={require('../Configuraçao/src/img/menu2.1.png')}/>
// 				</TouchableOpacity>

// 				<Searchbar style={styles.pesquisa}
// 					placeholder="Pesquise aqui"
// 					onChangeText={onChangeSearch}
// 					value={searchQuery}
// 				/>
// 			</View>
			
// 			<Text style={styles.text1}>Editar Perfil</Text>
// 			<Image style={styles.img1} source={{uri: dados.fotoPerfil}}
// 			/>

// 			{/* <View style={styles.View}>
// 				{/* <Image style={styles.img1} source={dados.fotoPerfil}
// 				/> */}
// 					{/* defaultSource    source={require('./src/img/fotoPerfil1.jpg')}
// 					<img src={dados.fotoPerfil} style={{
// 													width: 60,
// 													height: 60,
// 													borderRadius: 10,
// 													marginLeft: '7%',
// 													marginTop: '10%'
// 												}}
// 					/> */}
					
					
// 					{/* <TextInput type="file" 
// 							style={{
// 								backgroundColor: '#04EABD',
// 								color: '#1E5D63',
// 								borderColor: '#1E5D63',
// 								borderRadius: 100,
// 								fontWeight: 'bold',
// 								fontSize: 14,
// 								padding: 8,
// 								marginLeft: '7%',
// 							}}  onChange={handleChange}
// 					/> */}
						
// 					{/* <TouchableOpacity  style={{
// 								backgroundColor: '#04EABD',
// 								borderColor: '#1E5D63',
// 								fontWeight: 'bold',
// 								fontSize: 18,
// 								color: '#1E5D63',
// 								padding: 5,
// 								borderRadius: 100,
// 								margin: '7%',
// 							}} onPress={handleUpload}
// 					> Confirmar imagem selecionada
// 					</TouchableOpacity> */}
					


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
// 				</TouchableOpacity> 
// 			</View> */}


// 			<EditarFoto2/>
			
// 			<View style={styles.view}>
// 				<Text style={styles.text}>Nome do usuário: </Text>
// 				<Text style={styles.textDados}>NOME: {dados.nome}</Text>
// 				<TextInput style={styles.input1}
// 					value={Username}
// 					onChangeText={e => setUsername(e)}
// 					required 
// 				/>

// 				<Text style={styles.text}>Email cadastrado: </Text>
// 				<Text style={styles.textDados}>EMAIL: {dados.email}</Text>
// 				<TextInput style={styles.input1}
// 					value={email}
// 					onChangeText={e => setEmail(e)}
// 					required 
// 				/>

// 				<Text style={styles.text}>Número de Celular: </Text>
// 				<Text style={styles.textDados}>CELULAR: {dados.telefone}</Text>
// 				<TextInput style={styles.input1}
// 					value={phone}
// 					keyboardType='numeric'
// 					onChangeText={e => setPhone(e)}
// 					required 
// 				/>

// 				<Text style={styles.text}>Tipo de Conta: </Text>
// 				<Text style={styles.textDados}>TIPO: {dados.tipoConta}</Text>
// 				<TextInput style={styles.input1}
// 					value={typeCount}
// 					onChangeText={e => setTypeCount(e)}
// 					required 
// 				/>

// 				<Text style={styles.text}>Para alteração dos dados, insira a sua senha: </Text>
// 				<TextInput style={styles.input1}
// 					value={password}
// 					keyboardType='numeric'
// 					onChangeText={e => setPassword(e)}
// 					required 
// 				/>

// 				<TouchableOpacity onPress={dadosUser}>
// 					<Text style={styles.button}>Salvar Alterações</Text>
// 				</TouchableOpacity>
// 			</View>

// 			<View style={styles.view1}>
// 				<Text style={styles.textExclusao}>Excluir sua conta</Text>
				
// 				<TouchableOpacity onPress={() => {
// 					navigation.navigate('excluirPerfil');
// 				}}>
// 					<Text style={styles.button1}>Ok</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</ScrollView>
// 		</SafeAreaView>
// 	);
// }



// //safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho:

// //Estilização da página da Tela de Configurações do usuário:
// const styles= StyleSheet.create({
// 	header: {
// 		backgroundColor: 'white',
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		justifyContent: 'space-between',
// 		paddingRight: 10,
// 		paddingLeft: 10,
// 		height: '8%',
// 		marginTop: '5%'
// 	},
// 	textConfig: {
// 		fontSize: 25,
// 		letterSpacing: 4,
// 		textTransform: 'uppercase',
// 		marginTop: '15%',
// 	},
//   	img01: { //imagem do logotipo - Patinha
// 		width: 50, 
// 		height: 53,
// 		marginTop: '70%',
// 	},
// 	subHeader: {
// 		backgroundColor: 'white',
// 		height: '8%',
// 		width: '100%',
// 		textTransform: 'uppercase',
// 		marginTop: '5%',
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		justifyContent: 'space-between',
// 		paddingRight: '4%',
// 		paddingLeft: '4%',
// 		borderBottomWidth: 4,
// 		borderBottomColor:'black',
// 	},
// 	botaoSand: {
// 		marginBottom: '20%'
// 	},
// 	img2:{
// 		width: 40, 
// 		height:40,
// 		marginBottom: '7%'
// 	},
// 	pesquisa:{
// 		borderRadius: 100,
// 		width: '80%',
// 		marginBottom: '20%'
// 	},
// 	text1: {
// 		fontSize: 25,
// 		letterSpacing: 3,
// 		fontWeight: '500',
// 		marginLeft: '5%',
// 		marginTop: '4%'
// 	},
// 	view1: {
// 		flexDirection: 'row',
//     	height: '8%',
// 		width: '10%',
// 	},
// 	textExclusao: {
// 		fontSize: 20,
// 		letterSpacing: 1,
// 		textTransform: 'uppercase',
// 		fontWeight: '500',
// 		marginLeft: '5%',
// 		marginTop: '5%',
// 	},
// 	button1: {
// 		borderRadius: 100,
// 		width: '100%',
// 		color: '#1E5D63',
// 		borderColor: '#04EABD',
// 		borderWidth: 2,
// 		fontSize: 18,
// 		marginLeft: '5%',
// 		marginRight: '5%',
// 		marginTop: '8%',
// 		textAlign: 'center',
// 		fontWeight: 'bold',
//     	padding: 5,
// 		paddingLeft: 60,
//     	paddingRight: 60,
// 	},
// 	view:{
// 		borderBottomWidth: 2,
// 		borderBottomColor: 'black',
// 		paddingBottom: '5%',
// 		width: '100%',
// 	},
// 	text:{
// 		fontSize: 23,
// 		letterSpacing: 1,
// 		fontWeight: '500',
// 		marginLeft: '5%',
// 		marginTop: '10%'
// 	},
// 	textDados: {
// 		fontSize: 16,
// 		letterSpacing: 1,
// 		marginLeft: '5%',
// 		color: '#1E5D63',
// 		textAlign: 'justify',
// 		textTransform: 'uppercase',
// 	},
// 	input1:{
// 		borderRadius: 10,
// 		width: '90%',
// 		height: '4%',
// 		borderColor: 'black',
// 		borderWidth: 2,
// 		fontSize: 18,
// 		marginLeft: '5%',
// 		marginTop: '5%',
// 	},
// 	input2:{
// 		borderRadius: 10,
// 		width: '90%',
// 		borderColor: 'black',
// 		borderWidth: 2,
// 		fontSize: 18,
// 		marginLeft: '5%',
// 		marginTop: '5%',
		
// 	},
// 	button:{
// 		borderRadius: 100,
// 		width: '90%',
// 		color: '#1E5D63',
// 		borderColor: '#04EABD',
// 		borderWidth: 2,
// 		fontSize: 16,
// 		marginLeft: '5%',
// 		marginTop: '10%',
// 		textAlign: 'center',
// 		fontWeight: 'bold',
// 		padding: 5,
// 		alignItems: 'center'
// 	},
// 	View: {
// 		flexDirection: 'row',
// 		width: '100%',
// 	},
// 	img1: {
// 		width: 150,
// 		height: 150,
// 		borderRadius: 100,
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



/*
//Importações para a composição de parte da página de perfil do usuário:
import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Platform, RefreshControl } from 'react-native';

//IMPORTAÇÕES PARA A COMPOSIÇÃO DA INSERÇÃO DA IMAGEM:
import Constants from 'expo-constants'; // Para pedir às permissões do usuário via código JavaScript.
import * as Permissions from 'expo-permissions'; // Para solicitar às permissões ao usuário.
import * as ImagePicker from 'expo-image-picker'; // Para compor a seleção e escolha das imagens, além de selecionar a imagem especificada pelo usuário.

//Importando á página de rotas do Back-end:
import api from "../../api/api.js";
import { app, storage } from '../Firebase/firebase.js';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { render } from 'react-dom';
//expo doctor --fix-dependencies


export default function ReactFirebase(){
	const [image, setImage] = useState(null);

	const handleChange = e => {
		if(e.target.files[0]){
			setImage(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		const uploadTask = storage.ref(`perfil/${image.name}`).put(image);
		uploadTask.on(
			"state_changed",
			snapshot => {},
			error => {
				console.log(error);
			},
			() => {
				storage
					.ref("perfil")
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						//console.log(url);
					});
			}
		)
	};

	console.log("IMAGEM SELECIONADA: ", image);

	return (
		<div>
			<br />
			<input type="file" onChange={handleChange} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

//render(<ReactFirebase />, document.querySelector("#root"));



*/