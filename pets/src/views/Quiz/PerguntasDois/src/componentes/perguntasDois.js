import * as React from 'react';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';


//ATENÇÃO para instalar a dependencia linear gradient = expo install expo-linear-gradient




//EXPORTANDO A FUNÇÃO PERGUNTAS DO QUIZ:
export default function PerguntasDois({navigation}) {
  
  //Declarando um estado inicial para cada pergunta do Quiz:
  const [ perguntaUm,        setPerguntaUm       ] = useState('');
  const [ perguntaDois,      setPerguntaDois     ] = useState('');  
  const [ perguntaTres,      setPerguntaTres     ] = useState('');
  const [ perguntaQuatro,    setPerguntaQuatro   ] = useState('');
  const [ perguntaCinco,     setPerguntaCinco    ] = useState('');  
  const [ perguntaSeis,      setPerguntaSeis     ] = useState('');
  const [ perguntaSete,      setPerguntaSete     ] = useState('');
  const [ perguntaOito,      setPerguntaOito     ] = useState('');  
  const [ perguntaNove,      setPerguntaNove     ] = useState('');
  const [ perguntaDez,       setPerguntaDez      ] = useState('');
  const [ perguntaOnze,      setPerguntaOnze     ] = useState(''); 


  //FUNÇÃO PARA A VALIDAÇÃO DE RESPOSTA DO QUIZ:
  function validaRespostaQuizDois() {

    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaUm === 'alternativaA1' && perguntaTres === 'alternativaC1' && perguntaSete === 'alternativaG1' && perguntaOnze === 'alternativaK1') {

      navigation.navigate('resQuizUmUm');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaDois === 'alternativaB1' && perguntaCinco === 'alternativaE1' && perguntaSeis === 'alternativaF1') {

      navigation.navigate('resQuizUmDois');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaOito === 'alternativaH1' && perguntaNove === 'alternativaI1' && perguntaDez === 'alternativaJ1') {

      navigation.navigate('resQuizUmTres');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário tenha selecionado a 1° pergunta:
    if(perguntaUm === 'alternativaA1' && perguntaTres === 'alternativaC1' && perguntaSete === 'alternativaG1' && perguntaOnze === 'alternativaK1') {

      navigation.navigate('resQuizUmQuatro');

    } 
    
    
    //Condição para o Resultado do quiz caso o usuário não tenha selecionado algum dos campos das perguntas do quiz:
    if(perguntaUm === '' && perguntaDois === '' && perguntaTres === '' && perguntaQuatro === '' && perguntaCinco === '' && perguntaSeis === '' && perguntaSete === '' && perguntaOito === '' && perguntaNove === '' && perguntaDez === '' && perguntaOnze === '') {

      alert(`É necessário assinalar pelo menos uma resposta existente no quiz!`);
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
          <Text style={styles.text11}>O que o Jacquin diria sobre seu pet? </Text>
        </View>
      </View>


      <View>
        <View style={styles.quiz111}>
          <Image style={styles.imgQuizzz} source={require('../img/pata1.png')}/>
          <Text style={styles.textQuizzz}>Marque as opções correspondentes ao seu bichinho:</Text>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaUm => setPerguntaUm(perguntaUm)} value={perguntaUm}
            >
              <RadioButton.Item label="Prefere uma caixa de papelão ao invés da caminha." value="alternativaA1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaDois => setPerguntaDois(perguntaDois)} value={perguntaDois}
            >
              <RadioButton.Item label="Foge de noite pra ficar no telhado do vizinho." value="alternativaB1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaTres => setPerguntaTres(perguntaTres)} value={perguntaTres}
            >
              <RadioButton.Item label="Dorme na caminha." value="alternativaC1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaQuatro => setPerguntaQuatro(perguntaQuatro)} value={perguntaQuatro}
            >
              <RadioButton.Item label="só come whiskas e ração premium." value="alternativaD1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaCinco => setPerguntaCinco(perguntaCinco)} value={perguntaCinco}
            >
              <RadioButton.Item label="Briga com outros pets." value="alternativaE1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaSeis => setPerguntaSeis(perguntaSeis)} value={perguntaSeis}
            >
              <RadioButton.Item label="Arranha o veterinário." value="alternativaF1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaSete => setPerguntaSete(perguntaSete)} value={perguntaSete}
            >
              <RadioButton.Item label="Gosta de tomar banho." value="alternativaG1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaOito => setPerguntaOito(perguntaOito)} value={perguntaOito}
            >
              <RadioButton.Item label="Foge e volta dois dias depois como se nada tivesse acontecido." value="alternativaH1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaNove => setPerguntaNove(perguntaNove)} value={perguntaNove}
            >
              <RadioButton.Item label="Se intimida com facilidade." value="alternativaI1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaDez => setPerguntaDez(perguntaDez)} value={perguntaDez}
            >
              <RadioButton.Item label="Arranha o sofá e outros móveis da casa." value="alternativaJ1"/>
          </RadioButton.Group>
        </View>

        <View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaOnze => setPerguntaOnze(perguntaOnze)} value={perguntaOnze}
            >
              <RadioButton.Item label="Obedece quando chamam ele." value="alternativaK1"/>
          </RadioButton.Group>
        </View>


      </View>


      
      <TouchableOpacity style={styles.button} onPress={validaRespostaQuizDois}>
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


/*

<View style={styles.radiooo}>
          <RadioButton.Group  
              onValueChange={perguntaUm => setPerguntaUm(perguntaUm)} value={perguntaUm}
            >
              <RadioButton.Item label="Prefere uma caixa de papelão ao invés da caminha." value="alternativaA1"/>
              <RadioButton.Item label="Foge de noite pra ficar no telhado do vizinho." value="alternativaB1"/>
              <RadioButton.Item label="Dorme na caminha." value="alternativaC1"/>
              <RadioButton.Item label="só come whiskas e ração premium." value="alternativaD1"/>
              <RadioButton.Item label="Briga com outros pets." value="alternativaA1"/>
              <RadioButton.Item label="Arranha o veterinário." value="alternativaB1"/>
              <RadioButton.Item label="Gosta de tomar banho." value="alternativaC1"/>
              <RadioButton.Item label="Foge e volta dois dias depois como se nada tivesse acontecido." value="alternativaD1"/>
              <RadioButton.Item label="Se intimida com facilidade." value="alternativaA1"/>
              <RadioButton.Item label="Arranha o sofá e outros móveis da casa." value="alternativaB1"/>
              <RadioButton.Item label="Obedece quando chamam ele." value="alternativaC1"/>
          </RadioButton.Group>
        </View>
*/