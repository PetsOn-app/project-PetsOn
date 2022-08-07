import React, {useState} from 'react';
import { RadioButton, Checkbox } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, TextInput, Text, View } from 'react-native';
import axios from 'axios';

export default function Inputs ({navigation}){

  const [ Username, setUsername ]   = useState('');
  const [ email, setEmail ]         = useState('');
  const [ password, setPassword ]   = useState('');
  const [ phone, setPhone ]         = useState('');
  const [ typeCount, setTypeCount ] = useState('');

  //const historyUsers = useHistory();

  async function registerUser(event) {
    event.preventDefault();

    try {

      const cadastro = { 
        "email": email, 
        "password": password,
        "name": Username,
        "telephone": phone,
        "typeCount": "Comum",
      }
      const response = await axios.post('http://localhost:3335/routes/Cadastro', cadastro );
      
      if(response.status === 200){

        alert(`Seja bem vindo(a): ${response.data.email}`);

        setUsername('');
        setEmail('');
        setPassword('');
        setPhone('');
        setTypeCount('');

        navigation.navigate('configuracao');
        

      } else {
        alert(`Por favor, preencha os campos corretamente!`);
      }

      //historyUsers.push('/Login');
      
    } catch (err) {

      alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
      
    }
  }

  return(
    <View>
      <form>
        <View>
          <TextInput type="text"
            placeholder="Username"
            value={Username}
            onChange={e => setUsername(e.target.value)}
            required
            style={styles.input} 
          />

          <TextInput type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={styles.input} 
          />

          <TextInput type="text"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={styles.input} 
          />

          <TextInput type="text"
            placeholder="Telefone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            style={styles.input}
            keyboardType='numeric' onPressIn=''
          />
        </View>
        
        <View>
          <Text style={styles.subtitle}>Tipo de conta</Text>
        </View>
        
        <View>
          <RadioButton.Group style={styles.radioButtons}>
            <View style={styles.radio}>
              <Text style={{fontSize:18}}>Comum</Text>
              <RadioButton type="radio" 
                           value={typeCount}
                           onChange={e => setTypeCount(e.target.value)} />
            </View>
            
            <View style={styles.radio}>
              <Text style={{fontSize:18}}>Parceiro(a)</Text>
              <RadioButton type="radio"
                           value={typeCount}
                           onChange={e => setTypeCount(e.target.value)} />
            </View>
          </RadioButton.Group>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonConfirm} onPress={registerUser} >
            <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Checkbox.Item className={'checkBox'}
            style={styles.checkbox} label="Ao confirmar concorda que  guardemos seus dados." 
          />
        </View>
      </form>
    </View>
  );
}


//Estilização
const styles = StyleSheet.create({
  input:{
    //estilização borda
    borderColor: 'black',
    borderBottomWidth: '2px',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: '85%',

    //estilização texto
    fontSize: 18,
    fontFamily: 'Segoe UI',
    letterSpacing: 2,

    //localização
    alignSelf: 'center',
    marginTop: '7%', 
  },
  
  buttonConfirm:{
    //Estilização borda
    borderRadius: 20,
    border:'1px solid #1E5D63',

    //Estilização botâo
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    padding: '10px',
    width: '85%',
    height: '95%',
    marginTop: '5%',

    //Estilização texto "Confirmar"
    textAlign: 'center',
    color: '#1E5D63',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  radio: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI'
  },

  checkbox: {
    marginTop: '5%',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    marginLeft:'8%'
  },

  subtitle:{
    fontSize: 22,
    textAlign: 'center',
    marginTop: '10%',
    marginLeft: '10%',
  },
});
