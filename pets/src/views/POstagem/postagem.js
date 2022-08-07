import * as React from 'react';
import { useState, useEffect, Fragment, Component } from "react";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal, AsyncStorage, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
//import AsyncStorage  from '@react-native-async-storage/async-storage';
import {handleChoosePhoto} from './Popup/index.js';

//import ButtonFloat from  '../ButtonFlutuant/ButtonFloat.jsx';



//Importando á página de rotas do Back-end:
import api from "../../api/api.js";




//EXPOSTANDO A FUNÇÃO POSTAGENS:
export default function Postagens({navigation}) {

	//Declarando o estado inicial do Campo de Pesquisa:
	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);


	//Endereço da pasta do STORAGE do Firebase:
	const BUCKET = 'petson-eac94.appspot.com';

	const [data, setData] = useState([]);

	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const getImages = async () => {
		const response = await api.get(`/Listar/dataPostagem`);
		//setData(response.data.message);
		setData(response.data.message);
		console.log(response.data.message);
	}

	useEffect(() => {
		getImages();
	}, []);

	
		
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
	const [ data1, 	 setData1 	] = useState({}); //Recebendo os data como Objeto.
	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
	//Usando o useEffect para compor á página com a busca dos dados requeridos:
	useEffect(() => {
		async function getPostagens() {
			const { data } = await api.get(`/Listar/dataPostagem`);
			console.log(data.message[0]);
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
	
	

	//Intânciando um estado inicial para a favoritação da Postagem:
	const [ curtir, setCurtir ]= useState (true, false);
	const exemplo = [true, false];

	const [ legendaPost,   setLegendaPost  ]   = useState('');
  	const [ fotoPostagem,  setFotoPostagem ]   = useState('');

/*
  async function registerPostagem(event) {
    event.preventDefault();

    try {

		const jwt = await AsyncStorage.getItem('@tokenJWT');

		const postagemLegenda = { 
			"legendaPost": legendaPost,
		}
		const response = await api.post('/Postagem', postagemLegenda, {
			headers: {
				"Authorization": `Bearer ${jwt}`,
				"Content-Type": "application/json",
			},
		});

      
      
	  //Condição para validar se a postagem deu certo:
      if(response.status === 201 || responsePhoto.status === 201){

        alert(`Postagem realizada.`);

        setLegendaPost('');
        setFotoPostagem('');

        navigation.navigate('postagem');
        

      } else {
        alert(`Por favor, preencha os campos corretamente!`);
      }
      
    } catch (err) {

      alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
      
    }
  }
*/



//Retornando a composição da página com os dados Postados:
  return (

	<ScrollView>
		<View style={{backgroundColor: 'white',}} >
			<View style={styles.logo}>
				<TouchableOpacity OpacityonPress={() => {
					navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img1} source={require('./src/img/logo.png')}/>
				</TouchableOpacity>
									
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>

    		<View style={styles.subHeader} >
    			<TouchableOpacity onPress={() => {
    				navigation.navigate('perfil');
    			}}>
    		    	<Image style={styles.img3} source={{uri: 'https://chi01pap001files.storage.live.com/y4mDaZZLeGyTZUR_rvU8Q3qEG1r5CWqFmaKJ-IRd1C1iJw9CjQTX-B-_Klr2TY3JVTuS4iBipGRlWCV2OMYSxqCMunL62EarhJ-OYAkV1_AqSZEG0pTKzpnFoRqGvr1cRz0NU8S21Aa2WlVF7N0bOnHkLCPYQDd6MJc8bQf40cfhdUmAtLRrxM2GU6sSYgbYxUu?width=130&height=133&cropmode=none'}}
    		    	/>
    			</TouchableOpacity>
		
    			<TouchableOpacity onPress={() => {
    				navigation.navigate('quiz');
    			}}>
    				<Text style={styles.divisoes}>Quiz</Text>
    			</TouchableOpacity>	

    			<TouchableOpacity onPress={() => {
    				navigation.navigate('postagens');
    			}}>
    			  <Text style={styles.divisoesSelect}>Posts</Text>
    			</TouchableOpacity>

    			<TouchableOpacity onPress={() => {
    				 navigation.navigate('pets');
    			}}>
    			  <Text style={styles.divisoes}>Adoção</Text>
    			</TouchableOpacity>
    		</View>	
			

			{/* <Postagem/> */}			
			<LinearGradient
				// Background Linear Gradient
				colors={['#09A3B2','#04EABD']}
				style={styles.background}
			>
					
				<View>
					<TouchableOpacity style={styles.divisoes} onPress={() => {
						navigation.navigate('post')
					}}>
						<Text style={styles.text2}>Add nova Publicação</Text>
					</TouchableOpacity>
				</View>
					
				{/* CONTAINNER/BOX COM MAP */}
				<Fragment>
					{data.map(image => (
						<View style={styles.box}>
							<View style={styles.cabecario} key={image.id_postagem}>
								<Text style={styles.text1}>{image.nome}</Text>
							</View>
							
							<View style={styles.postagem}>
								<View style={styles.botoes}>
									<TouchableOpacity>
										<Image style={{
												width: 50, 
												height: 90,
											}} />
									</TouchableOpacity>
									
									<TouchableOpacity onPress={()=>setCurtir(!curtir)}>
										{curtir ?
											<Image style={{
													width: 50, 
													height: 43,
												}} source={require('./src/img/curtir.png')}
											/>
										:
											<Image style={{
													width: 50, 
													height: 43,
												}} source={require('./src/img/curtida.png')}
											/>
										}
									</TouchableOpacity>

									<TouchableOpacity >
										<Image style={{
												width: 50, 
												height: 43,
											}}
										/>
									</TouchableOpacity> 
								</View>

								<Image 
									style={{
										width: 225, 
										height: 290,
										marginRight: '5%',
									}} source={{uri: image.urlFoto}} alt='Imagem' resizeMode='contain'
								/>
							</View>
						</View> 
					))}	
				</Fragment>

				{/* <View>
					<FlatList 
						data = {data}
						keyExtractor={item => item.id_postagem}
						renderItem={({item})=><Text>Foto:{item.urlFoto}</Text>}
					/>
				</View>	

				<View>
					<FlatList 
						data = {data}
						keyExtractor={item => item.id_postagem}
						renderItem={({item})=><Text>Foto:{item.urlFoto}</Text>}
					/>
				</View>	 */}


				{/* <Box1/> */}
				{/* <View style={styles.box}>
					<View style={styles.cabecario}>
						<Text style={styles.text1}>{dados.nome}</Text>

						<TouchableOpacity>
							<Text style={styles.text2}>Add</Text>
						</TouchableOpacity>
					</View>
					
					<View style={styles.postagem}>
						<View style={styles.botoes}>
							<TouchableOpacity>
								<Image style={styles.img5} source={require('./src/img/comentar.png')}/>
							</TouchableOpacity>

							<TouchableOpacity onPress={()=>setCurtir(!curtir)}>
								{curtir ?
								<Image style={styles.img6} source={require('./src/img/curtir.png')}/>
								:
								<Image style={styles.img6} source={require('./src/img/curtida.png')}/>
								}
							</TouchableOpacity>

							<TouchableOpacity>
								<Image style={styles.img6} source={require('./src/img/compartilhar.png')}/>
							</TouchableOpacity> 
						</View>

						<Image style={styles.img7} source={dados.urlFoto}/>
						{/* <Image style={styles.img7} source={require('./src/img/postagem1.jpg')}/> 
					</View>
				</View> */}

				{/* <View style={styles.box}>
					<View style={styles.cabecario}>
						<Text style={styles.text1}>{data.nome}</Text>
						<TouchableOpacity>
							<Text style={styles.text2}>Add</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.postagem}>					
						<View style={styles.botoes}>
							<TouchableOpacity>
								<Image style={styles.img5} source={require('./src/img/comentar.png')}/>
							</TouchableOpacity>

							<TouchableOpacity onPress={()=>setCurtir(!curtir)}>
								{curtir ?
								<Image style={styles.img6} source={require('./src/img/curtir.png')}/>
								:
								<Image style={styles.img6} source={require('./src/img/curtida.png')}/>
								}
							</TouchableOpacity>

							<TouchableOpacity>
								<Image style={styles.img6} source={require('./src/img/compartilhar.png')}/>
							</TouchableOpacity> 

							<View style={styles.postagem}>
								<FlatList 
									data={dados}
									keyExtractor={item => item.id_postagem}
									renderItem={ ({item}) =>
										<Image style={styles.img7} source={{uri: item.urlFoto}} />	
									}
								/>
							</View>
						</View>
					</View>
				</View> */}

				{/* <View >
					<FlatList 
						data={dados}
						keyExtractor={item => item.id_postagem}
						renderItem={ ({item}) =>

						<View style={styles.box}>
							<View style={styles.cabecario}>
								<Text style={styles.text1}>{item.nome}</Text>
								<TouchableOpacity>
									<Text style={styles.text2}>Add</Text>
								</TouchableOpacity>
							</View>
		
							<View style={styles.postagem}>					
								<View style={styles.botoes}>
									<TouchableOpacity>
										<Image style={styles.img5} source={require('./src/img/comentar.png')}/>
									</TouchableOpacity>
			
									<TouchableOpacity onPress={()=>setCurtir(!curtir)}>
										{curtir ?
										<Image style={styles.img6} source={require('./src/img/curtir.png')}/>
										:
										<Image style={styles.img6} source={require('./src/img/curtida.png')}/>
										}
									</TouchableOpacity>
			
									<TouchableOpacity>
										<Image style={styles.img6} source={require('./src/img/compartilhar.png')}/>
									</TouchableOpacity> 
			
									<View style={styles.postagem}>
										<Image style={styles.img7} source={{uri: item.urlFoto}} />
									</View>
								</View>
							</View>
						</View>	
						}
					/>
				</View> */}
			</LinearGradient>
			
    	</View>
	</ScrollView>
  );
}


const styles= StyleSheet.create({
	logo:{
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '5%',
		paddingLeft: '5%',
		marginTop: '5%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		paddingBottom: '3%',
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
		textAlign: 'center',
		marginTop: '5%',
	},
	postagem:{
		flexDirection: 'row',
		justifyContent: 'space-between',
    	marginTop: '2%',
		paddingRight: '3%',
		paddingLeft: '3%',
	},
	botoes:{
		borderRightWidth: 2,
		borderRightColor: 'black',
		paddingRight: '3%',
		justifyContent: 'space-between',
		paddingBottom: '10%',
		paddingTop: '10%',
	},	
});

/*
<div>
	{data.map(image => (
		<div key={image.id_postagem}>
			<span>{image.nome}</span>
			<span>{image.legendaPost}</span><br />
			<img style={{
					width: 225, 
					height: 290,
					marginRight: '5%',
				}} src={image.urlFoto} alt='Imagem'/>
			<hr />
		</div>
	))}
</div>
*/

