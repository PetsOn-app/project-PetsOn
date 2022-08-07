import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Fragment, TouchableOpacity, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';


//Importando á página de rotas do Back-end:
import api from '../../api/api.js';


//FUNÇÃO PARA A LISTAGEM DOS PETS EM DOAÇÃO:
export default function Base({navigation}) {

	//Declarando estado inicial da List por meio do useState:
    const [ expanded,      setExpanded      ] = useState(true);
	const [ selectedValue, setSelectedValue ] = useState("java");

	//Função para expandir a List da página:
    const handlePress = () => setExpanded(!expanded);


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

	
	//Retornando à composição da página:
	return (
		<SafeAreaView style={{backgroundColor: 'white'}}> 
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
				<Text style={styles.divisoesSelect}>Adoção</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					navigation.navigate('doacao');
				}}>
					<Text style={styles.divisoes}>Doação</Text>
				</TouchableOpacity>	
			</View>	
						
			<ScrollView> 
				<LinearGradient
					// Background Linear Gradient
					colors={['#09A3B2','#04EABD']}
					style={styles.background}
				>
					{/*Botão Adoção */}
					
						{/* <View style={styles.space} >
							<Image style={styles.imgPet} source={{uri: 'https://chi01pap001files.storage.live.com/y4m3b4GBGiJYi9XuWG4Y94GlkQaNqEI-I25KJ8xmD716CGFHTErTZIR9-trv0gLZZZdUJZV9O-914-eCU3BjDC-nS8c9vVlkRHSUG88wmxvAk0NN_8gSmxFWe98Vi1s-p78YOgDzXQD7ATvTvYJHFJttmA8sXGPNR_hCkVoJ0xIieQnw7HCOEy8aBAaIVVbfMQC?width=3744&height=5616&cropmode=none'}}/> 
							<TouchableOpacity onPress={() => {
								navigation.navigate('belinha');
							}}> 
								<Text style={styles.textPet}> Belinha </Text>
							</TouchableOpacity>
						</View>

						<Text style={styles.linha}><hr></hr></Text> 

						<View style={styles.space}>
							<Image style={styles.imgPet} source={{uri: 'https://chi01pap001files.storage.live.com/y4mvUiv31F6KGD4nMKALCYo3KLbfSuPAISg0zaTsiuyAquqwKbiGDBBvcf61h63PdkXuc2R6JwChcUoPuv9ok1ikAM6FGhzEXPcaLqniJizcDbYskVOBUuBRwMKRpvSnaUPZzxEOjftJhaW6WksPX0rNQWLyszKtLfgROGNeYAciJ_7MaciPvytHkUtt7pVR9pn?width=5060&height=3373&cropmode=none'}}/> 
							<TouchableOpacity onPress={() => {
								navigation.navigate('belinha');
							}}> 
								<Text style={styles.textPet}> Thor </Text>
							</TouchableOpacity>
						</View> 

						<Text style={styles.linha}><hr></hr></Text> */}
						
					<>
						{data.map(image => (
							<View style={styles.vieww} key={image.id_animal}>
								<TouchableOpacity onPress={() => {
									navigation.navigate('belinha');
								}} style={styles.space} > 
									<Text style={styles.textPet}> {image.nomeAnimal} </Text>
									<Image style={{
											width: 85, 
											height: 85,
											borderRadius: 40,
										}}  source={{uri: image.urlFoto}} alt='Imagem'
									/>
								</TouchableOpacity>
								
								<Text style={styles.linha}></Text>
							</View>
						))}
					</>
				</LinearGradient>
			</ScrollView>
		</SafeAreaView>
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
    subheader:{
        backgroundColor: 'white',
        height:10,
    },
	img1:{ //imagem PetsOn
		width: 139, 
		height: 38,
	},
	img2:{
		width: 50, 
		height: 50,
	},	
	imgPet:{
		width: 80, 
		height: 75,
		borderRadius: 80,
	}, 
	vieww: {
		marginTop: '5%',
	},
	space:{
		alignItems: 'center',
		//fontFamily: 'Segoe UI',
		marginLeft: '5%',
		marginRight: '5%',
	},
	textPet:{
		textAlign: 'center',
		fontSize: 24,
	},
	linha:{
		paddingTop: '5%',
		paddingBottom: '5%',
		width:'100%',
	},
	img2:{ //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},
	background: {
		height: 800,
		width: 'auto',
	},
	text: {
		color: 'black',
		margin:100,
		marginTop: '50%',
		position: 'absolute',
		fontSize:30,
		fontWeight: '500',
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
