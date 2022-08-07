import * as React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



export default function SubHeader({navigation}) {

 	return(
		<View style={styles.subHeader} onPress={() => {
			navigation.navigate('configuracao');
		}}>
			<TouchableOpacity>
				<Image style={styles.img3} source={{uri: 'https://chi01pap001files.storage.live.com/y4mDaZZLeGyTZUR_rvU8Q3qEG1r5CWqFmaKJ-IRd1C1iJw9CjQTX-B-_Klr2TY3JVTuS4iBipGRlWCV2OMYSxqCMunL62EarhJ-OYAkV1_AqSZEG0pTKzpnFoRqGvr1cRz0NU8S21Aa2WlVF7N0bOnHkLCPYQDd6MJc8bQf40cfhdUmAtLRrxM2GU6sSYgbYxUu?width=130&height=133&cropmode=none'}}
				/>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => {
				navigation.navigate('quiz');
			}}>
				<Text style={styles.divisoes}>Quiz</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => {
				navigation.navigate('postagens');
			}}>
				<Text style={styles.divisoes}>Posts</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => {
				navigation.navigate('chat');
			}}>
				<Text style={styles.divisoes}>Chat</Text>
			</TouchableOpacity>
		</View>
  	);
}



const styles= StyleSheet.create({
  subHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: '2%',
		width: '100%',
		textTransform: 'uppercase',
		marginBottom: '4%'
	},
	img3:{ 
		width: 60, 
		height: 40,
	}, 
  divisoes:{
		fontSize: 21,
		marginLeft: 35,
		paddingTop: 5,
	},
});