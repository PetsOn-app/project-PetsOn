//Importações para a composição COMPLETA da página de perfil do usuário:
import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal, StyleSheet, Image, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


//Importações das composições de parte da página de perfil do usuário:
import Modal1 from './src/componentes/Modal.js';


import AsyncStorage  from '@react-native-async-storage/async-storage';

//Importando á página de rotas do Back-end:
import api from '../../api/api.js';


//ATENÇÃO:
//Para instalar a dependencia linear gradient = expo install expo-linear-gradient
//Para instalar depedencia Paper = yarn add react-native-paper


//Exportação da função para Tela do perfil do usuário:
export default function TelaPerfil({navigation}) {

	//Declarando estado inicial da Pesquisa por meio do useState:
	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);
	
	
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
			setLoading(false);

			// if(data.err == '') {
			// 	setDados(data.message[0]);
			// } else{
			// 	alert("Error: " + data.err);
			// }
		}
		getDados();
	}, [tasks]);	


	const [data, setData] = useState([]);

	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const getImages = async () => {		
		
		const id_usuario = await AsyncStorage.getItem('@id_use');
		const id = id_usuario;

		const response = await api.get(`/Listar/dataPostagemUser/${id}`);
		//setData(response.data.message);
		setData(response.data.message);
		console.log(response.data.message);
	}

	useEffect(() => {
		getImages();
	}, []);
	
	
	//Retornando a composição da página com os dados cadastrados e campos para a alteração dos mesmos:
	return (
		<SafeAreaView  style={{backgroundColor: 'white'}} >
			<View style={styles.header}> 
				<TouchableOpacity onPress={() => {
						navigation.navigate('perfil');
				 	}}
				>	
					<Text style={styles.text}>Perfil</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
						navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
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

			<ScrollView>
				<Text style={styles.textPerfil}>{dados.nome}</Text>

				<View style={styles.perfil}>
					<Image style={styles.img3} source={{uri: dados.fotoPerfil}} resizeMode='contain' />
					<Image style={styles.img4} source={require('./src/img/fotoperfil2.jpg')} resizeMode='contain' />
					
					<TouchableOpacity style={styles.modal}>
						<Modal1/>
					</TouchableOpacity>
				</View>

				<LinearGradient
					// Background Linear Gradient
					colors={['#09A3B2','#04EABD']}
					style={styles.background}
				>
					<View style={styles.box1}>									
						<Text style={styles.textBasicDados}>Dados cadastrados</Text>	
						<Text style={styles.textBasic}>Nome: </Text>
						<Text style={styles.result}>{dados.nome} </Text>

						<Text style={styles.textBasic}>Email: </Text>
						<Text style={styles.result}>{dados.email} </Text>

						<Text style={styles.textBasic}>Telefone: </Text>
						<Text style={styles.result}>{dados.telefone} </Text>

						<Text style={styles.textBasic}>Tipo de Conta: </Text>
						<Text style={styles.result}>{dados.tipoConta} </Text>
					</View>
					
					<>
						{data.map(image => (
							<View style={styles.box} key={image.id_postagem}>
								<Text style={styles.textPostagensUser}>{image.nome}</Text>
								<Image style={{
										width: 270, 
										height: 370,
									}} source={{uri: image.urlFoto}} alt='Imagem' resizeMode='contain' />
							</View>
						))}
					</>
					
					<View style={styles.box2}></View>			
				</LinearGradient>
			</ScrollView>	
		</SafeAreaView>
	);
}


//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

// Estilização dos containners / Views da página:
const styles= StyleSheet.create({
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 30,
		paddingLeft: 32,
		height: '4%',
		marginTop: '10%',
	},
	subHeader: {
		backgroundColor: 'white',
		height: '8%',
		width: '100%',
		textTransform: 'uppercase',
		marginTop: '10%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: '5%'
	},
	img2:{
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa:{
		borderRadius: 100,
		width: '80%',
		marginBottom: '5%'
	},
	text:{
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase',
	},
  	img1:{ //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},
	perfil: {
		backgroundColor: 'white',
		height: '15%',
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		fontWeight: 'bold',
		justifyContent: 'space-between',
		paddingRight: '17%',
		paddingLeft: '17%',
		borderBottomWidth: 3,
		borderBottomColor:'black',
	},
	modal: {
		marginTop: 80,
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
		fontSize: 28,
		textAlign: 'center',
		marginTop: '5%',
	},
	textPostagensUser:{
		fontSize: 22,
		textAlign: 'center',
	},
	divisoes:{
		fontSize: 21,
		marginLeft: 35,
		paddingTop: 5,
	  },
	box: {
		height: 460,
		width: 'auto',
		paddingRight: "5%",
		paddingLeft: "5%",
		paddingTop: '4%',
		backgroundColor: '#DDD',
		margin: '6%',
		alignItems: 'center'
	},
	box0: {
		height: 140,
		width: 'auto',
		paddingRight: "5%",
		paddingLeft: "5%",
		paddingTop: '4%',
		backgroundColor: 'white',
		margin: '6%',
		alignItems: 'center'
	},
	box1: {
		height: 460,
		width: 'auto',
		paddingRight: "5%",
		paddingLeft: "5%",
		paddingTop: '8%',
		backgroundColor: '#DDD',
		margin: '6%',
		marginTop: '22%',
		marginBottom: '22%',
	},
	box2: {
		height: 545,
		width: 'auto',
		colors: ['#09A3B2','#04EABD'],
	},
	textBasicDados:{
		fontSize: 22,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		justifyContent: 'space-between',
		paddingTop: '8%',
		paddingBottom: '8%',
	},
	textBasic:{
		fontSize: 20,
		marginLeft: '2%',
	},
	result:{
		fontSize: 18,
		marginBottom: '10%',
		marginLeft: '2%',
	},
});



