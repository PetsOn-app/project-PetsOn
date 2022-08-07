import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { RadioButton } from 'react-native-paper';


//ATENÇÃO para instalar a dependencia linear gradient = expo install expo-linear-gradient

export default function Pergunta3() {
  const [pergunta, setPergunta] = React.useState()
	return (
    <View>
      <View style={styles.quiz1}>
        <Image style={styles.imgQuiz} source={require('../img/pata3.png')}/>
        <Text style={styles.textQuiz}>Qual é a principal característica do seu bichinho de estimação?</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Group
          onValueChange={pergunta => setPergunta(pergunta)} value={pergunta}>
          <RadioButton.Item label="É um animal leal e comportado, mas pode ser teimoso algumas vezes" value="alternativaA3"/>
          <RadioButton.Item label="Briga por atenção, mas também é muito inteligente" value="alternativaB3"/>
          <RadioButton.Item label="O pet é dedicado e paciente. Recebe muito bem as visitas" value="alternativaC3"/>
          <RadioButton.Item label="Possui personalidade única e todos destacam sua inteligência" value="alternativaD3"/>
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
    marginTop: '5%',
    paddingBottom: 30,
  },
});