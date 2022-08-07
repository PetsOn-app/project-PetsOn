import * as React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Header(props) {
  return(
    <View >
      <View style={styles.logo}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Quiz')}>
          <Text style={styles.text}>Quiz</Text>
        </TouchableOpacity>
        <Image style={styles.img2} source={require('../img/logoPata.png')}/>
      </View>
      <View style={styles.quiz}>
        <Text style={styles.text1}>De qual casa de hogwarts seu pet é?</Text>
      </View>
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
    paddingBottom: '3%'
  },
  text:{
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase'
	},
  img2:{
    width: 50, 
    height: 50,
  },
  quiz:{
    backgroundColor: '#09A3B2',
    width: '80%', 
    textAlign: 'right',
    borderRadius: 10
  },
  text1:{
		fontSize: 18,
    marginRight: '3%',
    color: 'white',
    
   
	},
});