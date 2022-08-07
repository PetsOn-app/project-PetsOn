//Importações para a composição da Edição do Perfil da página de perfil do usuário:
import * as React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import Header from './src/header.js';

//Importando á página de rotas do Back-end:
import api from '../../api/api.js';


export default function Quiz({navigation}) {
	
	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [ dados, 	 setDados 	] = useState({}); //Recebendo os dados como Objeto.
	const [ tasks, 	 setTasks 	] = useState([]); //Recebendo os dados como Array.
	const [ loading, setLoading ] = useState(true); //Iniciando ou finalizando o carregamento da página.
	
	//Usando o useEffect para compor á página com a busca dos dados requeridos:
	useEffect(() => {
		async function getDados() {
			const { data } = await api.get('/Listar/dataQuiz');
			console.log(data.message);
			setDados(data.message);
			setLoading(false);

			// if(data.err == '') {
			// 	setDados(data.message);
			// } else{
			// 	alert("Error: " + data.err);
			// }
		}
		getDados();
	}, [tasks]);
  
	
	//Retornando a composição da página com os dados cadastrados e campos para a alteração dos mesmos:
  	return (
		<View style={{backgroundColor: 'white'}}>
			<View style={styles.logo}>
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img1} source={require('./src/img/logo.png')} />
				</TouchableOpacity>
									
				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
					}}
				>
					<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
					/>
				</TouchableOpacity>
			</View>

			<ScrollView>
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
						<Text style={styles.divisoesSelect}>Quiz</Text>
					</TouchableOpacity>

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
				</View>

				<LinearGradient
					// Background Linear Gradient
					colors={['#09A3B2','#04EABD']}
					style={styles.background}
				>
					<SafeAreaView style={styles.quiz}>
						<View style={styles.quiz1}>
							<Image style={styles.imgQuiz} source={{uri: 'https://chi01pap001files.storage.live.com/y4m859luHetnYEI-394RznC8AN6OBj2B6neognVCZwMIxR7eP8QOCswTUjFtwyWyjZSV3YtA0_PyJbG3dTqVy9xEdc5AquH-ZpCLssLykJzrnctr7wWf2BZT3Ptc55h-DlP-IhswEmBv-Axf7_-9Q9tDyp6DA6Wz9-VKxgUQagfjbdoCPhhuKm_qRo5LLd2a84Q?width=715&height=415&cropmode=none'}}
							/>

							<View style={styles.buttonQuiz}>
								<TouchableOpacity onPress={() => {
									navigation.navigate('perguntasDois');
								}}>
									<Text style={styles.textQuiz}> O que o Jacquin diria sobre seu pet?</Text> 
									<Image style={styles.imgPlay} source={{uri: "https://chi01pap001files.storage.live.com/y4mvXLMPK1kWahw3UaF60GxlIcosUedv2jlJIzWLXGRnIWXLxcfssxAJ_WGvGqoc_rebiOZEuTeLM658jLmFGvKE_7jLR_VQfDcFiqDl7EeJdfYytLiOOdprcexJJaRr4Ov6ovkU5Hf5OFCjR8z9M_sUuqDQxrdrFIie3gpxFU1SDRSQzX_MoLpWA5ZOJLnu1wN?width=109&height=145&cropmode=none"}} 
									/>              
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.quiz1}>
							<Image style={styles.imgQuiz} source={{uri: 'https://chi01pap001files.storage.live.com/y4m5OpVrTCvFBBo4CzTsWgIYEZ5KINKVcEpFoDN9WYghwSWm0wn8eipBBr1CUpYjboFwpYriH8tSabJV_0cnYZjev7dSaKHB_rkrh1968uHfI9MFEf8-nqtTZuJLAqkdkuCvCVBVnz7_A-62Bz39NVOWM_sbPl6XFP1nbv0sh4JYybLex6n4zdh4vngPV3SQoRh?width=410&height=729&cropmode=none'}}
							/>

							<View style={styles.buttonQuiz}>
								<TouchableOpacity onPress={() => {
									navigation.navigate('perguntas');
								}}>	
									<Text style={styles.textQuiz}> De qual casa de Hogwarts seu pet é?</Text> 
									<Image style={styles.imgPlay} source={{uri: "https://chi01pap001files.storage.live.com/y4mvXLMPK1kWahw3UaF60GxlIcosUedv2jlJIzWLXGRnIWXLxcfssxAJ_WGvGqoc_rebiOZEuTeLM658jLmFGvKE_7jLR_VQfDcFiqDl7EeJdfYytLiOOdprcexJJaRr4Ov6ovkU5Hf5OFCjR8z9M_sUuqDQxrdrFIie3gpxFU1SDRSQzX_MoLpWA5ZOJLnu1wN?width=109&height=145&cropmode=none"}} 
									/>              
								</TouchableOpacity>
							</View>
						</View>
					</SafeAreaView>
				</LinearGradient>
			</ScrollView>
		</View>
	);
}


//ESTILIZAÇÃO DA PÁGINA DE QUIZES:
const styles= StyleSheet.create({	
    botao:{
        borderWidth: 2,
        borderBottomColor: 'Black',
        borderRadius: 30,
        padding: 10,
    },
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
		paddingBottom: '2%'

	},
	img3:{ 
		width: 60, 
		height: 40,
	}, 
  	divisoes: {
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
  	imgQuiz: {
		height: '100%',
		width: '100%',
		borderRadius: 20,
	},
	img14: {
		width: 430, 
		height: 27,
		marginTop: 5
	},
	imgPlay: {
		marginTop: 1,
		marginBottom: '90%',
		marginLeft: '90%',
		width: 20, 
		height: 20,
	},
	quiz1: {
		marginRight: '10%',
		marginLeft: '10%',
		alignItems: 'center',
		marginTop: '2%',
		backgroundColor: 'white',
		height: '15%',
		width: '80%',
		borderRadius: 20,
	},
	buttonQuiz: {
		display: 'flex',
		backgroundColor: 'white',
		marginTop: '2%',
		position: 'absolute',
		paddingRight: 20,
		//paddingTop: 20,
		width: 295,
		height: 50,
		borderRadius: 10
	},
	textQuiz: {
		marginTop: '2%',
		marginLeft: '3%',
		width: '65%',
		textAlign: 'justify',
	},


	quiz:{
		height: 800
	},
	imgQuiz: {
		height: '100%',
		width: '100%',
		borderRadius: 20,
	},
	imgPlay: {
		marginTop: 10,
		marginBottom: '90%',
		marginLeft: '90%',
		width: 20, 
		height: 20,
	},
  	quiz1: {
		marginRight: '10%',
		marginLeft: '10%',
		alignItems: 'center',
		marginTop: '5%',
		backgroundColor: 'white',
		height: '15%',
		width: '80%',
		borderRadius: 20,
  	},
  	buttonQuiz: {
		display: 'flex',
		backgroundColor: 'white',
		marginTop: '2%',
		position: 'absolute',
		paddingRight: 20,
		width: 295,
		height: 50,
		borderRadius: 10,
  	},
	textQuiz: {
		marginTop: '2%',
		marginLeft: '3%',
		width: '50%',
		textAlign: 'center',
	},	 
	box: {
		height: 250,
		width: 'auto',
		marginBottom: '70%',
	} //só para teste por enquanto
});
