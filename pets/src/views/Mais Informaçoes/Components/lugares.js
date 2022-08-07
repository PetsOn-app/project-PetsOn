//Importações para a composição da página de Mais informações dos Lugares para denúncias:
import * as React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';


//Exportação da Função da Tela de Denúncias do usuário:
export default function Lugares() {
  return(
    <View style={styles.view}> 
		<Text style={styles.text2}>Lugares e Contatos</Text>
		
			<Text style={styles.text4}>Policia Militar: 190</Text>
			<Text style={styles.text4}>Disque Denúncia: 181</Text>

			<Text style={styles.text4}>IBAMA (no caso de animais silvestre)</Text>
			<Text style={styles.text7}>Linha Verde: 0800 61 8080 linhaverde.sede@ibama.gov.br</Text>
			<Text style={styles.link} onPress={() => 
				{ Linking.openURL('https://www.gov.br/ibama/pt-br/canais_atendimento/fale-conosco'); 
    		}}>Acesse o site do IBAMA</Text> 

			<Text style={styles.text4}>Ministerio Público Federal:</Text>
			<Text style={styles.link} onPress={() => 
				{ Linking.openURL('http://www.mpf.mp.br/mpfservicos'); 
    		}}>Acesse o site do MPF </Text> 

			<Text style={styles.text4}>Safer Net (crimes de crueldade ou apologia aos maus tratos 
				na internet:</Text>
			<Text style={styles.link} onPress={() => 
				{ Linking.openURL('https://new.safernet.org.br/denuncie'); 
    		}}>Acesse o site do Safer Net </Text> 

			<Text style={styles.text3}>Em São Paulo:</Text>
			<Text style={styles.text4}>São Paulo - </Text>
			
			<Text style={styles.text7}>181, 0800 15-6315 (para moradores da Grande São Paulo)</Text>
			<Text style={styles.text5}>Disque Denúncia Animal (São Paulo e Grande São Paulo) - </Text>
			<Text style={styles.text7}>0800 600 6428</Text>

			<Text style={styles.text5}>Web Denúncia -</Text>
			<Text style={styles.link} onPress={() => 
				{ Linking.openURL('https://www.webdenuncia.org.br/depa'); 
    		}}>Acesse o site da DEPA</Text> 

			<Text style={styles.text4}>A DEPA possui um serviço via internet da população para denunciar crimes 
				de maus tratos aos animais. O denunciante também pode optar pelo sigilo no momento 
				do cadastro da denúncia. </Text>
		</View>
  	);
}

//Estilização da página de Denúncias:
const styles= StyleSheet.create({
	text2: {
		fontSize: 22,
		letterSpacing: 2,
		fontWeight: '500',
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '5%',
	},
	text3: {
		fontSize: 20,
		letterSpacing: 1,
		fontWeight: '500',
		marginLeft: '7%',
		marginTop: '7%'
	},
	text4: {
		fontSize: 17,
		fontWeight: '500',
		marginLeft: '10%',
		marginRight: '10%',
		marginTop: '3%',
	},
	text5: {
		fontSize: 17,
		fontWeight: '500',
		marginLeft: '10%',
		marginRight: '10%',
		marginTop: '10%',
	},
	text6: {
		fontSize: 16,
		marginLeft: '7%',
		marginRight: '7%',
		marginTop: '5%'
	},
	text7: {
		fontSize: 16,
		marginLeft: '12%',
		marginRight: '12%',
		marginTop: '2%'
	},
	link: {
		fontSize: 16,
		marginLeft: '12%',
		marginRight: '12%',
		color: '#0000FF',
		textDecorationLine: 'underline',
	},
	view: {
		backgroundColor: 'white',
		height: 1100,
	},
});
