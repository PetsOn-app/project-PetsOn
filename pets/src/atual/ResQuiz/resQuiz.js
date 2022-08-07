import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';
import Header from './src/componentes/header.js';

export default function TelaQuiz({navigation}) {
  return (
    <View style={styles.container}>
      <Header/>

      <ScrollView>
        <View style={styles.imgView}>
          <Image style={styles.img2} source={require('./src/img/lufa.png')}/>
        </View>

        <View style={styles.view}>
          <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate('quiz');
            }}>
            <Image style={styles.img3} source={require('./src/img/compartilhar.png')}/>
            <Text style={styles.text1}>Compartilhar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}  onPress={() => {
              navigation.navigate('quiz');
            }}>
            <Image style={styles.img3} source={require('./src/img/refazer.png')}/>
            <Text style={styles.text2}>Refazer</Text>
          </TouchableOpacity>
        </View>
			</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imgView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%'
  },
  img2:{
    width: 310, 
    height: 400,
  },
  img3:{
    width: 30, 
    height: 30,
  },
  view:{
		flexDirection: 'row',
    marginTop: '20%',
    alignItems: 'center',
		justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: 45,
	},
	button:{
		borderRadius: 30,
    flexDirection: 'row',
		borderColor: '#04EABD',
		borderWidth: 2,
    padding: 5,
		paddingLeft: 15,
    paddingRight: 30,
	},
  text1:{
    fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
    color: '#1E5D63',
    marginTop: '4%',
    marginLeft: '5%'
  },
  text2:{
    fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
    color: '#1E5D63',
    marginTop: '4%',
    marginLeft: '5%'
  }
});
