//Importações para a composição de parte da página de Configurações:
import * as React from 'react';
import { useState } from 'react';
import {Text, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { Searchbar } from 'react-native-paper'


//EXPORTAÇÃO DA FUNÇÃO PRINCIPAL DA TELA DE CONFIGURAÇÕES:
export default function TelaConfg({navigation}) {

	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);

	return (
		<ScrollView style={{backgroundColor: 'white'}}>
			<View style={styles.header}> 
				<TouchableOpacity onPress={() => {
					navigation.navigate('perfil');
				 }}
				>	
					<Text style={styles.textPerfil}>Perfil</Text>
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

			<Text style={styles.textConfig}>Configurações</Text>
			<Image style={styles.divisao} source={require('./src/img/BarraDiv.png')}/>
			<View style={styles.view}>				
				<View>
					<TouchableOpacity onPress={() => {
						navigation.navigate("editarPerfil");
					}}>
						<Text style={styles.text1}>editar perfil</Text>
					</TouchableOpacity>
				</View> 

				<TouchableOpacity onPress={() => {
					navigation.navigate("contatarEmpresa");
				}}>
					<Text style={styles.text1}>contratar empresa</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					navigation.navigate("maisInformacoes");
				}}>
					<Text style={styles.text1}>+ informaçoes</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					navigation.navigate("login");
				}}>
					<Text style={styles.text2}>sair</Text>
				</TouchableOpacity>
		</View>

		</ScrollView>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

// Estilização do corpo da página:
const styles= StyleSheet.create({	
	view:{
		borderBottomWidth: 2,
		// borderBottomColor: 'black',
		paddingBottom: '2%',
		width: '100%',
		height: 500,
	},
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		height: '8%',
		marginTop: '15%',
		backgroundColor: 'white',
	},
	textPerfil: {
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase',
		backgroundColor: 'white',
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
		marginTop: '15%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: '10%'
	},
	img2:{
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa:{
		borderRadius: 100,
		width: '80%',
		marginBottom: '10%'
	},
	text:{
		fontSize: 25,
		letterSpacing: 3,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '2%',
	},
	textConfig: {
		fontSize: 26,
		fontWeight: '500',
		textAlign: 'center',
		marginTop: '5%',
		marginBottom: '1%',
		paddingBottom: '1%',
	},
	divisao:{
		width: '100%',
		height: '10%',
		
	},
	modo:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		marginBottom: '5%',
		marginLeft: '7%',
		marginRight: '7%',
		paddingBottom: '5%',
	},
	text:{
		fontSize: 20,
		fontWeight: '500',
	},
	text1:{
		fontSize: 20,
		fontWeight: '500',
		marginLeft: '7%',
		marginRight: '7%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		marginBottom: '5%',
		paddingBottom: '5%',
	},
	modoNoturno:{
		height: 40,
		width: 100,
	},
	text2:{
		fontSize: 20,
		fontWeight: '500',
		marginLeft: '7%',
		marginRight: '7%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		paddingBottom: '5%',
		marginTop: '4%',
		color: '#87CEFA'
	},
});



