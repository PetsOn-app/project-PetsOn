import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Fragment } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';
import { Button } from 'react-native-web';



//Importando á página de rotas do Back-end:
import api from '../../../api/api.js';

export default function Base({navigation}) {

	//Declarando um estado de Boolean para a a expanção da tela:
	const [ ficha,         setFicha         ] = useState (true);
    const [ expanded,      setExpanded      ] = useState(true);
	const [ selectedValue, setSelectedValue ] = useState("java");

    const handlePress = () => setExpanded(!expanded);


	//Endereço da pasta do STORAGE do Firebase:
	const BUCKET = 'petson-eac94.appspot.com';

	//Declarando um estado de array para a listagem dos dados do usuário:
	const [ doacao, setDoacao ] = useState([]);

	//Instânciando o useState para CHAMAR os dados cadastrados pelo Usuário:
	const getDoacao = async () => {
		const response = await api.get(`/Listar/dataAnimais`);
		setDoacao(response.data.message);
		console.log(response.data.message);
	}

	useEffect(() => {
		getDoacao();
	}, []);


	//Declarando um estado de array para a listagem dos dados dos Animais:
	const [ data, setData ] = useState([]);

	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const getImages = async () => {
		const response = await api.get(`/Listar/dataAnimais`);
		setData(response.data.message);
		console.log(response.data.message);
	}

	useEffect(() => {
		getImages();
	}, []);

	
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ user, 	 setUser 	] = useState({}); //Recebendo os dados como Objeto.
	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
	//Usando o useEffect para compor á página com a busca dos dados requeridos:
	useEffect(() => {
		async function getAnimais() {
			const { data } = await api.get(`/Listar/dataAnimais`);
			console.log(data.message);
			setDados(data.message[0]);
			//setLoading(false);
			
			// if(data.err == '') {
			// 	setDados(data.message[0]);
			// } else{
			// 	alert("Error: " + data.err);
			// }
		}
		getAnimais();
	}, [tasks]);	
	
	
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ image, setImage ] = useState(null); // Iniciando a imagem como vazia:
	const [ url,   setUrl   ] = useState(""); // Iniciando a Url como vazia.


	//Função para selecionar a imagem:
	const handleChange = e => {
		if(e.target.files[0]){
			setImage(e.target.files[0]);
		}
	};

	//Função para o envio da imagem selecionada ao Firebase:
	const handleUpload = (event) => {
		event.preventDefault();

		const storageRef = ref(storage, `${image.lastModified}`);
		const uploadStorage = uploadBytesResumable(storageRef, image);

		uploadStorage.on("state_changed", snapshot => {
				const progresso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				//setProgress(progresso);
			},
			error => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadStorage.snapshot.ref).then(url => {
					setUrl(url)}
				);
			}
		);
	}

	console.log("IMAGEM SELECIONADA: ", image);
	console.log("IMG ", image);
	console.log("URL:  " , url);

	


	//Menu lateral com acesso as telas adoção e pets:
	const [ checked6, setChecked6 ] = useState(false);
	
	/*
	//Usando o useState para declarar o estado atual e consequentemente cadastrar os dados, caso
	// o usuário realize uma Doação:
	const [ especie, 			setEspecie 			   ] = useState('');
	const [ raca, 				setRaca                ] = useState('');
	const [ porte, 				setPorte               ] = useState('');
	const [ idade, 				setIdade               ] = useState('');
	const [ pelagem, 			setPelagem             ] = useState('');
	const [ dtAntiviral, 	    setDtAntiviral         ] = useState('');
	const [ dtUltimVaciAntirab, setDtUltimVaciAntirab  ] = useState('');
	const [ dateVermifugacao, 	setDateVermifugacao	   ] = useState('');
	const [ maisInfo, 			setMaisInfo			   ] = useState('');
	const [ nomeAnimal, 		setNomeAnimal 		   ] = useState('');
	const [ castrado, 			setCastrado 		   ] = useState('');
	const [ nomeDoador, 		setNomeDoador 		   ] = useState('');
	const [ emailDoador, 		setEmailDoador 		   ] = useState('');
	const [ telefoneDoador, 	setTelefoneDoador 	   ] = useState('');
	const [ endereco, 			setEndereco 		   ] = useState('');

	const [ tipoAcao, 			setTipoAcao 		   ] = useState(''); //Estado inicial do Tipo Ação.
	
	

/*
	async function editarDoacao(event) {
		event.preventDefault();
	
		try {
	
			const doacao = {
				"especie": especie,
				"raca": raca,
				"porte": porte,
				"idade": idade,
				"pelagem": pelagem,
				"dtAntiviral": dtAntiviral,
				"dtUltimVaciAntirab": dtUltimVaciAntirab,
				"dtUltimVaciVermifugacao": dateVermifugacao,
				"maisInfo": maisInfo,
				"urlFoto": url,
				"nomeAnimal": nomeAnimal,
				"castrado": castrado,
				"nomeDoador": nomeDoador,
				"emailDoador": emailDoador,
				"telefoneDoador": telefoneDoador,
				"endereco": endereco,
			}
			const response = await api.get('/Animais', doacao, {
				headers: {
					"Authorization": `Bearer ${jwt}`,
					"Content-Type": "application/json",
				},
			});

		  
		  if(response.status === 201){
	
			alert(`Doação realizada.`);
			
			setIdade('');
			setEspecie('');
			setRaca('');
			setPorte('');
			setPelagem('');
			setDtAntiviral('');
			setDtUltimVaciAntirab('');
			setDateVermifugacao('');
			setImage('');
			setUrl('');
			setMaisInfo('');
			setNomeAnimal('');
			setCastrado('');
			setNomeDoador('');	 
			setEmailDoador('');	
			setTelefoneDoador('');
			setEndereco('');   
			setTipoAcao('');

			navigation.navigate('postagens');
			
	
		  } if(response.status === 400){
	
			alert(`Verifique se todos os campos estão preenchidos corretamente.`);

		  } if(response.status === 500){
	
			alert(`Sem conexão com o Servidor.`);

		  } else {
			alert(`Por favor, preencha os campos corretamente!`);
		  }
		  
		} catch (err) {
	
		  alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
		  
		}
	  }
	  */

	
	return (
		<ScrollView style={{backgroundColor: 'white'}} > 
			<View style={styles.header}>
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFWBuR-q2TWPHlibKQiI6Yyg5Se29qFzygAopgY1FZDGcZj-7loRO1CQwzN6WQElMQ8Tub5cyNO3BzvwHPGhr6rV0DeUHRKW-0daYaKmK67DZXna1q0J1KLKgE4in4GH47IFR5G_UT1v-tPuwn4kyRUky25CU2nqIw2GbqTK6jGdppC0Th2VbcM4R1lGAnUlj?width=1079&height=403&cropmode=none'}}
					/> 
				</TouchableOpacity>
					
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
					/>
				</TouchableOpacity>
			</View>	

			<View style={styles.subHeader} >		    			
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
				}}>
				<Text style={styles.divisoes}>Posts</Text>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => {
					navigation.navigate('pets');
				}}>
				<Text style={styles.divisoes}>Adoção</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					navigation.navigate('doacao');
				}}>
					<Text style={styles.divisoes}>Doação</Text>
				</TouchableOpacity>	

				<TouchableOpacity onPress={() => {
					navigation.navigate('belinha');
				}}>
					<Text style={styles.divisoesSelect}>Ficha Pets</Text>
				</TouchableOpacity>	
			</View>	
			
			<LinearGradient
				// Background Linear Gradient
				colors={['#09A3B2','#04EABD']}
				style={styles.background}
			>
						{/* Infos sobre o animal para doação */}
						{/* <View style={ficha ? styles.fundo : styles.fundoNov}>
							<Image style={styles.imgPet} source={{uri: 'https://chi01pap001files.storage.live.com/y4m3b4GBGiJYi9XuWG4Y94GlkQaNqEI-I25KJ8xmD716CGFHTErTZIR9-trv0gLZZZdUJZV9O-914-eCU3BjDC-nS8c9vVlkRHSUG88wmxvAk0NN_8gSmxFWe98Vi1s-p78YOgDzXQD7ATvTvYJHFJttmA8sXGPNR_hCkVoJ0xIieQnw7HCOEy8aBAaIVVbfMQC?width=3744&height=5616&cropmode=none'}}
							/> 
							<Text style={styles.nomes}>Belinha</Text>
							<Text style={styles.nomes}>nome_dperfil</Text>

							<TouchableOpacity onPress={()=>setFicha(!ficha)}>
								<Text style={styles.buttonFicha}>Ver Ficha</Text>
							</TouchableOpacity>
							{ficha ?  
							<Text></Text>
							:
							<View>
								<Text style={styles.title}>Animal</Text>
												
								<Text style={styles.textBasic}>Nome: </Text>
								<Text value="nome" style={styles.result}> nome </Text>
								

								<Text style={styles.textBasic}>Espécie: </Text>
								<Text value="especie" style={styles.result}>especie</Text>
								

								<Text style={styles.textBasic}>Idade: </Text>
								<Text value="idade" style={styles.result}>idade</Text>
								

								<Text style={styles.textBasic}>Raça: </Text>
								<Text value="raca" style={styles.result}>raça</Text>	
								

								<Text style={styles.textBasic}>Cor da Pelagem: </Text>
								<Text value="pelagem" style={styles.result}>pelagem</Text>
								

								<Text style={styles.textBasic}>Porte: </Text>
								<Text value="porte" style={styles.result}>porte</Text>
								

								<Text style={styles.textBasic}> Vermifugado: </Text>
								<Text value="vermifugado" style={styles.result}>vermifugado</Text>
								

								<Text style={styles.textBasic}> Vacinado: </Text>
								<Text value="vacinado" style={styles.result}> vacinado</Text>
								

								<Text style={styles.textBasic}> Castrado: </Text>
								<Text value="castrado" style={styles.result}> castrado</Text>
								
								
								<Text style={styles.title}>Doador(a)</Text>
								<Text style={styles.textBasic}> Nome: </Text>
								<Text value="nomeDoador" style={styles.result}>nomeDoador</Text>
								

								<Text style={styles.textBasic}> Perfil: </Text>
								<Text value="nomePerfil" style={styles.result}> nomePerfil</Text>
								


								<Text style={styles.title}>Localização</Text>
								<Text style={styles.textBasic}> Endereço: </Text>
								<Text value="localização" style={styles.result}> Endereço: </Text>
								

								<Text style={styles.title}>Mais Informações</Text>
								<Text value="maisInfo" style={styles.result}> Mais informações: </Text>
								
							</View>
							}	
						</View> */}
						{/* <div>
							{data.map(image => (
								<div key={image.id_animal}>
									<span>{image.nome}</span>
									<span>{image.legendaPost}</span><br />
									<img style={{
										width:"100%",
										height: 250,
										marginBottom: '8%',
									}} src={image.urlFoto} alt='Imagem'/>
									<hr />
								</div>
							))}
						</div> */}

						<>
							{data.map(image => ( 
							<ScrollView>
								<View style={ficha ? styles.fundo : styles.fundoNov} key={image.id_animal}>
									<Image style={{
											width:"100%",
											height: 250,
											marginBottom: '8%',
										}} source={{uri: image.urlFoto}} alt='Imagem'
									/> 
									
									<Text style={styles.nomes}> {image.nomeAnimal} </Text>
									<Text style={styles.nomes}> {image.nomeDoador} </Text>

									<TouchableOpacity onPress={()=>setFicha(!ficha)}>
										<Text style={styles.buttonFicha}>Ver Ficha</Text>
									</TouchableOpacity>
									{ficha ?  
									<Text></Text>
									:
									<View> 
										<Text style={styles.title}>Animal</Text>
														
										<Text style={styles.textBasic}>Nome: </Text>
										<Text style={styles.result}> {image.nomeAnimal}</Text>
										

										<Text style={styles.textBasic}>Espécie: </Text>
										<Text style={styles.result}> {image.especie}</Text>
										

										<Text style={styles.textBasic}>Idade: </Text>
										<Text style={styles.result}> {image.idade}</Text>
										

										<Text style={styles.textBasic}>Raça: </Text>
										<Text style={styles.result}> {image.raca}</Text>	
										

										<Text style={styles.textBasic}>Cor da Pelagem: </Text>
										<Text style={styles.result}> {image.pelagem}</Text>
										

										<Text style={styles.textBasic}>Porte: </Text>
										<Text style={styles.result}> {image.porte}</Text>
										

										<Text style={styles.textBasic}> Vacina Antiviral: </Text>
										<Text style={styles.result}> {image.dtAntiviral}</Text>


										<Text style={styles.textBasic}> Vacinado com Antirábica: </Text>
										<Text style={styles.result}> {image.dtUltimVaciAntirab}</Text>


										<Text style={styles.textBasic}> Vermifugado em: </Text>
										<Text style={styles.result}> {image.dtUltimVaciVermifugacao}</Text>
										
										
										<Text style={styles.textBasic}> Castrado: </Text>
										<Text style={styles.result}> {image.castrado}</Text>
										
										
										<Text style={styles.title}>Doador(a)</Text>
										<Text style={styles.textBasic}> Nome: </Text>
										<Text style={styles.result}> {image.nomeDoador}</Text>
										

										<Text style={styles.textBasic}> Email do Doador: </Text>
										<Text style={styles.result}> {image.emailDoador}</Text>										


										<Text style={styles.title}>Localização</Text>
										<Text style={styles.textBasic}> Endereço: </Text>
										<Text style={styles.result}> {image.endereco}</Text>
																				

										<Text style={styles.title}>Mais Informações</Text>
										<Text style={styles.result}> {image.maisInfo}</Text>
										
									</View>
									}	
								</View> 
							</ScrollView>
							))}
						</>
			</LinearGradient>
		</ScrollView>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '10%',
		paddingRight: 10,
		paddingLeft: 10,
		height: 60,
		borderBottomWidth: 2,
	},
	subHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		textTransform: 'uppercase',
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		backgroundColor: 'white',
	},
  	divisoes:{
		fontSize: 21,
		marginLeft: 18,
		paddingTop: 5,
	},
	divisoesSelect: {
		fontSize: 21,
		marginLeft: 18,
		paddingTop: 5,
		color: '#04d9ae',
		textShadowColor: 'rgb(120, 116, 116)',
		textShadowOffset: {width: -2, height: 3},
		textShadowRadius: 8
	},
	background: {
		backgroundColor: 'black',
		height:2250,
	},
	// header: {
	// 	backgroundColor: 'white',
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	justifyContent: 'space-between',
	// 	paddingRight: 10,
	// 	paddingLeft: 10,
	// 	height: 60,
	// },
	teste: {
		backgroundColor:'white',
	},
    fundo: {
        backgroundColor:'white',
        width:'90%',
        height: 450,
		//alignItems: 'flex-start',
		margin: 20,
    },
	fundoNov: {
		backgroundColor:'white',
		width:'90%',
		height: 1850,
		margin: 20,
	},
	buttonFicha: {
		fontSize: 22,
		textTransform: 'uppercase',
		color: '#1E5D63',
		borderRadius: 50,
		borderColor: '#04EABD',
		borderWidth: 2,
		width: '95%',
		padding: 10,
		textAlign: 'center',
		margin:'2.5%',
	},
	itens1: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'left',
    	paddingLeft:10,
		textTransform: 'uppercase',
    	borderBottomWidth: 1,
		borderBottomColor:'black',
	},
	itens2: {
		backgroundColor: 'white',
		justifyContent: 'left',
		textTransform: 'uppercase',
    	borderBottomWidth: 1,
		borderBottomColor:'black',
		width: '40%',
	},    
    subheader: {
        backgroundColor: 'white',
        height:10,        
    },
	img1: { //imagem PetsOn
		width: 139, 
		height: 38,
	},
	img2: { //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},
	imgPet: {
		width:"100%",
		height: 250,
		marginBottom: '8%',
	},
	nomes: {
		borderBottomWidth: 3,
		borderLeftWidth: 3,
		borderRightWidth:3,
		fontSize:20,
		fontWeight: '400',
		paddingLeft: '5%',
		width:'95%',
		marginLeft: '2%',
		marginBottom: '4%',
	},
	textBasic: {
		fontSize: 20,
		fontWeight: '400',
		marginLeft: '15%',		
	},
	title: {
		marginBottom:'3%',
		marginTop:'5%',
		fontSize: 22,
		fontWeight: '400',
		//fontFamily: 'Ruda',
		marginLeft: '5%',		
	},
	result: {
		marginBottom: '6%',
		marginLeft: '15%',
		fontSize: 20,
		fontWeight: '200',
	},
	background: {
		height: 6450,
		width: 'auto',
	},
	text: {
		color: 'black',
		margin:100,
		marginTop: '50%',
		position: 'absolute',
		fontSize:30,
		fontWeight: '500'
	},
	container: {
    	flex: 1,
		alignItems: "center",
    	marginTop: '80%',
		flexDirection: 'row',
		marginLeft: '8%',		
  	},
	text1: {
		color: 'black',
		fontSize:25,
		fontWeight: '600',        
	},
	escolha: { 
		height: 35, 
		width: 135,
		marginLeft: '2%'
	},
	container2: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: '25%',		
	},
});

