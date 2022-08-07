//Importações das composições de parte da página da tela de Login do usuário:
import React, {useState} from "react";
import { View, TextInput, Image, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage  from '@react-native-async-storage/async-storage';
//yarn add @react-native-async-storage/async-storage


//Importando á página de rotas do Back-end:
import api from "../../api/api.js";
//import axios from 'axios';



//Exportação da funçõa da tela de Login do usuário:
export default function Login({navigation}) {

  //Iniciando as constantes como vazias por meio do useState:
  const [ userEmail, setEmail ]         = useState();
  const [ password, setPassword ]   = useState(); 

    //FUNÇÃO PARA LOGAR O USUÁRIO:
    async function logaUser(event)  {
      event.preventDefault();

      try {

        //Condição caso algum campo não tenha sido preenchido:
        if(userEmail === '' || password === '') {

          alert(`É necessário preencher todos os campos!`);
        }


        //CONDIÇÃO CASO OS CAMPOS TENHAM SIDO PREENCHIDOS CORRETAMENTE:
        if(userEmail != '' && password != '') {

          //Enviando os dados via objeto para a api enviar ao Back-End:
          const login = { "userEmail": userEmail, 
                          "password": password,
          }
          const response = await api.post('/Login', login);

        //   //CONDIÇÃO CASO OS CAMPOS TENHAM SIDO PREENCHIDOS CORRETAMENTE:
        // if(userEmail != '' && password != '') {

          // //Enviando os dados via objeto para a api enviar ao Back-End:
          // console.log(userEmail, password);
          // const login = { "userEmail": 'petson@gmail.com', 
          //                 "password": '123456987',
          // }
          // const response = await api.post('/Login', login);
          //Condição caso os dados enviados retorne um status 200:
          if(response.status === 200){

            // //Chamando os dados para que seja possível estabelecer a conexão durante a navegação:
            // await AsyncStorage.setItem("@tokenJWT", response.data.token);
            // await AsyncStorage.setItem("@id_use", response.data.id_usuario);
            // await AsyncStorage.setItem("@info_user", response.data.userFind);          
            // console.log(response.data.token);

            const tken = await AsyncStorage.setItem("@tokenJWT", response.data.token);

            const jsonValueID = JSON.stringify(response.data.id_usuario);
            const userID = await AsyncStorage.setItem("@id_use", jsonValueID);


            const jsonValueUser = JSON.stringify(response.data.userFind);          
            const info = await AsyncStorage.setItem("@info_user", jsonValueUser);          
            console.log(tken);       
            console.log(userID);       
            console.log(info);

            alert(`Seja bem vindo(a): ${userEmail}`);

            setEmail('');
            setPassword('');

            navigation.navigate('postagens');

            //Condição caso os dados inseridos estejam errados:
          } else {
            alert(`Os dados informados estão incorretos. Por favor, tente novamente!`);
          }
        }
        
      } catch (err) {

        alert(`Erro ao tentar Logar. Tente novamente. \nCódigo erro: ${err}`);
        
      }
    }
  

  //Retornando a composição da página:
  return(
      <ScrollView>  
          <View style={styles.logo}>
            <Image style={styles.img1}
              source={{uri: 'https://chi01pap001files.storage.live.com/y4mhWlHfvSL6CnmFpKc8ehOKKUMrDnjuOcTdanDbYZEYZVN5p9YcUS7cU6svgkr3ZZwxH83l5duPdppk2H8gTSvOqRBEOGEKYuJ0KYLYXc23M8MgD5ZIJCUZRiiJjI6VuaEQw9SBfusAvOVtlQOGnB0vdugdT75BiggsLwikKsxC1Ncy40Ed_fW_sV1mwZklUi8?width=500&height=500&cropmode=none'}}
            />
          </View>

          <View style={styles.base}>
            <Text style={styles.title}>Login</Text>

            <TextInput type = "text"
              style={styles.input1}
              placeholder="E-mail"
              value={userEmail}
              onChangeText={e => setEmail(e)}
              require 
            />

            <TextInput type = "text"
              style={styles.input2}
              placeholder="Senha"
              value={password}
              keyboardType='numeric'
              onChangeText={e => setPassword(e)}
              require
            />

            <View> 
              <TouchableOpacity onPress={logaUser}>
                <Text style={styles.buttonConfirm}>OK</Text>                  
              </TouchableOpacity>                
            </View>

            <View> 
              <TouchableOpacity onPress={() => {
                navigation.navigate("postagens")
              }}>
                <Text style={styles.text1}>Esqueceu a Senha?</Text>              
              </TouchableOpacity>                
            </View>

            <Image style={styles.img2} source={require('./img/BarraDiv.png')}/>

            <View >
              <TouchableOpacity onPress={() => {
                navigation.navigate("cadastro")
              }}>
                <Text style={styles.text2}>Crie uma conta!</Text>  
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
  );
}

//Estilização da página de Login do usuário:
const styles = StyleSheet.create({
  img1: {
    width: 255, 
    height: 90,
  },
  logo: {
    flexDirection: 'row',
    marginTop: '22%',
    justifyContent: 'center'
  },
  base: {
    height: 480,
    width:  '80%',
    backgroundColor: 'rgba(255,251,80,0.63)',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 20
  },
  title: {
    marginTop: '5%',
    marginLeft: '9%',
    marginRight: '30%',
    fontSize: 26,
    color: 'black',
    //textAlign: 'center',
  },
  text1: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 18,
  },
  text2: {
    marginTop: '5%',
    marginBottom: '6%',
    textAlign: 'center',
    fontSize: 18,
  },
  img2: {
    width: 250, 
    height: 30,
    alignSelf: 'center',
    marginTop: '5%'
  },
  input1: {
    borderColor: 'black',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: '85%',
    fontSize: 18,
    letterSpacing: 2,
    paddingLeft: '2%',
    alignSelf: 'center',
    marginTop: '8%', 
  },
  input2: {
    borderColor: 'black',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: '85%',
    fontSize: 18,
    letterSpacing: 2,
    paddingLeft: '2%',
    alignSelf: 'center',
    marginTop: '12%', 
  },
  buttonConfirm: {
    //Estilização borda
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#1E5D63',

    //Estilização botâo
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    padding: '2%',
    width: '85%',
    height: 40,
    marginTop: 50,

    //Estilização texto "Confirmar"
    textAlign: 'center',
    color: '#1E5D63',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});


