import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, CheckBox} from 'react-native';
import { Button, List, RadioButton  } from 'react-native-paper';
import { ImageBackground } from 'react-native-web';

export default function Topo() {

		//Menu lateral com acesso as telas adoção e pets
    const [expanded, setExpanded] = React.useState(true);

		//Controle de estado dos radios Buttons
		const [checked, setChecked] = React.useState(false);
		const [checked2, setChecked2] = React.useState(false);
		const [checked3, setChecked3] = React.useState(false);
		const [checked4, setChecked4] = React.useState(false);
		const [checked5, setChecked5] = React.useState(false);
		const [checked6, setChecked6] = React.useState(false);
		
    const handlePress = () => setExpanded(!expanded);

	
	return (
		<SafeAreaView> 
			<View style={styles.header}> 
				<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFWBuR-q2TWPHlibKQiI6Yyg5Se29qFzygAopgY1FZDGcZj-7loRO1CQwzN6WQElMQ8Tub5cyNO3BzvwHPGhr6rV0DeUHRKW-0daYaKmK67DZXna1q0J1KLKgE4in4GH47IFR5G_UT1v-tPuwn4kyRUky25CU2nqIw2GbqTK6jGdppC0Th2VbcM4R1lGAnUlj?width=1079&height=403&cropmode=none'}}
				/> 
				<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
				/>
			</View>
	
			
			<ImageBackground source={{uri: 'https://chi01pap001files.storage.live.com/y4mWEuv48D_reKE91CnzjCqVeUL4qUA0HHXIXbnrWk_aA5DNkSZVTpQyAOFcmKydvCNCoA-DEh41Gdny-2hECvKqLkVSzlbww1ka5806tf1vDwYCONh4nh5y693XZ3rJx_5W9GBRNV_Bk6H1i6qoDOiBrbzUEJESsA58-t68KumvV3Ot1JEC7gWzOzT0O8vDSkM?width=360&height=1935&cropmode=none'}} style={styles.image}>

					{/*Botão Doação */}
					<View style={styles.subheader}> 
						<List.Section >
						<List.Accordion style={styles.itens1}
							title="Doação"
							
							expanded={expanded}
							onPress={handlePress}>
							<List.Item title="Adoção" style={styles.itens2} onPress={()=> href=''} />
							<List.Item title="Pets" style={styles.itens2} onPress={()=> href=''} />
						</List.Accordion>
						</List.Section>
					</View>

				<View style={styles.questionario}>
					<Text style={styles.title}>Animal</Text>
					
					<Text style={styles.textBasic}>Nome 
					<TextInput
					style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Espécie 
						<RadioButton.Group style={styles.radioButtons}>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>Comum</Text>
								<RadioButton value="cachorro"
									status={ checked === 'cachorro' ? 'checked' : 'unchecked' }
									onPress={() =>  setChecked('cachorro')} />
							
								<Text style={{fontSize:18}}>Parceira</Text>
								<RadioButton value="gato"
									status={ checked === 'gato' ? 'checked' : 'unchecked' }
									onPress={() =>  setChecked('gato')} />
							</View>

							<View style={styles.reverse}>
								<Text style={{fontSize:18}}>Outro </Text>
								<TextInput
								style={styles.input}
								placeholder='Qual?'/>
							</View>
						</RadioButton.Group>
					</Text>

					<Text style={styles.textBasic}>Idade  
					<TextInput
					style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Raça 
						<RadioButton.Group style={styles.radioButtons}>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>Puro</Text>
								<RadioButton value="puro"
									status={ checked2 === 'puro' ? 'checked' : 'unchecked' }
									onPress={() => setChecked2('puro')} />
							
								<Text style={{fontSize:18}}>Mestiço</Text>
								<RadioButton value="mestico" 
									status={ checked2 === 'mestico' ? 'checked' : 'unchecked' }
									onPress={() => setChecked2('mestico')}/>
							</View>
						</RadioButton.Group>
					</Text>

					<Text style={styles.textBasic}>Cor da Pelagem 
					<TextInput
					style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Porte 
						<RadioButton.Group style={styles.radioButtons}>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>pequeno</Text>
								<RadioButton value="pequeno" 
									status={ checked3 === 'pequeno' ? 'checked' : 'unchecked' }
									onPress={() => setChecked3('pequeno')}/>
							</View>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>médio</Text>
								<RadioButton value="medio" 
									status={ checked3 === 'medio' ? 'checked' : 'unchecked' }
									onPress={() => setChecked3('medio')}/>
							</View>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>grande</Text>
								<RadioButton value="grande" 
									status={ checked3 === 'grande' ? 'checked' : 'unchecked' }
									onPress={() => setChecked3('grande')}/>
							</View>
						</RadioButton.Group>
					</Text>

					<Text style={styles.textBasic}> Vermifugado
						<RadioButton.Group style={styles.radioButtons}>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>sim</Text>
								<RadioButton value="sim" 
									status={ checked4 === 'sim' ? 'checked' : 'unchecked' }
									onPress={() => setChecked4('sim')}/>
							
								<Text style={{fontSize:18}}>não</Text>
								<RadioButton value="nao" 
									status={ checked4 === 'nao' ? 'checked' : 'unchecked' }
									onPress={() => setChecked4('nao')}/>
							</View>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>sem informação</Text>
								<RadioButton value="sem_info" 
									status={ checked4 === 'sem_info' ? 'checked' : 'unchecked' }
									onPress={() => setChecked4('sem_info')}/>
							
							</View>
						</RadioButton.Group>
					</Text>

					<Text style={styles.textBasic}> Vacinado
						<RadioButton.Group style={styles.radioButtons}>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>sim</Text>
								<RadioButton value="sim" 
									status={ checked5 === 'sim' ? 'checked' : 'unchecked' }
									onPress={() => setChecked5('sim')}/>
							
								<Text style={{fontSize:18}}>não</Text>
								<RadioButton value="nao" 
									status={ checked5 === 'nao' ? 'checked' : 'unchecked' }
									onPress={() => setChecked5('nao')}/>
							</View>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>sem informação</Text>
								<RadioButton value="sem_info" 
									status={ checked5 === 'sem_info' ? 'checked' : 'unchecked' }
									onPress={() => setChecked5('sem_info')}/>
							</View>
						</RadioButton.Group>
					</Text>

					<Text style={styles.textBasic}> Castrado
						<RadioButton.Group style={styles.radioButtons}>
							<View style={styles.radio}>
								<Text style={{fontSize:18}}>sim</Text>
								<RadioButton value="sim" 
									status={ checked6 === 'sim' ? 'checked' : 'unchecked' }
									onPress={() => setChecked6('sim')}/>
							
								<Text style={{fontSize:18}}>não</Text>
								<RadioButton value="nao" 
									status={ checked6 === 'nao' ? 'checked' : 'unchecked' }
									onPress={() => setChecked6('nao')}/>
							</View>
						</RadioButton.Group>
					</Text>

					<Text style={styles.textBasic}>Inserir Foto
						<TextInput
						style={styles.input}
						placeholder='.png/.jpg'/>
					</Text>



					<Text style={styles.title}>Doador(a)</Text>

					<Text style={styles.textBasic}>Nome
						<TextInput
						style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Perfil
						<TextInput
						style={styles.input}
						placeholder='@...'/>
					</Text>




					<Text style={styles.title}>Localização</Text>

					<Text style={styles.textBasic}>Cidade
						<TextInput
						style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Região
						<TextInput
						style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Munícipio
						<TextInput
						style={styles.input}/>
					</Text>

					<Text style={styles.textBasic}>Local Para Retirada</Text>
					
					<TextInput
						style={styles.inputPersonalizado}/>
						<Text style={styles.textPersonalizado}>*pode ser algum ponto de referência</Text>

					<Text style={styles.textBasic}>Observações
					</Text>

					<textarea
						style={{backgroundColor: 'white',
						borderColor: 'black',
						borderWidth: 1,
						borderRadius: '8%',
						width: '80%',
						height: 120}}/>
				</View>

				<TouchableOpacity style={styles.buttonPostar}>
					<Text >Postar</Text>
				</TouchableOpacity>

			</ImageBackground>
				
						
		</SafeAreaView>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
	questionario:{
    
		marginTop: '40%',
		marginLeft: '15%',
  	},
	title:{
		marginBottom:'5%',
		fontSize: 22,
		fontWeight: 400,
		fontFamily: 'Ruda',
	},
	input:{
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,   
		marginBottom: '15%',
		borderRadius: '8%',
		marginLeft: '5%',
	},

	inputPersonalizado:{
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: '8%',
		width: '80%',
	},
	textPersonalizado:{
		marginBottom: '15%',
	},

	radio: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Segoe UI',
		marginBottom: '15%'
	},
	reverse:{
		flexDirection: 'row',
	},
	textBasic:{
		fontSize: 18,
		fontWeight: 400,
	},
	RadioButton:{
		backgroundColor:'red',
	},


	buttonPostar:{
		backgroundColor: 'white',
		alignItems: 'center',
		marginStart: '60%',
		marginTop: '8%',
		paddingTop: '1%',
		width: 93,
		height: 34,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: '10%'
	},



	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
        // paddingTop: 15,
		// borderBottomWidth: 1,
		// borderBottomColor:'black',
		height: 60
	},
	image:{
		height: 1985,
    	width: 400,
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

});
