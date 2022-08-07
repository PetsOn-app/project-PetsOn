//Importações para a composição da Tela de Contatar Empresa:
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';


//Exportação da função da TelaConfig da Tela de Contatar Empresas:
export default function TelaConfg({navigation}) {

	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);

    const [ perguntaUm, setPerguntaUm ] = useState();

	function LimpaRadioButton(){

		if(perguntaUm != ''){

			setPerguntaUm('');

			navigation.navigate('configuracao');
		} if(perguntaUm === ''){
			alert(`É necessário assinalar o Motivo e preencher todos os campo`);
		}
	}

	return (
		<ScrollView style={{backgroundColor: 'white'}} >
			<View style={styles.header}> 
				<TouchableOpacity onPress={() => {
						navigation.navigate('configuracao');
					}}
				>
					<Text style={styles.textConfig}>Configurações</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					navigation.navigate('postagens');
				}}
				>					
					<Image style={styles.img01} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
					/>
				</TouchableOpacity>
			</View>
			
			<View style={styles.subHeader}>
				<TouchableOpacity style={styles.botaoSand} onPress={() => {
					navigation.navigate('configuracao');
				}}
				>
					<Image style={styles.img2} source={require('../Configuraçao/src/img/menu2.1.png')}/>
				</TouchableOpacity>

				<Searchbar style={styles.pesquisa}
					placeholder="Pesquise aqui"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</View>

			<Text style={styles.text}>Contatar Empresa</Text>
			
			<View style={styles.view}>
				<Text style={styles.text1}>Motivo</Text>
				<View style={styles.viewSelect}>
					<View style={styles.radiooo}>
						<RadioButton.Group  
							onValueChange={perguntaUm => setPerguntaUm(perguntaUm)} value={perguntaUm}
							>
							<RadioButton.Item label="Denúncia" value="denuncia" />
							<RadioButton.Item label="Ajuda" value="ajuda" />
							<RadioButton.Item label="Melhorias" value="melhoria" />
						</RadioButton.Group>
					</View>
				</View>

				<View>
					<Image style={styles.img1} source={require('./src/img/carta.png')}/>
					<Text style={styles.text2}>Para</Text>
					<View style={styles.viewSelect}>
						<View style={styles.radiooo}>
							<RadioButton.Group  
								onValueChange={perguntaUm => setPerguntaUm(perguntaUm)} value={perguntaUm}
							>
								<RadioButton.Item label="petsOn.denuncia@hotmail.com" value="denuncia" />
								<RadioButton.Item label="petsOn.ajuda@hotmail.com" value="ajuda" />
								<RadioButton.Item label="petsOn.melhoria@hotmail.com" value="melhoria" />
							</RadioButton.Group>
						</View>
					</View>
				</View>


				<Text style={styles.text2}>Assunto</Text>
				<TextInput style={styles.input2}/>

				<Text style={styles.text2}>Motivo</Text>
				<TextInput style={styles.input3} multiline={true} numberOfLines={7}/>

				<Text style={styles.text2}>Anexo</Text>
				<TextInput style={styles.input2}/>

				<View style={styles.viewBotao}>
					<TouchableOpacity style={styles.botao} onPress={() => {
						navigation.navigate('configuracao');
					}}>
						<Image style={styles.img2} source={require('./src/img/voltar.png')}/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.botao} onPress={LimpaRadioButton}>
						<Image style={styles.img2} source={require('./src/img/salvar.png')}/>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}


//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

//Estilização da Tela de Contatar Empresas:
const styles= StyleSheet.create({	
	view:{
		borderBottomWidth: 2,
		// borderBottomColor: 'black',
		paddingBottom: '5%',
		width: '100%',
		height: 1250,
	},
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
	textConfig: {
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase'
	},
	textPerfil: {
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase'
	},
  	img01: { //imagem do logotipo - Patinha
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
		// borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: '20%'
	},
	img2:{
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa:{
		borderRadius: 100,
		width: '80%',
		marginBottom: '23%'
	},
	text:{
		fontSize: 25,
		letterSpacing: 3,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '2%'
	},
	imgUm:{
		width: 80,
		height: 80
	},
	viewSelect:{
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        marginTop: '2%',
        paddingLeft: '10%',
        paddingRight: '10%'
    }, 
    text1:{
        fontSize: 20,
		textAlign: 'center',
        marginTop: '14%',
    },
    escolha:{ 
		height: 35, 
		width: 230,
	},
	img1:{
		width: 80,
		height: 80,
        alignSelf: 'center',
        marginTop: '10%'
	},
    text2:{
        fontSize: 20,
		textAlign: 'center',
        marginTop: '7%',
    },
    input1:{
        height: 30,
        width: 290,
        borderBottomWidth: 2,
        // borderBottomColor: 'Black',
        marginLeft: '12%',
        marginRight: '12%',
        paddingLeft: '2%',
        fontSize: 16,
        marginTop: '2%'
    },
    input2:{
        height: 30,
        width: 290,
        borderWidth: 2,
        // borderBottomColor: 'Black',
        marginLeft: '12%',
        marginRight: '12%',
        paddingLeft: '2%',
        fontSize: 16,
        marginTop: '3%',
        borderRadius: 5
    },
    input3:{
        height: 150,
        width: 290,
        borderWidth: 2,
        // borderBottomColor: 'Black',
        marginLeft: '12%',
        marginRight: '12%',
        paddingLeft: '2%',
        fontSize: 16,
        marginTop: '3%',
        borderRadius: 5
    },
    viewBotao:{
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '10%',
    },
    img2:{
		width: 30,
		height: 30,
	},
    botao:{
        borderWidth: 2,
        // borderBottomColor: 'Black',
        borderRadius: 30,
        padding: 10,
    },
});



