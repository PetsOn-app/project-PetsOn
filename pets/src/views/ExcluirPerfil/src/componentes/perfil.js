//Importações para a composição de parte da página de perfil do usuário:
import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

//Importando á página de rotas do Back-end:
import api from "../../../../api/api.js";

//Exportação da função para a Comfirmação da Exclusão do Perfil do usuário:
export default function Perfil({navigation}) {

	async function deleteConta(event) {
		event.preventDefault();

		try {
			
			const jwt = localStorage.getItem('tokenJWT');
			console.log('jwt');

			const id_usuarioo = localStorage.getItem('id_user');
			console.log(id_usuarioo);
			const id = id_usuarioo;

			const response = await api.delete(`/Comum/${id}`, {
				headers: {
					"Authorization": `Bearer ${jwt}`,
					"Content-Type": "application/json",
				}, 
			});
			

			console.log('aqui Excluir Perfil >>>>', response.status);
			if(response.status === 201){

				alert(`A sua conta foi deletada com sucesso. \nEsperamos que volte o mais breve possível!`);

				navigation.navigate('login');

			} else {
				alert(`Os dados informados estão incorrentos. Por favor, tente novamente!`);
			}

		} catch (err) {
			alert(`Erro ao tentar Excluir a conta. \nCódigo erro: ${err}`);
		}
	}
    
  return(
		<View>
			<View style={styles.perfil}>
				<Image style={styles.img3} source={require('../img/fotoperfil1.jpg')}/>
				<Image style={styles.img4} source={require('../img/fotoperfil2.jpg')}/>
			</View>

			<Text style={styles.text1}>nome_dPerfil</Text>
			
			<Text style={styles.text2}>Ao clicar em excluir, sua conta com seu nome de usuário, 
				foto de perfil, publicações, conversas e qualquer outra interação realizada 
				neste aplicativo, será excluída permanentemente sem ser possível recuperar a 
				conta. </Text>

			<Text style={styles.text3}>Logo, caso decida voltar a usar o aplicativo PetsOn 
				novamente, precisará criar uma nova conta.</Text>
			
			<Text style={styles.text4}>Vamos sentir sua falta...</Text>

			<View>
				<TouchableOpacity onPress={deleteConta}>
					<Text style={styles.button}>Excluir</Text>
				</TouchableOpacity>
			</View>
		</View>
  	);
};


// Estilização dos containners / Views da página:
const styles= StyleSheet.create({
  perfil: {
		backgroundColor: 'white',
		height: '15%',
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '26%',
		paddingLeft: '26%',
		marginTop: '24%'
	},
	img3: {//Foto perfil pessoa
		width: 100, 
		height: 100,
		borderRadius: 100,
	},
	img4: {//Foto perfil animais
		width: 80, 
		height: 80,
		borderRadius: 50,
	},
	text1: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '500',
	},
	text2: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 19,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '10%'
	},
	text3: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 19,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '4%'
	},
	text4: {
		marginTop: '5%',
		textAlign: 'center',
		fontSize: 19,
		marginTop: '10%',
		fontWeight: '500',
	},
	button: {
		borderRadius: 100,
		width: '90%',
		color: '#1E5D63',
		borderColor: '#04EABD',
		borderWidth: 2,
		fontSize: 16,
		marginLeft: '5%',
		marginTop: '10%',
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 10,
		textTransform: 'uppercase',
	},
});
