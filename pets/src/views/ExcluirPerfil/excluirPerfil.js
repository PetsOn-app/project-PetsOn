//Importações para a composição de parte da página da tela de Configuração do usuário:
import * as React from 'react';
import { useState, useEffect } from "react";
import { Text, SafeAreaView, ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';


import AsyncStorage  from '@react-native-async-storage/async-storage';

//Importando á página de rotas do Back-end:
import api from "../../api/api.js";



//Exportação da função para a Comfirmação da Exclusão do Perfil do usuário:
//Exportação da função para Excluir o perfil do usuário na tela de configurações:
export default function TelaConfg({navigation}) {

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


	//Função responsável ppor deletar a conta do usuário:
	async function deleteConta(event) {
		event.preventDefault();

		try {
		
			//Instânciando o JWT para validar á página:
			const jwt = await AsyncStorage.getItem("@tokenJWT");

			//Instânciando o ID do usuário:
			const id_usuario = await AsyncStorage.getItem('@id_use');
			const id = id_usuario;

			//Realizando a requisição para deletar a conta:
			const response = await api.delete(`/Comum/${id}`, {
				headers: {
					"Authorization": `Bearer ${jwt}`,
					"Content-Type": "application/json",
				}, 
			});
			

			console.log('aqui Excluir Perfil >>>>', response.status);
			if(response.status === 201){

				alert(`A sua conta foi deletada com sucesso. \nEsperamos que volte o mais breve possível!`);

				navigation.navigate('login');

			} else {
				alert(`Os dados informados estão incorrentos. Por favor, tente novamente!`);
			}

		} catch (err) {
			alert(`Erro ao tentar Excluir a conta. \nCódigo erro: ${err}`);
		}
	}

	return (
		<ScrollView style={{backgroundColor: 'white'}} >			
			<View style={styles.header}> 
				<TouchableOpacity onPress={() => {
						navigation.navigate('configuracao');
				 	}}
				>	
					<Text style={styles.textt}>Configurações </Text>
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
					<Image style={styles.img2} source={require('./src/img/menu2.1.png')}/>
				</TouchableOpacity>

				<Searchbar style={styles.pesquisa}
					placeholder="Pesquise aqui"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</View>

			<Text style={styles.text}>Excluir sua Conta</Text>
			<View style={styles.perfil}>
				<Image style={styles.img3} source={{uri: dados.fotoPerfil}} />
				<Image style={styles.img4} source={require('./src/img/fotoperfil2.jpg')}/>
			</View>
			
			<View>

				<Text style={styles.text1}>{dados.nome}</Text>
				
				<Text style={styles.text2}>Ao clicar em excluir, sua conta com seu nome de usuário, 
					foto de perfil, publicações, conversas e qualquer outra interação realizada 
					neste aplicativo, será excluída permanentemente sem ser possível recuperar a 
					conta. </Text>

				<Text style={styles.text3}>Logo, caso decida voltar a usar o aplicativo PetsOn 
					novamente, precisará criar uma nova conta.</Text>
				
				<Text style={styles.text4}>Vamos sentir sua falta, {dados.nome}...</Text>

				<View>
					<TouchableOpacity onPress={deleteConta}>
						<Text style={styles.button}>Excluir</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
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
		paddingRight: 10,
		paddingLeft: 10,
		height: '8%',
		marginTop: '5%'
	},
	textt: {
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase'
	},
  	img1: { //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
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
		marginBottom: '7%',
	},
	pesquisa: {
		borderRadius: 100,
		width: '80%',
		marginTop: '5%',
		marginBottom: '23%',
	},
	text: {
		fontSize: 25,
		letterSpacing: 3,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '4%'
	},
	perfil: {
		backgroundColor: 'white',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: '10%',
		marginLeft: '15%',
		marginRight: '10%',
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
	text1: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '500',
	},
	text2: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 19,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '10%'
	},
	text3: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 19,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '4%'
	},
	text4: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 19,
		marginTop: '10%',
		fontWeight: '500',
	},
	button: {
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
		padding: 10,
		textTransform: 'uppercase',
	},	
    viewBotao: {
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '10%',
    },
    img2: {
		width: 30,
		height: 30,
        alignSelf: 'center',
        marginTop: '10%'
	},
    botao:{
        borderWidth: 2,
        borderColor: 'Black',
        borderRadius: 30,
        padding: 10,
    },
});



