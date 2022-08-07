//Importações para a composição de parte SubHeader da página de perfil do usuário:
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Button } from 'react-native';
import { Searchbar } from 'react-native-paper';


//Exportação da função do SubHeader da página de Perfil do usuário:
export default function SubHeader(props) {
	
  	const [searchQuery, setSearchQuery] = React.useState('');
  	const onChangeSearch = query => setSearchQuery(query);

  	return(
		<View style={styles.subHeader}>
			<TouchableOpacity style={styles.botaoSand} onPress={()=>props.navigation.navigate('Teste2')}>
				<Image style={styles.img2} source={require('../img/menu2.2.png')}/>
			</TouchableOpacity>
			<Searchbar style={styles.pesquisa}
      			placeholder="Pesquise aqui"
      			onChangeText={onChangeSearch}
      			value={searchQuery}/>
		</View>
  	);
};

//Estilização da página SubHeader do Perfil do usuário:
const styles= StyleSheet.create({
	subHeader: {
		backgroundColor: 'white',
		height: '3%',
		width: '100%',
		textTransform: 'uppercase',
		marginTop: '5%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
	},
	botaoSand: {
		marginBottom: "7%"
	},
	img2: {
		width: 40, 
		height:40,
		marginBottom: '7%'
	},
	pesquisa: {
		borderRadius: 100,
		width: '80%',
		marginBottom: '10%'
	},
});
