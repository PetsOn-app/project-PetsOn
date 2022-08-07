import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabBar() {

	return (
		<SafeAreaView> 
			<View style={styles.header}> 
				<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFWBuR-q2TWPHlibKQiI6Yyg5Se29qFzygAopgY1FZDGcZj-7loRO1CQwzN6WQElMQ8Tub5cyNO3BzvwHPGhr6rV0DeUHRKW-0daYaKmK67DZXna1q0J1KLKgE4in4GH47IFR5G_UT1v-tPuwn4kyRUky25CU2nqIw2GbqTK6jGdppC0Th2VbcM4R1lGAnUlj?width=1079&height=403&cropmode=none'}}
				/> 
				<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
				/>
			</View>

			
			<ScrollView> 
			<View style={styles.subHeader}>
				<Image style={styles.img3} source={{uri: 'https://chi01pap001files.storage.live.com/y4mDaZZLeGyTZUR_rvU8Q3qEG1r5CWqFmaKJ-IRd1C1iJw9CjQTX-B-_Klr2TY3JVTuS4iBipGRlWCV2OMYSxqCMunL62EarhJ-OYAkV1_AqSZEG0pTKzpnFoRqGvr1cRz0NU8S21Aa2WlVF7N0bOnHkLCPYQDd6MJc8bQf40cfhdUmAtLRrxM2GU6sSYgbYxUu?width=130&height=133&cropmode=none'}}
				/>
				<Text style={styles.divisoes} onClick={()=> navigation.navigate('')}>Quiz</Text>
				<Text style={styles.divisoes} onClick={()=> navigation.navigate('')}>Posts</Text>
				<Text style={styles.divisoes} onClick={()=> navigation.navigate('')}>Adoção</Text>
			</View>
			

				{/* <Image style={styles.img4} source={{uri: 'https://chi01pap001files.storage.live.com/y4mFGL5-5xawLNaJlvvB52-1C-T3tIeaFoq2ZEKxrMj5KJ6iOygIXRy98hCmQ4yCMBMd-vZtd6QqGfCRgLJuiQwZtgEK13r-9osRrtn3IfkpHXNNXil-9k-mKQK-wYwobS3yzTMqJW25_UUbEsnlES3fiINA2SLc4RTt-2krF5eCDjMwPMLH9f8mCddbieDVjix?width=371&height=40&cropmode=none'}}
				/> */}
			
				
			<LinearGradient
				// Background Linear Gradient
				colors={['#09A3B2','#04EABD']}
				style={styles.background}>
					

				<View style={styles.box}></View>
				<View style={styles.box}></View>
				<View style={styles.box}></View>
				
			</LinearGradient>
			</ScrollView>
		</SafeAreaView>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		borderBottomWidth: 1,
		borderBottomColor:'black',
		height: '4%'
	},
	subHeader: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'center',
		height: '3%',
		width: '100%',
		textTransform: 'uppercase',
		borderBottomWidth: 1,
		borderBottomColor:'black',
	},
	img1:{ //imagem PetsOn
		width: 139, 
		height: 38,
	},

	img2:{ //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	},

	img3:{ // icone de pessoa
		width: 60, 
		height: 40,
	}, 
	
	img4:{ // linha com a bolinha localizadora
		width: 430,
		height: 27,
	}, 

	divisoes:{
		fontSize: 21,
		marginLeft: 35,
		paddingTop: 5,
	  },
	 
	box: {
		height: 350,
		width: 'auto',
		backgroundColor: '#DDD',
		margin: '7%',
	} //só para teste por enquanto
});



