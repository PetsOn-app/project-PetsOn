import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';

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
							title="Pets"
							
							expanded={expanded}
							onPress={handlePress}>
							<List.Item title="Adoção" style={styles.itens2} onPress={()=> href=''} />
							<List.Item title="Doação" style={styles.itens2} onPress={()=> href=''} />
						</List.Accordion>
						</List.Section>
					
				
				<View style={styles.space}>
					<Image style={styles.imgPet} source={{uri: 'https://chi01pap001files.storage.live.com/y4m3b4GBGiJYi9XuWG4Y94GlkQaNqEI-I25KJ8xmD716CGFHTErTZIR9-trv0gLZZZdUJZV9O-914-eCU3BjDC-nS8c9vVlkRHSUG88wmxvAk0NN_8gSmxFWe98Vi1s-p78YOgDzXQD7ATvTvYJHFJttmA8sXGPNR_hCkVoJ0xIieQnw7HCOEy8aBAaIVVbfMQC?width=3744&height=5616&cropmode=none'}}/> 
					<TouchableOpacity><Text style={styles.textPet}> Belinha </Text></TouchableOpacity>
				</View>
					<Text style={styles.linha}><hr></hr></Text>

				<View style={styles.space}>
				<Image style={styles.imgPet} source={{uri: 'https://chi01pap001files.storage.live.com/y4mvUiv31F6KGD4nMKALCYo3KLbfSuPAISg0zaTsiuyAquqwKbiGDBBvcf61h63PdkXuc2R6JwChcUoPuv9ok1ikAM6FGhzEXPcaLqniJizcDbYskVOBUuBRwMKRpvSnaUPZzxEOjftJhaW6WksPX0rNQWLyszKtLfgROGNeYAciJ_7MaciPvytHkUtt7pVR9pn?width=5060&height=3373&cropmode=none'}}/> 
					<TouchableOpacity><Text style={styles.textPet}> Thor </Text></TouchableOpacity>
				</View>
				<Text style={styles.linha}><hr></hr></Text>
			</View>				
					
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

	imgPet:{
		width: 80, 
		height: 75,
		borderRadius: 80
	},

	space:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		fontFamily: 'Segoe UI',
		marginLeft: '5%'
	},

	textPet:{
		fontSize:23,
		fontWeight: 400,
		marginLeft: '5%'
	},

	linha:{
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
