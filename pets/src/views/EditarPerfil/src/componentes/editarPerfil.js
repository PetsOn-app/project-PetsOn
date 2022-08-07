// //Importações para a composição de parte da página de perfil do usuário:
// import * as React from 'react';
// import { useState, useEffect } from "react";
// import { useNavigation, useRoute } from '@react-navigation/native';
// //import { request, PERMISSIONS } from 'react-native-permissions';
// //import Swiper from 'react-native-swiper';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import axios from 'axios';


// //Exportação da função para Editar a foto no perfil do usuário:
// export default function EditarPerfil({navigation}) {


//     const route = useRoute();

//     const [userInfo, setUserInfo] = useState({
//         id: route.params.id,
//         name: route.params.name,
//         email: route.params.email,
//         password: route.params.password,
//         telephone: route.params.telephone,
//         typeCount: route.params.typeCount,
//     });

//     const [loading, setLoading] = useState(false);

// 	useEffect(()=>{
//         const getUserInfo = async () => {
//             setLoading(true);

//             let json  = await axios.get('http://localhost:3335/routes/Comum/id_usuario', userInfo.id_usuario, {
// 				headers: {
// 					"Authorization": `Bearer ${jwt}`,
// 					"Content-Type": "application/json",
// 				}, 
// 			}); 

//             if(json.error == '') {
//                 setUserInfo(json.data);
// 				console.log(json.data);
//             } else {
//                 alert("Erro: "+json.error);
//             }

//             setLoading(false);
//         }
//         getUserInfo();
//     }, []);

	
	 
	
// 	const [ Username, setUsername ]   = useState('');
// 	const [ email, setEmail ]         = useState('');
// 	const [ password, setPassword ]   = useState('');
// 	const [ phone, setPhone ]         = useState('');
// 	const [ typeCount, setTypeCount ] = useState('');
// 	// const [name, setName] = useState();
  
// 	async function dadosUser(event)  {
// 	  event.preventDefault();

// 		try {

// 			const jwt = localStorage.getItem('tokenJWT');
// 			console.log('jwt');
// 			const id_usuario = localStorage.getItem('id_user');
// 			console.log(req.id_usuario);

// 			const alterDados = {
// 				"email": email,
// 				"password": password,
// 				"name": Username,
// 				"telephone": phone,
// 				"typeCount": typeCount,
// 			}
// 			const respost = await axios.put(`http://localhost:3335/routes/Comum/${id_usuario}`, alterDados, {
// 				headers: {
// 					"Authorization": `Bearer ${jwt}`,
// 					"Content-Type": "application/json",
// 				}, 
// 			});    
			

// 			console.log('aqui Editar Perfil >>>>', respost.status);
// 			if(respost.status === 200){
	
// 				alert(`Alterações realizadas com sucesso!: ${Username}`);
		
// 				setUsername('');
// 				setEmail('');
// 				setPassword('');
// 				setPhone('');
// 				setTypeCount('');
		
// 				navigation.navigate('configuracao');				
	
// 			} else {
// 				alert(`Algo deu errado. Por favor, tente novamente!`);
// 			}
			
// 			/*const response = await axios.get('http://localhost:3335/routes/Comum/id_usuario')
// 										.then((response) => setName(response.data));*/
			
// 		} catch (err) {
// 			alert(`Erro na lteração dos dados. Tente novamente. \nCódigo erro: ${err}`);
// 		}
// 	}

// 	return(
// 		<form>
// 			<View style={styles.view}>
// 				<Text style={styles.text}>Nome do usuário: {userInfo.name}</Text>
// 				<TextInput style={styles.input1}
// 				  type="text"
//                   value={Username}
//                   onChange={e => setUsername(e.target.value)}
//                   required 
// 				/>

// 				<Text style={styles.text}>Email cadastrado: {userInfo.email}</Text>
// 				<TextInput style={styles.input1}
// 				  type="email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   required 
// 				/>
				
// 				<Text style={styles.text}>Senha: {userInfo.password}</Text>
// 				<TextInput style={styles.input1}
// 				  type="password"
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                   required
// 				/>

// 				<Text style={styles.text}>Número de Celular: {userInfo.telephone}</Text>
// 				<TextInput style={styles.input1}
// 				  type="numeric"
//                   value={phone}
//                   onChange={e => setPhone(e.target.value)}
//                   required 
// 				/>

// 				<Text style={styles.text}>Tipo de Conta: {userInfo.typeCount}</Text>
// 				<TextInput style={styles.input1}
// 				  type="text"
//                   value={typeCount}
//                   onChange={e => setTypeCount(e.target.value)}
//                   required 
// 				/>

// 				<TouchableOpacity onPress={dadosUser}>
// 				<Text style={styles.button}>Salvar Alterações</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</form>
// 	);
// }


// // Estilização dos containners / Views da página:
// const styles= StyleSheet.create({
// 	view:{
// 		borderBottomWidth: 2,
// 		borderBottomColor: 'black',
// 		paddingBottom: '10%'
		
// 	},
// 	text:{
// 		fontSize: 23,
// 		letterSpacing: 1,
// 		fontWeight: '500',
// 		marginLeft: '5%',
// 		marginTop: '10%'
// 	},
// 	input1:{
// 		borderRadius: 10,
// 		width: '90%',
// 		height: '10%',
// 		borderColor: 'black',
// 		borderWidth: 2,
// 		fontSize: 18,
//     	marginLeft: '5%',
//     	marginTop: '5%',
// 		paddingLeft: '3%'
// 	},
// 	input2:{
// 		borderRadius: 10,
// 		width: '90%',
// 		borderColor: 'black',
// 		borderWidth: 2,
// 		fontSize: 18,
//     	marginLeft: '5%',
//     	marginTop: '5%',
		
// 	},
// 	button:{
// 		borderRadius: 100,
// 		width: '90%',
// 		color: '#1E5D63',
// 		borderColor: '#04EABD',
// 		borderWidth: 2,
// 		fontSize: 16,
//     	marginLeft: '5%',
//     	marginTop: '10%',
// 		textAlign: 'center',
// 		fontWeight: 'bold',
// 		padding: 10,
// 	}
// });