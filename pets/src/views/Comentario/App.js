import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Header from './src/componentes/header';

export default function App() {
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <View style={styles.comentario}>
          <TextInput style={styles.input} placeholder='Digite um comentário...' maxLength={100}/>
          <TouchableOpacity>
            Publicar
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '5%'
  },
  comentario:{
    borderWidth: 2,
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
		justifyContent: 'space-between',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input:{
    fontSize: 18,
    width: '90%',
  }
});
