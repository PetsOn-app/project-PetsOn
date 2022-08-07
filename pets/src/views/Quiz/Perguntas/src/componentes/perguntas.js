import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';


//ATENÇÃO para instalar a dependencia linear gradient = expo install expo-linear-gradient




//EXPORTANDO A FUNÇÃO PERGUNTAS DO QUIZ:
export default function Perguntas({navigation}) {
  
  //Declarando um estado inicial para cada pergunta do Quiz:
  const [ perguntaUm,    setPerguntaUm   ] = useState('');
  const [ perguntaDois,  setPerguntaDois ] = useState('');  
  const [ perguntaTres,  setPerguntaTres ] = useState('');


  //FUNÇÃO PARA A VALIDAÇÃO DE RESPOSTA DO QUIZ:
  function validaRespostaQuiz() {

    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaUm === 'alternativaA1' && perguntaDois !== '' && perguntaTres !== '') {

      navigation.navigate('resQuizUm');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaUm === 'alternativaB1' && perguntaDois !== '' && perguntaTres !== '') {

      navigation.navigate('resQuizDois');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaUm === 'alternativaC1' && perguntaDois !== '' && perguntaTres !== '') {

      navigation.navigate('resQuizTres');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaUm === 'alternativaD1' && perguntaDois !== '' && perguntaTres !== '') {

      navigation.navigate('resQuizQuatro');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário não tenha selecionado algum dos campos das perguntas do quiz:
    if(perguntaUm === '' || perguntaDois === '' || perguntaTres === '') {

      alert(`É necessário assinalar uma resposta para cada pergunta feita no quiz!`);
    }
  }

  
	//Retornando a composição da página com o Resultado do Quiz:
	return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View >
        <View style={styles.logoo}>
          <TouchableOpacity onPress={() => {
              navigation.navigate('quiz');
            }}>
            <Text style={styles.textt}>Quiz</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {
            navigation.navigate('postagens');
          }}>
            <Image style={styles.img22} source={require('../img/logoPata.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.quizz}>
          <Text style={styles.text11}>De qual casa de hogwarts seu pet é? </Text>
        </View>
      </View>


      <View>
        <View style={styles.quiz111}>
          <Image style={styles.imgQuizzz} source={require('../img/pata1.png')}/>
          <Text style={styles.textQuizzz}>Qual é a principal característica do seu bichinho de estimação?</Text>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaUm => setPerguntaUm(perguntaUm)} value={perguntaUm}
            >
              <RadioButton.Item label="Coragem" value="alternativaA1"/>
              <RadioButton.Item label="Persistência" value="alternativaB1"/>
              <RadioButton.Item label="Lealdade" value="alternativaC1"/>
              <RadioButton.Item label="Perspicácia" value="alternativaD1"/>
          </RadioButton.Group>
        </View>
      </View>


      <View>
        <View style={styles.quiz111}>
          <Image style={styles.imgQuizzz} source={require('../img/pata2.png')}/>
          <Text style={styles.textQuizzz}>Como é a convivência do seu pet com outros animais?</Text>
        </View>
        
        <View style={styles.radiooo}>
          <RadioButton.Group 
            onValueChange={perguntaDois => setPerguntaDois(perguntaDois)} value={perguntaDois}>
            <RadioButton.Item label="Leva um tempo para se acostumar com outro amiguinho, mas logo se tornam companheiros leais" value="alternativaA2"/>
            <RadioButton.Item label="Não é amigável na presença de outros animais" value="alternativaB2"/>
            <RadioButton.Item label="Muito amigável e brincalhão com qualquer animal que se aproxima" value="alternativaC2"/>
            <RadioButton.Item label="Não faz questão de ter muita proximidade com outros pets, mas se dá bem com eles" value="alternativaD2"/>
          </RadioButton.Group>
        </View>
      </View>


      <View>
        <View style={styles.quiz111}>
          <Image style={styles.imgQuizzz} source={require('../img/pata3.png')}/>
          <Text style={styles.textQuizzz}>Qual é a principal característica do seu bichinho de estimação?</Text>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group
            onValueChange={perguntaTres => setPerguntaTres(perguntaTres)} value={perguntaTres}>
            <RadioButton.Item label="É um animal leal e comportado, mas pode ser teimoso algumas vezes" value="alternativaA3"/>
            <RadioButton.Item label="Briga por atenção, mas também é muito inteligente" value="alternativaB3"/>
            <RadioButton.Item label="O pet é dedicado e paciente. Recebe muito bem as visitas" value="alternativaC3"/>
            <RadioButton.Item label="Possui personalidade única e todos destacam sua inteligência" value="alternativaD3"/>
          </RadioButton.Group>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={validaRespostaQuiz}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </ScrollView>
	);
}

//safeAreaView -  impede que as questôes nativas do dispositivo bloqueiem o cabeçalho

const styles= StyleSheet.create({
  logoo:{
    alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '5%',
		paddingLeft: '5%',
    marginTop: '5%',
    paddingBottom: '3%'
  },
  imgQuizzz: {
    height: 40,
    width: 40,
  },
  quiz111: {
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
  textt:{
		fontSize: 25,
		letterSpacing: 4,
		textTransform: 'uppercase',
	},
  img22:{
    width: 50, 
    height: 50,
  },
  quizz:{
    left: 15,
    backgroundColor: '#09A3B2',
    width: '90%',
		paddingLeft: '5%',
    textAlign: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  text11:{
		fontSize: 18,
    marginRight: '3%',
    color: 'white',
	},
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
    marginLeft: '1%',
    color: 'white',
	},
  button:{
    width: '70%',
    margin:'auto',
    paddingBottom: 50,
  },
  buttonText:{
		borderRadius: 100,
		color: '#1E5D63',
		borderColor: '#04EABD',
		borderWidth: 2,
		fontSize: 16,
    marginLeft: '5%',
    marginTop: '8%',
		textAlign: 'center',
		fontWeight: 'bold',
    padding: 5,
		paddingLeft: 80,
    paddingRight: 80,
	}
});