//Importações para a composição da página da Tela de Cadastro do usuário:
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { RadioButton, Checkbox } from 'react-native-paper';
import AsyncStorage  from '@react-native-async-storage/async-storage';


//Importando á página de rotas do Back-end:
import api from "../../api/api.js";

//Importações das composições de parte da página da tela de Cadastro do usuário:
//import Inputs from './Components/TelaCadastro/Inputs.jsx';



//Exportação da função da Tela de Cadastro do usuário:
export default function Cadastro ({navigation}) {

  //Declarando o estado inicial das vairiáveis por meio do useState:
  const [ Username, setUsername ]   = useState('');
  const [ email, setEmail ]         = useState('');
  const [ password, setPassword ]   = useState('');
  const [ phone, setPhone ]         = useState('');
  const [ typeCount, setTypeCount ] = useState('');
  const [tipoConta, setTipoConta] = useState();

    
  //Função para Cadastrar o novo usuário ao banco de dados:
  async function registerUser(event) {
    event.preventDefault();

    try {
      
      //Condição caso algum campo não tenha sido preenchido corretamente:
      if(Username === '' || email === '' || password === '' || phone === '' || tipoConta === ''){

        alert(`É necessário preencher todos os campos!`)
      }

        //Enviando osdados via objeto para o Back-end:
        const cadastro = { 
          "email": email, 
          "password": password,
          "name": Username,
          "telephone": phone,
          "typeCount": tipoConta,
        }
        const response = await api.post('/Cadastro', cadastro );

        // //Logando o usuário, após cadastrado:
        // const login = { "userEmail": email, 
        //                 "password": password,
        // }
        // const responseLogar = await api.post('/Login', login);
        

        //Condição caso o retorno de resposta seja o status de 201 e 200:
        if(response.status === 201){

          //Logando o usuário, após cadastrado:
          const login = { "userEmail": email, 
                          "password": password,
          }
          const responseLogar = await api.post('/Login', login);

          //Chamando os dados para que seja possível estabelecer a conexão durante a navegação:
          const tken = await AsyncStorage.setItem("@tokenJWT", responseLogar.data.token);

          const jsonValueID = JSON.stringify(responseLogar.data.id_usuario);
          const userID = await AsyncStorage.setItem("@id_use", jsonValueID);


          const jsonValueUser = JSON.stringify(responseLogar.data.userFind);          
          const info = await AsyncStorage.setItem("@info_user", jsonValueUser);          
          console.log(tken);       
          console.log(userID);       
          console.log(info);


          alert(`Seja bem vindo(a): ${email}`);

          setUsername('');
          setEmail('');
          setPassword('');
          setPhone('');
          setTipoConta('');
          setTypeCount('');

          navigation.navigate('postagens');
          
          //Caso algum dados tenha sido preenchido de forma incorreta:
        } else {

          alert(`Por favor, preencha os campos corretamente!`);

        }
      
    } catch (err) {

      alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
      
    }
  }

  //Retornando a composição da página:
  return (    
    <ScrollView>
      <View style={{marginBottom: '5%', marginTop: '5%'}}>
        <View style={styles.logo}>
          <ImageBackground style={styles.img1}
            source={{uri: 'https://chi01pap001files.storage.live.com/y4mhWlHfvSL6CnmFpKc8ehOKKUMrDnjuOcTdanDbYZEYZVN5p9YcUS7cU6svgkr3ZZwxH83l5duPdppk2H8gTSvOqRBEOGEKYuJ0KYLYXc23M8MgD5ZIJCUZRiiJjI6VuaEQw9SBfusAvOVtlQOGnB0vdugdT75BiggsLwikKsxC1Ncy40Ed_fW_sV1mwZklUi8?width=500&height=500&cropmode=none'}}
          />
        </View>

        <View style={styles.base}>
          <Text style={styles.title}>Cadastro</Text>
          
          <View>
              <View>
                <TextInput type="text"
                  placeholder="Username"
                  value={Username}
                  onChangeText={e => setUsername(e)}
                  required
                  style={styles.input} 
                />

                <TextInput type="email"
                  placeholder="E-mail"
                  value={email}
                  onChangeText={e => setEmail(e)}
                  required
                  style={styles.input} 
                />

                <TextInput type="text"
                  placeholder="Senha"
                  value={password}
                  keyboardType='numeric'
                  onChangeText={e => setPassword(e)}
                  required
                  style={styles.input} 
                />

                <TextInput type="text"
                  placeholder="Telefone"
                  value={phone}
                  keyboardType='numeric'
                  onChangeText={e => setPhone(e)}
                  required
                  style={styles.input}
                />
              </View>
              
              <View>
                <Text style={styles.subtitle}>Tipo de conta</Text>
              </View>
              
              <View style={styles.radio}>
                <RadioButton.Group onValueChange={tipoConta => setTipoConta(tipoConta)} value={tipoConta}>
                  <RadioButton.Item label='Comum' value='Comum'/>
                  <RadioButton.Item label='Parceria' value='Parceria'/>
                </RadioButton.Group>
              </View>

              <View>
                <TouchableOpacity onPress={registerUser} >
                  <Text style={styles.buttonConfirm} >Confirmar</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Checkbox.Item className={'checkBox'}
                  style={styles.checkbox} label="Ao confirmar você concorda que guardaremos os seus dados." 
                />
              </View>
          </View>

          <View> 
            <TouchableOpacity onPress={() => {
              navigation.navigate("login")
            }}>
              <Text style={{fontSize:18, textAlign: 'center', marginTop: '8%'}}>Já possui uma Conta?</Text>                
            </TouchableOpacity>                
          </View> 
        </View>
      </View>
    </ScrollView>
  );
}


//Estilização da página de Cadastro do usuário:
const styles = StyleSheet.create({  
  img1: {
    width: 255, 
    height: 90,
  },
  logo: {
    flexDirection: 'row',
    marginTop: '6%',
    justifyContent: 'center'
  },
  base: {
    height: '78%',
    width:  '80%',
    backgroundColor: 'rgba(255,251,80,0.63)',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '22%',
    borderRadius: 20
  },
  title: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    //estilização texto "Cadastro"
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    marginTop: '10%',
    marginLeft: '10%',
  },
  radio:{
    writingDirection: 'rtl',
    paddingRight: '5%',
    margin: 'auto',
  },
  input: {
    //estilização borda
    borderColor: 'black',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: '85%',
    paddingLeft: '2%',

    //estilização texto
    fontSize: 18,
    //fontFamily: 'Segoe UI',
    letterSpacing: 2,

    //localização
    alignSelf: 'center',
    marginTop: '7%', 
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
    marginTop: '10%',

    //Estilização texto "Confirmar"
    textAlign: 'center',
    color: '#1E5D63',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  radio: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: 'Segoe UI'
  },

  checkbox: {
    marginTop: '8%',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    marginLeft:'8%',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: '10%',
    marginLeft: '10%',
  },
});
