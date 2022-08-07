//Importações para a composição de parte do MODAL1 da página de perfil do usuário:
import React, { useState } from "react";
import {Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity, TextInput } from "react-native";


//Importações para a composição da parte MODAL1 da página de perfil do usuário:
export default function Modal1 () {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='none'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} >Escreva sua bio aqui:</Text>
            <TextInput style={styles.modalInput} multiline={true} numberOfLines={5}/>
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
				<Image style={styles.img3} source={require('../img/seta1.png')}/>
      </TouchableOpacity>
    </View>
  );
};

//Estilização do Modal1:
const styles = StyleSheet.create({
  centeredView: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: '35%',
    marginBottom: 200,
  },
  modalView: {
    backgroundColor: "white",
    height:'70%',
    width: '100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  img3: {
		width: 40, 
		height:40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: '50%'
	},
  buttonOpen: {
    width: 40,
    height: 40
  },
  buttonClose: {
    backgroundColor: "#30B898",
    marginTop: '5%',
    fontSize: 18,
    borderRadius: '20%',
    padding: 15,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    marginTop: '5%',
  },
  modalInput: {
    marginTop: '5%',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    width: '70%'
  },
});

