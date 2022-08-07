//Importações para a composição da página:
import * as React from 'react';
import { useState } from 'react';
import { Text, SafeAreaView,  StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';

//Importando às páginas da composição da Tela de Mais Informações quanto às Denúncias:
import Header from './Components/header.js';
import SubHeader from './Components/subheader.js';
import ComoDenun from './Components/comoDenun.js';
import Lugares from './Components/lugares.js';


//Exportando a Tela Principal de Mais Informações:
export default function TelaInfo({navigation}) {

	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);

	return (
		<ScrollView style={{backgroundColor: 'white'}} >
			<SafeAreaView style={{backgroundColor: 'white'}} >
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
						<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
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


				<Text style={styles.text1}>Mais Informações</Text>
				<ComoDenun/>
				<Lugares/>
			</SafeAreaView>
		</ScrollView>
	);
}


//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

//Estilização da Página Principal da Tela de Mais Informações:
const styles= StyleSheet.create({
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		height: '5%',
		marginTop: '15%'
	},
	textConfig:{
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase'
	},
  	img1: { //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},
	subHeader: {
		backgroundColor: 'white',
		height: '8%',
		width: '100%',
		textTransform: 'uppercase',
		marginTop: '2%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: '5%'
	},
	img2:{
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa:{
		borderRadius: 100,
		width: '80%',
		marginBottom: '5%'
	},
	text1:{
		fontSize: 25,
		letterSpacing: 3,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '4%'
	},	
    viewBotao: {
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '10%',
    },
    img2: {
		width: 30,
		height: 30,
        alignSelf: 'center',
        marginTop: '10%'
	},
    botao:{
        borderWidth: 2,
        borderColor: 'Black',
        borderRadius: 30,
        padding: 10,
    },
	text2: {
		fontSize: 22,
		letterSpacing: 2,
		fontWeight: '500',
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '10%',
	},
    text6: {
		fontSize: 16,
		marginLeft: '7%',
		marginRight: '7%',
		marginTop: '5%'
	},
});



