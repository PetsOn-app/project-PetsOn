//Importações para a composição da parte SubHeader da página de Contatar Empresa:
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';


//Exportação da função da página SubHeader de Contatar Empresas:
export default function SubHeader(props) {

  	const [searchQuery, setSearchQuery] = React.useState('');
  	const onChangeSearch = query => setSearchQuery(query);

  	return(
		<View style={styles.subHeader}>
			<TouchableOpacity style={styles.botaoSand}>
				<Image style={styles.img2} source={require('../img/menu2.1.png')}/>
			</TouchableOpacity>

			<Searchbar style={styles.pesquisa}
      			placeholder="Pesquise aqui"
      			onChangeText={onChangeSearch}
      			value={searchQuery}
			/>
		</View>
  );
};


//Estilização da página SubHeader de Contatar Empresas:
const styles= StyleSheet.create({
	subHeader: {
		backgroundColor: 'white',
		height: '3%',
		width: '100%',
		textTransform: 'uppercase',
		marginTop: '25%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '4%',
		paddingLeft: '4%',
		borderBottomWidth: 4,
		borderBottomColor:'black',
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
	}
});
