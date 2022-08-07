//import { StatusBar } from 'expo-status-bar';

//IMPORTAÇÕES PARA A COMPOSIÇÃO DA PÁGINA:
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//IMPORTANDO ROTAS:
import Routes from './src/routes.jsx';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

