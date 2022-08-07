//IMPORTAÇÃO PARA A COMPOSIÇÃO DA PÁGINA - ROUTES:
//import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//IMPORTAÇÕES DAS PÁGINAS DESENVOLVIDAS DA NAVEGAÇÃO ENTRE TELAS:
import login from './views/Login/login.jsx';
import cadastro from './views/Cadastro/cadastro.jsx';

import postagem from './views/ButtonFlutuant/ButtonFloat.jsx';

import perfil from './views/Perfil/AppPerfil.jsx';

import postagens from './views/POstagem/postagem.js';
import popup from './views/POstagem/Popup/index.js';
import comentarios from './views/Comentario/App.js';




import quiz from './views/Quiz/quiz.js';
import perguntas from './views/Quiz/Perguntas/src/componentes/perguntas.js';
import resQuizUm from './views/ResQuiz/resQuizUm.js';
import resQuizDois from './views/ResQuiz/resQuizDois.js';
import resQuizTres from './views/ResQuiz/resQuizTres.js';
import resQuizQuatro from './views/ResQuiz/resQuizQuatro.js';

import perguntasDois from './views/Quiz/PerguntasDois/src/componentes/perguntasDois.js';
import resQuizUmUm from './views/ResQuiz/ResQuizDois/resQuizUm.js';
import resQuizUmDois from './views/ResQuiz/ResQuizDois/resQuizDois.js';
import resQuizUmTres from './views/ResQuiz/ResQuizDois/resQuizTres.js';
import resQuizUmQuatro from './views/ResQuiz/ResQuizDois/resQuizQuatro.js';




import adocao from './views/Adocao/TelaAdocao.js';
import doacao from './views/Doacao/doacao.js';
import pets from './views/Pets/Base.jsx';
import belinha from './views/Pets/petsAberta/Base.jsx';

import configuracao from './views/Configuraçao/configuracoes.jsx';
import editarPerfil from './views/EditarPerfil/editarPerfil.jsx';
import excluirPerfil from './views/ExcluirPerfil/excluirPerfil.js';
import amigos from './views/Amigos/amigos.jsx';
import contatarEmpresa from './views/Contatar/contatarEmp.jsx';
import maisInformacoes from './views/Mais Informaçoes/maisInfo.js';


// import perfi from './atual/Perfil/AppPerfil.js';

// <Stack.Screen name='postagem' component={postagem} options={{headerShown: false}} />

//import mensagens from './views/..';


//Const para receber o objeto para a navegação das telas desenvolvidas:
const Stack = createStackNavigator();

//EXPORTAÇÃO DA FUNÇÃO DAS ROTAS DA NAVEGAÇÃO ENTRE AS TELAS DESENVOLVIDAS:
export default function Routes() {

    return(
        <Stack.Navigator initialRouteName = "postagens" >
            <Stack.Screen  name='login' component={login} options={{headerShown: false}} />
            <Stack.Screen  name='cadastro' component={cadastro} options={{headerShown: false}} />
            
            <Stack.Screen name='postagens' component={postagens} options={{headerShown: false}} />
            <Stack.Screen name='post' component={popup} options={{headerShown: false}} />
            <Stack.Screen name='comentarios' component={comentarios} options={{headerShown: false}} />

            <Stack.Screen name='quiz' component={quiz} options={{headerShown: false}} />
            <Stack.Screen name='perguntas' component={perguntas}  options={{headerShown: false}} />
            <Stack.Screen name='resQuizUm' component={resQuizUm} options={{headerShown: false}} />
            <Stack.Screen name='resQuizDois' component={resQuizDois} options={{headerShown: false}} />
            <Stack.Screen name='resQuizTres' component={resQuizTres} options={{headerShown: false}} />
            <Stack.Screen name='resQuizQuatro' component={resQuizQuatro} options={{headerShown: false}} />

            
            <Stack.Screen name='perguntasDois' component={perguntasDois}  options={{headerShown: false}} />
            <Stack.Screen name='resQuizUmUm' component={resQuizUmUm} options={{headerShown: false}} />
            <Stack.Screen name='resQuizUmDois' component={resQuizUmDois} options={{headerShown: false}} />
            <Stack.Screen name='resQuizUmTres' component={resQuizUmTres} options={{headerShown: false}} />
            <Stack.Screen name='resQuizUmQuatro' component={resQuizUmQuatro} options={{headerShown: false}} />

            <Stack.Screen  name='adocao' component={adocao} options={{headerShown: false}} />
            <Stack.Screen  name='doacao' component={doacao} options={{headerShown: false}} />
            <Stack.Screen  name='pets' component={pets}  options={{headerShown: false}} />
            <Stack.Screen  name='belinha' component={belinha}  options={{headerShown: false}} />

            <Stack.Screen  name='configuracao' component={configuracao}  options={{headerShown: false}} />
            <Stack.Screen  name='perfil' component={perfil}  options={{headerShown: false}} />
            <Stack.Screen  name='editarPerfil' component={editarPerfil}  options={{headerShown: false}} />
            <Stack.Screen  name='excluirPerfil' component={excluirPerfil} options={{headerShown: false}} />
            <Stack.Screen  name='amigos' component={amigos}  options={{headerShown: false}} />
            <Stack.Screen  name='contatarEmpresa' component={contatarEmpresa} options={{headerShown: false}} />
            <Stack.Screen  name='maisInformacoes' component={maisInformacoes} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
