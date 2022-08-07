//Importações para a composição de parte da página de perfil do usuário:
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';


//Exportação da função para Excluir o perfil do usuário:
export default function ExcluirPerfil({navigation}) {
  return(
    <View style={styles.view}>
        <Text style={styles.text}>Excluir sua conta</Text>
		
		<TouchableOpacity onPress={() => {
            navigation.navigate('excluirPerfil');
        }}>
          <Text style={styles.button}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização dos containners / Views da página:
const styles= StyleSheet.create({
	view: {
		flexDirection: 'row',
    	height: '0'
	},
	text: {
		fontSize: 18,
		letterSpacing: 1,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '5%'
	},
	button: {
		borderRadius: 100,
		width: '100%',
		color: '#1E5D63',
		borderColor: '#04EABD',
		borderWidth: 2,
		fontSize: 16,
		marginLeft: '5%',
		marginTop: '8%',
		textAlign: 'center',
		fontWeight: 'bold',
    	padding: 5,
		paddingLeft: 80,
    	paddingRight: 80,
	},
});
