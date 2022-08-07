import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';


import AsyncStorage  from '@react-native-async-storage/async-storage';

//Importando á página de rotas do Back-end:
import api from "../../api/api.js";



//EXPORTANDO A FUNÇÃO DA TELA DO QUIZ LUFA-LUFA:
export default function TelaQuizUm({navigation}) {

  //FUNÇÃO PARA ADICIONAR À IMAGEM LUFA-LUFA NO BANCO:
  async function registerLufaLufa(event) {
    event.preventDefault();

    try {

      //Instânciando o JWT para a validação da página:
      const jwt = await AsyncStorage.getItem("@tokenJWT");      	
            
      //Instânciando o ID do usuário para a validação do usuário que fez a requisição:
      const id_usuario = await AsyncStorage.getItem('@id_use');
      const id = id_usuario;

      //Realizando a requisição para a postagem do quiz:
        const postagem = { 
            "legendaPost": " Meu Resultado do Quiz: De qual casa de Hogwarts seu pet é? ",
            "urlFoto": "https://firebasestorage.googleapis.com/v0/b/petson-eac94.appspot.com/o/lufa.png?alt=media&token=b4629a50-421a-4f09-b13a-baa3a004d8ee" ,
        }
        const response = await api.post('/Postagens', postagem, {
            headers: {
                "Authorization": `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        });
        console.log('aqui Postagem Resultado do Quiz >>>>', response.status);

        //Condição caso o status do Compartilhamento para Postagens tenha dado certo:
        if(response.status === 201){

          alert(`Compartilhamento realizado.`);

            navigation.navigate('quiz');          


        //Condição caso o status do Compartilhamento para Postagens não tenha dado certo:
        } else {
            alert(`Por favor, preencha os campos corretamente!`);
        }
        
    } catch (err) {

        alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
    
    }
  }

  //Retornando à composição da Página do Resultado do Quiz:
  return (
    <View style={{backgroundColor: 'white'}}>
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
            <Image style={styles.img22} source={require('./src/img/logoPata.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.quizz}>
          <Text style={styles.text11}>De qual casa de hogwarts seu pet é? </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.imgView}>
          <Image style={styles.img2} source={require('./src/img/lufa.png')}/>
        </View>

        <View style={styles.view}>
          <TouchableOpacity style={styles.button} onPress={registerLufaLufa}>
            <Image style={styles.img3} source={require('./src/img/compartilhar.png')}/>
            <Text style={styles.text1}>Compartilhar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}  onPress={() => {
              navigation.navigate('perguntas');
            }}>
            <Image style={styles.img3} source={require('./src/img/refazer.png')}/>
            <Text style={styles.text2}>Refazer</Text>
          </TouchableOpacity>
        </View>
			</ScrollView>
    </View>
  );
}


//Estilização da página:
const styles = StyleSheet.create({  
  logoo:{
    alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: '5%',
		paddingLeft: '5%',
    marginTop: '5%',
    paddingBottom: '3%'
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
		borderBottomWidth: 2,
		borderBottomColor:'black',
		paddingBottom: '3%',
    backgroundColor: 'white',
	},
	img1:{
	  width: 110, 
	  height: 25,
	  marginTop: '3%',
    backgroundColor: 'white',
	},
	img2:{
	  width: 50, 
	  height: 50,
	},
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
