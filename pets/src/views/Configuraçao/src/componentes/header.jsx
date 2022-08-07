import * as React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return(
    <View style={styles.header}> 
		<Text style={styles.text}>Perfil</Text>
		<Image style={styles.img1} source={{uri: 'https://chi01pap001files.storage.live.com/y4ml-KoAWtGVUJ6ccbrmRA5ddhYr5UCkjbRxAvB0WSmpUxJMRnIr3AeCCn4Yy4XK6mnMqzBc9cK35-sD0aefsGmCC_xfcTTBibJUiF9u_SbkyMwOR2IciqGErhXy7_nyPdlTYv6GsSXM3pZiFYy_fgfnCWRrLOf0kLSjFLJIt2wvqzDKeWy9ahhicrMefoAgaE4?width=607&height=411&cropmode=none'}}/>
	</View>
  );
}
const styles= StyleSheet.create({
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		height: '4%',
		marginTop: '5%'
	},
	text:{
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase'
	},
  img1:{ //imagem do logotipo - Patinha
		width: 50, 
		height: 53,
	}
});