import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView,ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { List, RadioButton  } from 'react-native-paper';
import AsyncStorage  from '@react-native-async-storage/async-storage';



//Importando á página de rotas do Back-end:
import api from "../../api/api.js";

//IMPORTAÇÕES PARA COMUNICAÇÃO ENTRE O FRONT-END E O FIREBASE:
import firebase from '../Firebase//firebase.js';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';



export default function Topo({navigation}) {

	//Endereço da pasta do STORAGE do Firebase:
	const BUCKET = 'petson-eac94.appspot.com';

	//Declarando um estado de array para a listagem dos dados do usuário:
	const [usuario, setUsuario] = useState([]);

	//Instânciando o useState para CHAMAR os dados cadastrados pelo Usuário:
	const getUsuario = async () => {
		
		const id_usuario = await AsyncStorage.getItem('@id_use');
		const id = id_usuario;

		const response = await api.get(`/Cadastro/dataUser/${id}`);
		setUsuario(response.data.message[0]);
		console.log(response.data.message[0]);
	}

	useEffect(() => {
		getUsuario();
	}, []);


	//Declarando um estado de array para a listagem dos dados dos Animais:
	const [data, setData] = useState([]);

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
	
	
	/*
	//Função para o envio da imagem selecionada ao Firebase:
	const handleUpload = (event) => {
		event.preventDefault();

		const storageRef = ref(firebase, `${image.lastModified}`);
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
	*/

	
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
	const [ url,   				setUrl   			   ] = useState(""); // Iniciando a Url como vazia.
	const [ nomeAnimal, 		setNomeAnimal 		   ] = useState('');
	const [ castrado, 			setCastrado 		   ] = useState('');
	const [ nomeDoador, 		setNomeDoador 		   ] = useState('');
	const [ emailDoador, 		setEmailDoador 		   ] = useState('');
	const [ telefoneDoador, 	setTelefoneDoador 	   ] = useState('');
	const [ endereco, 			setEndereco 		   ] = useState('');

	const [ tipoAcao, 			setTipoAcao 		   ] = useState(''); //Estado inicial do Tipo Ação.
	


	//Menu lateral com acesso as telas adoção e pets:
    const [ expanded, setExpanded ] = useState(true);
	const [ checked6, setChecked6 ] = useState(false);

	//Expandindo o cabeçalho de opções de navegação entre doação, adoção e pets:
    const handlePress = () => setExpanded(!expanded);


	//Função para o cadastro da Doação e o Tipo de Ação:
	async function registerDoacao(event) {
		event.preventDefault();
	
		try {

			const jwt = await AsyncStorage.getItem('@tokenJWT');
			// const id_usuario = await AsyncStorage.getItem('@id_use');
			// const id = id_usuario;
			
			//Condição caso algum campo não tenha sido preenchido:
			if(	especie === '' || raca === '' || porte === '' || idade === '' || pelagem === '' || 
				dtAntiviral === '' || dtUltimVaciAntirab === '' || dateVermifugacao === '' || maisInfo === '' || 
				nomeAnimal === '' || castrado === '' || nomeDoador === '' || emailDoador === '' || 
				telefoneDoador === '' && endereco === '' ) {

					alert(`É necessário preencher todos os campos para a realização da Doação.`);
					
			}

			//Condição caso o Campo da imagem não tenha sido preenchido e ou confirmado:
			if(url === ''){

				alert(`É necessário selecionar a imagem do pet a ser\n doado e confirmar a imagem selecionada para\n a realização da Doação.`);

			}

			//Condição caso TODOS os campos tenham sido preenchidos:
			if(	especie != '' && raca != '' && porte != '' && idade != '' && pelagem != '' && 
				dtAntiviral != '' && dtUltimVaciAntirab != '' && dateVermifugacao != '' && maisInfo != '' && 
				url != '' && nomeAnimal != '' && castrado != '' && nomeDoador != '' && emailDoador != '' && 
				telefoneDoador != '' && endereco != '' ) {
			
				//Requisição para o Back-End para o cadastro da Doação:
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
				const response = await api.post('/Animais', doacao, {
					headers: {
						"Authorization": `Bearer ${jwt}`,
						"Content-Type": "application/json",
					},
				});

				
				//Requisição para o Back-End para o cadastro do tipoAção:
				// const responseAcao = {
				// 	"tipoAcao": tipoAcao,
				// }
				// const responseTipoAcao = await api.post('/Acao', responseAcao, {
				// 	headers: {
				// 		"Authorization": `Bearer ${jwt}`,
				// 		"Content-Type": "application/json",
				// 	},
				// });
				

				//Condição para os possíveis retornos de resposta do Back-End à requisição Front-End:
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

					navigation.navigate('adocao');
					

				//Condição caso algum campo não tenha sido preenchido corretamente:
				} if(response.status === 400){
			
					alert(`Verifique se todos os campos estão preenchidos corretamente.`);

					
				//Condição caso ocorra uma queda de conexão:
				} if(response.status === 500){
			
					alert(`Sem conexão com o Servidor.`);

				} else {

					alert(`Por favor, preencha os campos corretamente!`);
				}
			}
				
		} catch (err) {

			alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
		}
	}
	
	//Retornando à estrutura da página e demais campos para validação da Doação e confirmação do Tipo de Ação:
	return (

		<ScrollView style={{backgroundColor: 'white'}} >
			<View style={{backgroundColor: 'white'}} >
				<View style={styles.logo}>
					<TouchableOpacity onPress={() => {
						navigation.navigate('postagens');
					}}
					>
					<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFWBuR-q2TWPHlibKQiI6Yyg5Se29qFzygAopgY1FZDGcZj-7loRO1CQwzN6WQElMQ8Tub5cyNO3BzvwHPGhr6rV0DeUHRKW-0daYaKmK67DZXna1q0J1KLKgE4in4GH47IFR5G_UT1v-tPuwn4kyRUky25CU2nqIw2GbqTK6jGdppC0Th2VbcM4R1lGAnUlj?width=1079&height=403&cropmode=none'}}/>
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
						<Text style={styles.divisoesSelect}>Doação</Text>
					</TouchableOpacity>
				</View>	
			</View>

			<ImageBackground source={{uri: 'https://chi01pap001files.storage.live.com/y4mWEuv48D_reKE91CnzjCqVeUL4qUA0HHXIXbnrWk_aA5DNkSZVTpQyAOFcmKydvCNCoA-DEh41Gdny-2hECvKqLkVSzlbww1ka5806tf1vDwYCONh4nh5y693XZ3rJx_5W9GBRNV_Bk6H1i6qoDOiBrbzUEJESsA58-t68KumvV3Ot1JEC7gWzOzT0O8vDSkM?width=360&height=1935&cropmode=none'}} 
				style={styles.image} 
			>
				<View style={styles.questionario}>

					<Text style={styles.title}>Animal</Text>
					<Text style={styles.textBasic}>Nome do Animal: </Text>
					<TextInput style={styles.input}
						placeholder=" Nome do Animal"
						value={nomeAnimal}
						onChangeText={e => setNomeAnimal(e)}
						required 
					/>
				
					<Text style={styles.textBasic}>Idade: </Text>
						<TextInput style={styles.input}
							placeholder=" Idade"
							value={idade}
							keyboardType='numeric'
							onChangeText={e => setIdade(e)}
							required 
						/>

						<Text style={styles.textBasic}>Insira o link da imagem do animal: </Text>
						<TextInput style={styles.input}
							placeholder=" Link da imagem do animal"
							value={url}
							onChangeText={e => setUrl(e)}
							required 
						/>
					
					<Text style={styles.textBasic}>Espécie: </Text>
						<View style={styles.radio}>
							<RadioButton.Group style={styles.radioButtons} onValueChange={especie => setEspecie(especie)} value={especie}>
								<RadioButton.Item style={{fontSize:18}} label='Canino(a)' value='Canino(a)' />
								<RadioButton.Item style={{fontSize:18}} label='Felino(a)' value='Felino(a)' />
							</RadioButton.Group>
						</View>
					
					<Text style={styles.textBasic}>Raça: </Text>
						<View style={styles.radio}>
							<RadioButton.Group style={styles.radioButtons} onValueChange={raca => setRaca(raca)} value={raca}>
								<RadioButton.Item style={{fontSize:18}} label='Puro' value='Puro' />
								<RadioButton.Item style={{fontSize:18}} label='Mestiço' value='Mestiço' />
							</RadioButton.Group>
						</View>
					
					<Text style={styles.textBasic}>Cor da Pelagem: </Text>
						<TextInput
							style={styles.input}
							placeholder=" Pelagem"
							value={pelagem}
							onChangeText={e => setPelagem(e)}
							require
						/>
					
					<Text style={styles.textBasic}>Porte: </Text>
						<View style={styles.radio}>
							<RadioButton.Group style={styles.radioButtons} onValueChange={porte => setPorte(porte)} value={porte}>
								<RadioButton.Item style={{fontSize:18}} label='Pequeno' value='Pequeno' />
								<RadioButton.Item style={{fontSize:18}} label='Médio' value='Médio' />
								<RadioButton.Item style={{fontSize:18}} label='Grande' value='Grande' />
							</RadioButton.Group>
						</View>
					
					<Text style={styles.textBasic}> Data da última Vacinação Antiviral: </Text>
						<TextInput style={styles.input}
							placeholder=" AAAA-MM-DD"
							value={dtAntiviral}
							keyboardType='numeric'
							onChangeText={e => setDtAntiviral(e)}
							required 
						/>
					
					<Text style={styles.textBasic}> Data da última vacinação Antirrábica: </Text>
						<TextInput style={styles.input}
							placeholder=" AAAA-MM-DD"
							value={dtUltimVaciAntirab}
							keyboardType='numeric'
							onChangeTex={e => setDtUltimVaciAntirab(e)}
							required 
						/>
					
					<Text style={styles.textBasic}> Data da última Vermifugação: </Text>
						<TextInput style={styles.input}
							placeholder=" AAAA-MM-DD"
							value={dateVermifugacao}
							keyboardType='numeric'
							onChangeText={e => setDateVermifugacao(e)}
							required 
						/>
					
					<Text style={styles.textBasic}> Castrado: </Text>
						<View style={styles.radio}>
							<RadioButton.Group style={styles.radioButtons} onValueChange={castrado => setCastrado(castrado)} value={castrado}>
								<RadioButton.Item style={{fontSize:18}} label='Sim' value='Sim' />
								<RadioButton.Item style={{fontSize:18}} label='Não' value='Não' />
							</RadioButton.Group>
						</View>
										
					<Text style={styles.title1}>Doador(a)</Text>
					<Text style={styles.textBasic1}>Nome: {usuario.nome}</Text>
					<Text style={styles.textBasic1}>Email: {usuario.email}</Text>
					
					<Text style={styles.textBasic}> Digite o seu Nome Completo: </Text>
						<TextInput style={styles.input}
							placeholder=" Nome Completo"
							value={nomeDoador}
							onChangeText={e => setNomeDoador(e)}
							required 
						/>
					
					<Text style={styles.textBasic}> Digite o seu Email: </Text>
						<TextInput style={styles.input}
							placeholder=" E-mail"
							value={emailDoador}
							onChangeText={e => setEmailDoador(e)}
							required 
						/>
					
					<Text style={styles.textBasic}> Informe um número de telefone para contato: </Text>
						<TextInput style={styles.input}
							placeholder=" Telefone"
							value={telefoneDoador}
							onChangeText={e => setTelefoneDoador(e)}
							required 
						/>
					
					<Text style={styles.textBasic}> Informe a localização do Animal: </Text>
						<TextInput style={styles.input}
							placeholder=" Endereço do Animal"
							value={endereco}
							onChangeText={e => setEndereco(e)}
							required 
						/>
					
					<Text style={styles.textBasic}>Local Para Retirada </Text>
					<Text style={styles.textBasic1}>e demais informações: </Text>
					<TextInput
						style={
							{
								backgroundColor: 'white',
								borderColor: 'black',
								borderWidth: 1,
								borderRadius: 8,
								width: '85%',
								height: 45,
								marginBottom: "2%",
							}
						}
						value={maisInfo}
						onChangeText={e => setMaisInfo(e)}
						required 
					/>
					
					<Text style={styles.textBasic2}>Ao clicar no campo abaixo </Text>
					<Text style={styles.textBasic}>"Confirmar Doação" você estará </Text>
					<Text style={styles.textBasic}>registrando a ação desejada: </Text>
						<View style={styles.radio}>
							<RadioButton.Group style={styles.radioButtons} onValueChange={tipoAcao => setTipoAcao(tipoAcao)} value={tipoAcao}>
								<RadioButton.Item style={{fontSize:18}} label='Confirmar Doação' value='Doar' />
							</RadioButton.Group>
						</View>
					
					<TouchableOpacity style={styles.buttonPostar} onPress={registerDoacao}>
						<Text >Doar</Text>
					</TouchableOpacity>
				</View>	
			</ImageBackground>
		</ScrollView>
	);
}




//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

//Estilização da Página de Doação:
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
	logo:{
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '5%',
		paddingLeft: '5%',
		marginTop: '9%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		paddingBottom: '3%',
		backgroundColor: 'white',
		backgroundColor: 'white',
	},
	img1:{
		width: 110, 
		height: 25,
		marginTop: '3%',
		backgroundColor: 'white',
	},
	img2:{
		width: 50, 
		height: 50,
		marginTop: '3%',
		backgroundColor: 'white',
	},
	subHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		textTransform: 'uppercase',
		borderBottomColor: 'black',
		borderBottomWidth: 2,
	},
	img3:{ 
		width: 60, 
		height: 40,
	}, 
	img4:{
		width: 430, 
		height: 27,
		marginTop: -15
	},
	img5:{
		width: 50, 
		height: 50,
	},
	img6:{
		width: 50, 
		height: 43,
	},
	img7:{
		width: 225, 
		height: 290,
		marginLeft: '2%'
	},
  	divisoes:{
		fontSize: 21,
		marginLeft: 25,
		paddingTop: 5,
	},
	divisoesSelect: {
		fontSize: 21,
		marginLeft: 25,
		paddingTop: 5,
		color: '#04d9ae',
		textShadowColor: 'rgb(120, 116, 116)',
		textShadowOffset: {width: -2, height: 3},
		textShadowRadius: 8
	},
	box: {
		height: 350,
		width: 'auto',
		backgroundColor: 'white',
		margin: '7%',
		
	},
	cabecario:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '7%',
		paddingLeft: '7%',
    	marginTop: '2%',
		borderBottomWidth: 1,
		borderBottomColor:'black',
		paddingBottom: '2%'
	},
	text1:{
		fontSize: 22
	},
	text2:{
		fontSize: 22,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		letterSpacing: 2,
	},
	questionario: {    
		marginTop: '60%',
		marginLeft: '15%',
		width: '75%',
  	},
	title: {
		marginBottom:'5%',
		fontSize: 22,
		fontWeight: "400",
		//fontFamily: 'Ruda',
	},
	title1: {
		marginTop: "1%",
		marginBottom:'2%',
		fontSize: 22,
		fontWeight: "400",
		//fontFamily: 'Ruda',
	},
	input: {
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,   
		marginBottom: '4%',
		borderRadius: 8,
		marginLeft: '1%',
	},
	inputPersonalizado: {
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 8,  
		//marginBottom: '4%',
		width: '40%',
	},
	textPersonalizado: {
		marginBottom: '4%',
	},
	radio: {
		flexDirection: 'row-reverse',
		textAlign: 'left',
		marginLeft: '5%',
		alignItems: 'center',
		//justifyContent: 'center',
		//fontFamily: 'Segoe UI',
		marginBottom: '1%'
	},
	reverse: {
		flexDirection: 'row',
	},
	textBasic: {
		fontSize: 18,
		fontWeight: "400",
		//fontWeight: "'bo"ld',
	},
	textBasic1: {
		fontSize: 18,
		fontWeight: "400",
		marginBottom: "4%",
		//fontWeight: "'bo"ld',
	},
	textBasic2: {
		fontSize: 18,
		fontWeight: "400",
		marginTop: "4%",
		//fontWeight: "'bo"ld',
	},
	RadioButton: {
		backgroundColor:'red',
	},
	buttonPostar: {
		backgroundColor: 'white',
		alignItems: 'center',
		marginStart: '60%',
		marginTop: '1%',
		paddingTop: '1%',
		width: 93,
		height: 34,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
	},
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		height: 60
	},
	image: {
		height: 2150,
    	width: "100%",
	},
	itens1: {
		backgroundColor: 'white',
		flexDirection: 'row',
		//justifyContent: 'left',
    	paddingLeft:10,
		textTransform: 'uppercase',
   	 	borderBottomWidth: 1,
		borderBottomColor:'black',
		
	},
	itens2: {
		backgroundColor: 'white',
		//justifyContent: 'left',
		textTransform: 'uppercase',
    	borderBottomWidth: 1,
		borderBottomColor:'black',
		width: '40%',
	},
    subheader: {
        backgroundColor: 'white',
        height: 10,
    },
	img1: { //imagem PetsOn
		width: 139, 
		height: 38,
	},
	img2: { //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},
});
