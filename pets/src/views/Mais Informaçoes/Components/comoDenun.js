//Importações para a composição da página:
import * as React from 'react';
import {View, Text, Image, StyleSheet, ScrollView } from 'react-native';


//Exportação da funçõa da Tela de Como Denunciar:
export default function ComoDenun() {
  return(
	<ScrollView>
    <View style={styles.view}> 
		<Text style={styles.text2}>Como denúnciar maus tratos aos animais?</Text>
		<Text style={styles.text6}>			Primeiramente, saber o endereço exato do local em que está 
			sendo praticado os maus tratos. E se possivel, que você consiga comprovar o crime, 
			por meio de gravações, fotos e/ou testemunhas. </Text>
	</View>
	</ScrollView>
  );
};


//Estilização da Tela de Como Denúnciar:
const styles= StyleSheet.create({
	/*header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		height: '4%',
		marginTop: '5%'
	},*/
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
	view: {
		backgroundColor: 'white',
		height: 245,
	},
});
