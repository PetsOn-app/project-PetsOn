import * as React from 'react';
import { useState } from 'react';
import { Text, SafeAreaView,  StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Amigos from './src/componentes/amigos.js';

// import Header from './src/componentes/header.js';
// import SubHeader from './src/componentes/subheader.js';


export default function TelaConfg({navigation}) {

	const [searchQuery, setSearchQuery] = useState('');
  	const onChangeSearch = query => setSearchQuery(query);

	return (
		<ScrollView style={styles.view}>
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

				<Text style={styles.text}>Amigos</Text>
				<Amigos/>
			</SafeAreaView>
		</ScrollView>
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
		height: '6%',
		marginTop: '20%'
	},
	textConfig: {
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
		height: '12%',
		width: '100%',
		textTransform: 'uppercase',
		marginTop: '16%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: '15%'
	},
	img2:{
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa:{
		borderRadius: 100,
		width: '80%',
		marginBottom: '15%'
	},
	text:{
		fontSize: 25,
		letterSpacing: 3,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '2%'
	},
	view: {
		backgroundColor: 'white',
		height: 1100,
	},
});



