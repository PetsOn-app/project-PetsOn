//Importações para a composição de parte da página de perfil do usuário:
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Modal1 from './Modal.js';

//Exportação da função da pagina de Perfil do usuário:
export default function Perfil() {
  return(
    <View style={styles.perfil}>
        <Image style={styles.img3} source={require('../img/fotoperfil1.jpg')}/>
        <Image style={styles.img4} source={require('../img/fotoperfil2.jpg')}/>
		
		<TouchableOpacity style={styles.modal}>
		  <Modal1/>
		</TouchableOpacity>
    </View>
  );
};

//Estilização da página de Perfil:
const styles= StyleSheet.create({
  perfil: {
		backgroundColor: 'white',
		height: '15%',
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '17%',
		paddingLeft: '17%',
		borderBottomWidth: 3,
		borderBottomColor:'black',
	},
	modal: {
		marginTop: 430,
	},
	img3: {//Foto perfil pessoa
		width: 150, 
		height: 150,
		borderRadius: 100,
	},
	img4: {//Foto perfil animais
		width: 106, 
		height: 106,
		borderRadius: 50,
	},
});
