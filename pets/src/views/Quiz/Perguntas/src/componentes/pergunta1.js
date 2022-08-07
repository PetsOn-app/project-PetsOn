import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { RadioButton } from 'react-native-paper';


//ATENÇÃO para instalar a dependencia linear gradient = expo install expo-linear-gradient

export default function Pergunta1() {
  
  const [pergunta, setPergunta] = React.useState();

	return (
    <View>
      <View style={styles.quiz11}>
        <Image style={styles.imgQuizzz} source={require('../img/pata1.png')}/>
        <Text style={styles.textQuizzz}>Qual é a principal característica do seu bichinho de estimação?</Text>
      </View>
      
      <View style={styles.radiooo}>
        <RadioButton.Group  
            onValueChange={pergunta => setPergunta(pergunta)} value={pergunta}>
          <RadioButton.Item label="Coragem" value="alternativaA1"/>
          <RadioButton.Item label="Persistência" value="alternativaB1"/>
          <RadioButton.Item label="Lealdade" value="alternativaC1"/>
          <RadioButton.Item label="Perspicácia" value="alternativaD1"/>
        </RadioButton.Group>
      </View>
    </View>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
  imgQuizzz: {
    height: 40,
    width: 40,
  },
  quiz11: {
    alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
    marginRight: '5%',
    marginLeft: '5%',
    alignItems: 'center',
    marginTop: '5%',
  },
  textQuizzz: {
		marginTop: '2%',
		marginLeft: '3%',
    width: '85%',
		textAlign: 'left',
    fontSize: 18,
  },
  radiooo: {
    writingDirection: 'rtl',
    paddingRight: '10%',
    marginLeft: '5%',
    marginTop: '5%',
  },
});