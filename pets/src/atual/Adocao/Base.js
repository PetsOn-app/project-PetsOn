import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';
import Select from './InputSelect.js';

export default function Base() {

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

			
			
			
			
			<ScrollView> 
			<LinearGradient
				// Background Linear Gradient
				colors={['#09A3B2','#04EABD']}
				style={styles.background}>
					
					{/*Botão Adoção */}
					<View style={styles.subheader}> 
						<List.Section >
						<List.Accordion style={styles.itens1}
							title="Adoção"
							
							expanded={expanded}
							onPress={handlePress}>
							<List.Item title="Doação" style={styles.itens2} onPress={()=> href=''} />
							<List.Item title="Pets" style={styles.itens2} onPress={()=> href=''} />
						</List.Accordion>
						</List.Section>

							<Text style={styles.text}>  Encontre o{'\n'} animalzinho{'\n'}mais perto de{'\n'}        você</Text>
							
					</View>
					<View style={styles.container}>
						<Text style={styles.text1}>Estados</Text>
      			<Picker
							selectedValue={selectedValue}
							style={styles.escolha}
							onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

						>
							<Picker.Item label="SP" value="sp" />
							{/* <Picker.Item label="RJ" value="rj" />
							<Picker.Item label="ES" value="es" />
							<Picker.Item label="MG" value="mg" /> */}
						</Picker>
					</View>
					<View style={styles.container2}>
						<Text style={styles.text1}>Região</Text>
      					<Picker
							selectedValue={selectedValue}
							style={styles.escolha} 
							onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
						>
							<Picker.Item label="Zona Sul" value="zs" />
							<Picker.Item label="Zona Leste" value="zl" />
							<Picker.Item label="Zona Oeste" value="zo" />
							<Picker.Item label="Zona Norte" value="zn" />
						</Picker>
						
						 
					</View>
					<TouchableOpacity onPress='buttonConfirm' style={styles.buttonAlign} >
      						<Image source={{
							uri:'https://chi01pap001files.storage.live.com/y4mZ6o__pMHpd0NQvcq_0Kb1wvWRVA6IBOlwvfWUzw-nisOmais6A4mCd9tfRbw7zhEHjv2EQR-T8Dj1NV0hvJgcCp_PD2z-LUXXyX6PS6mQccbts-005vpZpUCpASbhE4_oiIfzafK1tljr7-NNmCSwaRR5P-X-JYjJMue22dm694cIGnBUKhf7hPI-PMZxNgP?width=70&height=70&cropmode=none' }}
							style={styles.buttonPet}/>
      					</TouchableOpacity>
					
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
		paddingRight: 10,
		paddingLeft: 10,
        // paddingTop: 15,
		// borderBottomWidth: 1,
		// borderBottomColor:'black',
		height: 60
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
	buttonPet:{
		width: 70,
		height: 70,
		
	  },
	  buttonAlign:{
		alignItems:'center',
		marginBottom:'30%'
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
