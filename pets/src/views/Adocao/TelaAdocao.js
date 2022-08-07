// import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView,  TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from 'react-native-paper';
import Picker from '@react-native-picker/picker';

//import Base from './Base';
import Confirmar from './ButtonPaw';

const armazenar = () => {
  localStorage.setItem("tokenJWT", response.data.token);
}
//Criação da exportação da Página de Adoção:
export default function TelaCadastro({navigation}) {

  
  //Retorno da composição da página:
  return (
    <View >
      <View style={styles.logo}>
        <TouchableOpacity OpacityonPress={() => {
            navigation.navigate('postagens');
            }}
        >
          <Image style={styles.img1} source={require('../POstagem/src/img/logo.png')}/>
        </TouchableOpacity>
                  
        <TouchableOpacity onPress={() => {
          navigation.navigate('postagens');
          }}
        >
          <Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
          />
        </TouchableOpacity>
      </View>

    	<ScrollView>
    		<View style={styles.subHeader} >		    			
    			<TouchableOpacity onPress={() => {
    				navigation.navigate('postagens');
    			}}>
    			  <Text style={styles.divisoes}>Posts</Text>
    			</TouchableOpacity>

    			<TouchableOpacity onPress={() => {
    				 navigation.navigate('adocao');
    			}}>
    			  <Text style={styles.divisoesSelect}>Adoção</Text>
    			</TouchableOpacity>

          <TouchableOpacity onPress={() => {
    				navigation.navigate('doacao');
    			}}>
    				<Text style={styles.divisoes}>Doação</Text>
    			</TouchableOpacity>	

          <TouchableOpacity onPress={() => {
    				navigation.navigate('pets');
    			}}>
    				<Text style={styles.divisoes}>Pets</Text>
    			</TouchableOpacity>	
    		</View>	
		</ScrollView>

    </View>
     
  );
}


const styles= StyleSheet.create({
	
	logo:{
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '5%',
		paddingLeft: '5%',
		marginTop: '5%',
		borderBottomWidth: 2,
		borderBottomColor:'black',
		paddingBottom: '3%',
		backgroundColor: 'white',
	  },
	  img1:{
		width: 110, 
		height: 25,
		marginTop: '3%',
		backgroundColor: 'white',
	  },
	  img2:{
		width: 50, 
		height: 50,
	  },
	subHeader: {
		flexDirection: 'row',
		justifyContent: 'center',
		textTransform: 'uppercase',
		borderBottomColor: 'black',
		borderBottomWidth: 2,
	},
	img3:{ 
		width: 60, 
		height: 40,
	}, 
	img4:{
		width: 430, 
		height: 27,
		marginTop: -15
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
  	divisoes:{
		fontSize: 21,
		marginLeft: 25,
		paddingTop: 5,
	},
	divisoesSelect: {
		fontSize: 21,
		marginLeft: 25,
		paddingTop: 5,
		color: '#04d9ae',
		textShadowColor: 'rgb(120, 116, 116)',
		textShadowOffset: {width: -2, height: 3},
		textShadowRadius: 8
	},
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
		paddingTop: '10%',
	},

});
