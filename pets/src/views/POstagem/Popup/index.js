//IMPORTAÇÕES PARA À COMPOSIÇÃO DA PÁGINA:
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from "react-native-image-picker";

import AsyncStorage  from '@react-native-async-storage/async-storage';

//Importando á página de rotas do Back-end:
import api from "../../../api/api.js";


//Função para Postagem:
export default function PhotoComponent({navigation}) {

    //Endereço da pasta do STORAGE do Firebase:
	const BUCKET = 'petson-eac94.appspot.com';

	//Instânciando o useState para CHAMAR os dados cadastrados pelo usuário:
	const [url, setUrl] = useState(""); // Iniciando a Url como vazia.

    //    
    const [ legendaPost,   setLegendaPost  ]   = useState('');
  	const [ fotoPostagem,  setFotoPostagem ]   = useState('');

    //FUNÇÃO PARA ADICIONAR A IMAGEM NO BANCO:
    async function registerPostagem(event) {
        event.preventDefault();

        try {			

            //Instânciando o JWT para a validação da página:
            const jwt = await AsyncStorage.getItem("@tokenJWT");      	
                
            //Instânciando o ID do usuário para a validação do usuário que fez a requisição:
            const id_usuario = await AsyncStorage.getItem('@id_use');
            const id = id_usuario;


			//Condição a url estiver vazia:
			if(url === ''){

				alert(`É necessário inserir o link da imagem a ser postada.`);

			} else {

				//Realizando a requisição para a postagem da Postagem:
				const postagem = { 
					"legendaPost": "legendaPost",
					"urlFoto": url,
				}
				const response = await api.post('/Postagens', postagem, {
					headers: {
						"Authorization": `Bearer ${jwt}`,
						"Content-Type": "application/json",
					},
				});
				console.log('aqui Postagem >>>>', response.status);
				
				if(response.status === 201){

					alert(`Postagem realizada.`);

					setLegendaPost('');
					setFotoPostagem('');

					navigation.navigate('postagens');            

				} else {
					alert(`Por favor, preencha os campos corretamente!`);
				}
			}
				
        } catch (err) {

            alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
        
        }
    }


    return(
    <View style={styles.corpo}>                        
        <Text style={styles.text}>Insira o link da imagem a ser postada: </Text>
		<TextInput style={styles.input1}
			value={url}
			onChangeText={e => setUrl(e)}
			required 
		/>

        <View>
            <TouchableOpacity style={styles.buttonConfirm} onPress={registerPostagem}>
                <Text style={styles.text1}>Adicionar Publicação</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={styles.buttonConfirm} onPress={() => {
				navigation.navigate('postagens');
			}}>
                <Text style={styles.text1}>Cancelar Publicação</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}




const styles = StyleSheet.create({
    corpo: {
        width: '100%',
        height: '100%',
		backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
	text:{
		fontSize: 23,
		letterSpacing: 1,
		fontWeight: '500',
		marginLeft: '5%',
		marginTop: '10%'
	},
	input1:{
		borderRadius: 10,
		width: '90%',
		height: '4%',
		borderColor: 'black',
		borderWidth: 2,
		fontSize: 18,
		marginLeft: '5%',
		marginTop: '5%',
		marginBottom: '16%',
	},
	text1:{
		fontSize: 18,
        textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		letterSpacing: 2,
	},
	text2:{
		fontSize: 22
	},
    modalInput: {
      marginTop: '5%',
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black',
      width: '100%'
    },
    buttonConfirm: {
       //Estilização borda
       borderRadius: 20,
       border:'1px solid #1E5D63',

       //Estilização botâo
       backgroundColor: '#FFFFFF',
       alignSelf: 'center',
       padding: 10,
       width: '90%',
       marginTop: '25%',

       //Estilização texto "Confirmar"
       textAlign: 'center',
       color: '#1E5D63',
       fontSize: 16,
       fontWeight: 'bold',
       textTransform: 'uppercase'
     },
});










/*
//IMPORTAÇÕES PARA À COMPOSIÇÃO DA PÁGINA:
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import ImagePicker from "react-native-image-picker";

import AsyncStorage  from '@react-native-async-storage/async-storage';

//Importando á página de rotas do Back-end:
import api from "../../../api/api.js";

//IMPORTAÇÕES PARA COMUNICAÇÃO ENTRE O FRONT-END E O FIREBASE:
import firebase from '../../Firebase/firebase.js';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { render } from 'react-dom';



    const BUCKET = 'petson-eac94.appspot.com';
	//Instânciando o useState para INSERIR a foto selecionada pelo usuário:
	const [avatar, setAvatar] = useState('');
	const [ progress, setProgress ] = useState(0);
	//Função para a chamada da seleção das fotos pelo usuário:
	async function imagePickerCall() {
		
		if(Constants.platform.ios){
			const { status } = await Permissions.ask(Permissions.CAMERA_ROLL)
			
			if(status !== 'granted') {
				alert("É necessário permitir, para que seja possível\n acessar à camera e ou às fotos de sua galeria.");

				return;
			}
		}

		const recebImage = await ImagePicker.launchImageLibrary({
			mediaTypes: ImagePicker.MediaTypeOptions.Images
		});
		console.log(recebImage);

		if(recebImage.cancelled) {
			return;
		}

		if(!recebImage.uri) {
			return;
		}

		setAvatar(recebImage);
	}

	//Função para o envio da imagem ao Banco de Dados:
	async function uploadImage(event) {
		event.preventDefault();

		//Criando formulário do próprio JS:
		const data = new FormData();
		//Criando pasta para a imagem selecionada:
		// type: avatar.type,
		data.append('file', JSON.stringify({
			uri: avatar.uri,
		}));
		console.log(data);

		// for (let obj of data) {
		// 	console.log(obj);
		// }
		
		// data.storage.append('file', JSON.stringify({
		// 	uri: avatar.uri,
		// }));

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		const storageRef = ref(storage, `${data}`);
		const uploadStorage = uploadBytesResumable(storageRef, data);

		uploadStorage.on("state_changed", snapshot => {
				const progresso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(progresso);
			},
			error => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadStorage.snapshot.ref).then(url => {
					setAvatar(url)}
				);
			}
		);
		

		//const {dataUrl} = avatar.uri.data;

		try {			

            //Instânciando o JWT para a validação da página:
            const jwt = await AsyncStorage.getItem("@tokenJWT");      	
                
            //Instânciando o ID do usuário para a validação do usuário que fez a requisição:
            const id_usuario = await AsyncStorage.getItem('@id_use');
            const id = id_usuario;

            //Realizando a requisição para a postagem da Postagem:
            const postagem = { 
                "legendaPost": "legendaPost",
                "urlFoto": url,
            }
            const response = await api.post('/Postagens', postagem, {
                headers: {
                    "Authorization": `Bearer ${jwt}`,
                    "Content-Type": "application/json",
                },
            });
            console.log('aqui Postagem >>>>', response.status);
            
            if(response.status === 201){

                alert(`Postagem realizada.`);

                setLegendaPost('');
                setFotoPostagem('');

                navigation.navigate('postagens');            

            } else {
                alert(`Por favor, preencha os campos corretamente!`);
            }
            
        } catch (err) {

            alert(`Erro no cadastro. Tente novamente. \nCódigo erro: ${err}`);
        
        }
    }

    */
