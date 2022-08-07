import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';
import { Button } from 'react-native-web';

export default function Base2() {
		const [ficha, setFicha] = useState (true);
    const [expanded, setExpanded] = React.useState(true);
		const [selectedValue, setSelectedValue] = useState("java");

    const handlePress = () => setExpanded(!expanded);

	
	return (
		<SafeAreaView> 
			<View style={styles.header}> 
				<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFWBuR-q2TWPHlibKQiI6Yyg5Se29qFzygAopgY1FZDGcZj-7loRO1CQwzN6WQElMQ8Tub5cyNO3BzvwHPGhr6rV0DeUHRKW-0daYaKmK67DZXna1q0J1KLKgE4in4GH47IFR5G_UT1v-tPuwn4kyRUky25CU2nqIw2GbqTK6jGdppC0Th2VbcM4R1lGAnUlj?width=1079&height=403&cropmode=none'}}
				/> 
				<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
				/>
			</View>

			
			
			
			<View style={styles.background}>
			<ScrollView> 
			
					{/*Botão Adoção */}
					<View style={styles.subheader}> 
						<List.Section >
						<List.Accordion style={styles.itens1}
							title="Pets"
							
							expanded={expanded}
							onPress={handlePress}>
							<List.Item title="Adoção" style={styles.itens2} onPress={()=> href=''} />
							<List.Item title="Doação" style={styles.itens2} onPress={()=> href=''} />
						</List.Accordion>
						</List.Section>

						

										{/* Infos sobre o animal para doação */}
                    <View style={ficha ? styles.fundo : styles.fundoNov}>
							{/* IMAGEM DO PET que o usuário enviou */}
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
										<View style={styles.questionario}>
											
											
												<Text style={styles.title}>Animal</Text>
												
												<Text style={styles.textBasic}>Nome
													<Text value="nome" style={styles.result}> nome </Text>
													</Text>

												<Text style={styles.textBasic}>Espécie 
													<Text value="especie" style={styles.result}>especie</Text>
												</Text>

												<Text style={styles.textBasic}>Idade  
													<Text value="idade" style={styles.result}>idade</Text>
												</Text>

												<Text style={styles.textBasic}>Raça 
													<Text value="raca" style={styles.result}>raca</Text>	
												</Text>

												<Text style={styles.textBasic}>Cor da Pelagem 
													<Text value="pelagem" style={styles.result}>pelagem</Text>
												</Text>

												<Text style={styles.textBasic}>Porte 
													<Text value="porte" style={styles.result}>porte</Text>
												</Text>

												<Text style={styles.textBasic}> Vermifugado
													<Text value="vermifugado" style={styles.result}>vermifugado</Text>
												</Text>

												<Text style={styles.textBasic}> Vacinado
													<Text value="vacinado" style={styles.result}>vacinado</Text>
												</Text>

												<Text style={styles.textBasic}> Castrado
													<Text value="castrado" style={styles.result}>castrado</Text>
												</Text>
												

												<Text style={styles.title}>Doador(a)</Text>

												<Text style={styles.textBasic}>Nome
													<Text value="nomeDoador" style={styles.result}>nomeDoador</Text>
												</Text>

												<Text style={styles.textBasic}>Perfil
													<Text value="nomePerfil" style={styles.result}>nomePerfil</Text>
												</Text>




												<Text style={styles.title}>Localização</Text>

												<Text style={styles.textBasic}>Cidade
													<Text value="cidade" style={styles.result}>cidade</Text>
												</Text>

												<Text style={styles.textBasic}>Região
													<Text value="regiao" style={styles.result}>regiao</Text>
												</Text>

												<Text style={styles.textBasic}>Munícipio
													<Text value="municipio" style={styles.result}>municipio</Text>
												</Text>

												<View style={styles.teste}>
												<Text style={styles.title}>Local Para Retirada</Text>
													<Text value="retirada" style={styles.result}>retirada</Text>
												
												<Text style={styles.title}>Observações
													<Text value="observcoes" style={styles.result}>observacoes</Text>
												</Text>
												</View>
											
										</View>
										}	
										</View>
									</View>
									

									
			</ScrollView>
			</View>
		</SafeAreaView>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
	background:{
		backgroundColor: 'black'
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

	teste:{
		backgroundColor:'white'
	},

    fundo:{
        backgroundColor:'white',
        width:'90%',
        height:450,
				//alignItems: 'flex-start',
				margin: 15
    },
		fundoNov:{
			backgroundColor:'white',
			width:'90%',
			height:1000,
			margin: 15
	},
	buttonFicha:{
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
    
    subheader:{
        backgroundColor: 'white',
        height:10,
        
    },

	img1:{ //imagem PetsOn
		width: 139, 
		height: 38,
	},

	img2:{ //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},

	imgPet:{
		width:"100%",
		height: 250,
		marginBottom: '8%'
	},

	nomes:{
		borderBottomWidth: 3,
		borderLeftWidth: 3,
		borderRightWidth:3,
		fontSize:20,
		fontWeight: 400,
		paddingLeft: '5%',
		width:'95%',
		marginLeft: '2%',
		marginBottom: '4%'
	},
	textBasic:{
		fontSize: 18,
		fontWeight: 400,
		marginLeft: '15%',
		
	},
	title:{
		marginBottom:'3%',
		marginTop:'5%',
		fontSize: 22,
		fontWeight: 400,
		fontFamily: 'Ruda',
		marginLeft: '2%'
		
	},
	result:{
		marginBottom: '15%',
		marginLeft: '10%',
	},
	

	background: {
		height: 800,
		width: 'auto',
		
	},
	text:{
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
	text1:{
		color: 'black',
		fontSize:25,
		fontWeight: '600',

	},
	escolha:{ 
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
