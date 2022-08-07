import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { RadioButton } from 'react-native-paper';


//ATENÇÃO para instalar a dependencia linear gradient = expo install expo-linear-gradient

export default function Pergunta2() {
  
  const [pergunta, setPergunta] = React.useState();

	return (
    <View>
      <View style={styles.quiz1}>
        <Image style={styles.imgQuiz} source={require('../img/pata2.png')}/>
        <Text style={styles.textQuiz}>Como é a convivência do seu pet com outros animais?</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Group 
          onValueChange={pergunta => setPergunta(pergunta)} value={pergunta}>
          <RadioButton.Item label="Leva um tempo para se acostumar com outro amiguinho, mas logo se tornam companheiros leais" value="alternativaA2"/>
          <RadioButton.Item label="Não é amigável na presença de outros animais" value="alternativaB2"/>
          <RadioButton.Item label="Muito amigável e brincalhão com qualquer animal que se aproxima" value="alternativaC2"/>
          <RadioButton.Item label="Não faz questão de ter muita proximidade com outros pets, mas se dá bem com eles" value="alternativaD2"/>
        </RadioButton.Group>
      </View>
    </View>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
  imgQuiz: {
    height: 40,
    width: 40,
  },
  quiz1: {
    alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
    marginRight: '5%',
    marginLeft: '5%',
    alignItems: 'center',
    marginTop: '10%',
  },
  textQuiz: {
		marginTop: '2%',
		marginLeft: '3%',
    width: '85%',
		textAlign: 'left',
    fontSize: 18,
  },
  radio: {
    writingDirection: 'rtl',
    paddingRight: '10%',
    marginLeft: '5%',
    marginTop: '5%'
  },
});