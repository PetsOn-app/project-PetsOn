import * as React from 'react';
import {View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({navigation}) {
  return(
    <View style={styles.logo}>
      <Image style={styles.img1} source={require('../img/logo.png')}/>
      					
			<TouchableOpacity onPress={() => {
				navigation.navigate('postagens');
				}}
			>
				<Image style={styles.img2} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}
				/>
			</TouchableOpacity>
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