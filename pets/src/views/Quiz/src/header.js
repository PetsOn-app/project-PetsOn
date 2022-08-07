import * as React from 'react';
import {View, Image, StyleSheet } from 'react-native';

export default function Header() {
  return(
    <View style={styles.logo}>
      <Image style={styles.img1} source={require('./img/logo.png')}/>
      <Image style={styles.img2} source={require('./img/logoPata.png')}/>
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
    paddingBottom: '3%'
  },
  img1:{
    width: 110, 
    height: 25,
    marginTop: '3%'
  },
  img2:{
    width: 50, 
    height: 50,
  },
});