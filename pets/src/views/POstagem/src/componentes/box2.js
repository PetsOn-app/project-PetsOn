import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



export default function Box2() {

  const [ curtir, setCurtir ]= useState (true);

  return(
    <View style={styles.box}>
		<View style={styles.cabecario}>
			<Text style={styles.text1}>_user1</Text>
			<TouchableOpacity>
				<Text style={styles.text2}>Add</Text>
			</TouchableOpacity>
		</View>
		
		<View style={styles.postagem}>
			<View style={styles.botoes}>
				<TouchableOpacity>
					<Image style={styles.img5} source={require('../img/comentar.png')} />
				</TouchableOpacity>

				<TouchableOpacity onPress={()=>setCurtir(!curtir)}>
					{curtir ?
					<Image style={styles.img6} source={require('../img/curtir.png')} />
					:
					<Image style={styles.img6} source={require('../img/curtida.png')} />
					}
				</TouchableOpacity>

				<TouchableOpacity>
					<Image style={styles.img6} source={require('../img/compartilhar.png')}/>
				</TouchableOpacity> 
			</View>

			<Image style={styles.img7} source={require('../img/postagem2.jpg')}/>	
		</View>
	</View>
  );
}


const styles= StyleSheet.create({
	box: {
		height: 350,
		width: 'auto',
		backgroundColor: 'white',
		margin: '7%',
		
	},
	cabecario:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '7%',
		paddingLeft: '7%',
    marginTop: '2%',
		borderBottomWidth: 1,
		borderBottomColor:'black',
		paddingBottom: '2%'
	},
	text1:{
		fontSize: 22
	},
	text2:{
		fontSize: 22,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		letterSpacing: 2,
	},
	postagem:{
		flexDirection: 'row',
		justifyContent: 'space-between',
    marginTop: '2%',
		paddingRight: '3%',
		paddingLeft: '3%',
	},
	botoes:{
		borderRightWidth: 2,
		borderRightColor: 'black',
		paddingRight: '3%',
		justifyContent: 'space-between',
		paddingBottom: '10%',
		paddingTop: '10%'

	},
	img5:{
		width: 50, 
		height: 50,
	},
	img6:{
		width: 50, 
		height: 43,
	},
	img7:{
		width: 225, 
		height: 290,
		marginLeft: '2%'
	},
});