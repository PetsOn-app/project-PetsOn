//Importações para a composição do ScrollView da página de perfil do usuário:
import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';


//Exportação da parte ScrollView da página de Perfil do usuário:
export default function Perfil() {
  return(
    <ScrollView>
		<LinearGradient
		  // Background Linear Gradient
		  colors={['#09A3B2','#04EABD']}
		  style={styles.background}>
				
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>			
		</LinearGradient>
	</ScrollView>
  );
};

//Estilização da página ScrollView do Perfil do usuário:
const styles= StyleSheet.create({
	divisoes: {
		fontSize: 21,
		marginLeft: 35,
		paddingTop: 5,
	  },
	box: {
		height: 350,
		width: 'auto',
		backgroundColor: '#DDD',
		margin: '7%',
	}, //só para teste por enquanto
});
