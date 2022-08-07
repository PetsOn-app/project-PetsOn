import React, { Component } from 'react';
import { View, StyleSheet, Modal, Button, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class ButtonFloat extends Component {

    constructor(props){
      super(props);
      this.state = {isVisible: false};
    }
  
    render () {
      return(
        <View style={styles.container}>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              this.setState({ isVisible: false });
            }}
          >
  
            
            <View style={styles.modal}>
              <TouchableOpacity onPress={() => {
                  this.setState({ isVisible: false });
                }}>
                <Image
                    source={{
                    uri:
                        'https://chi01pap001files.storage.live.com/y4mOwg5MbmpzlFADh_KsLpMaanrXA07Rfz8cmFPBKXMslbydvJy3tgtG3RUNksy63a4eGt2kHSFbFYdDI2JaJBOjobspxetYz8i2OMsHp-1kLyVFAaZoqWV2TaGL2a-VRgxWwpMLIUJqEk2Dg0WxTZu136oixKsL85NqzpSP5WvyayWAbh3YVu2R5imkK4Qhtkv?width=49&height=49&cropmode=none',
                    }}
                    style={styles.buttonBack}
                />
              </TouchableOpacity>

              <Text value="username" style={styles.username}>usuario_padrao</Text>
              <TextInput style={styles.inserirImage}></TextInput>

              <TouchableOpacity
                onPress={() => {
                  this.setState({ isVisible: false });
                }}
                style={styles.buttonPubli}
              >
                <Text>Publicar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
  
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.setState({ isVisible: true });
            }}
            style={styles.button}>
            <Image
                source={{
                uri:
                    'https://chi01pap001files.storage.live.com/y4mwdJKdpi11VLM-dP6_e0zF6-fdudBSsEyZr9nhrnbv69Zpk8zlA6biQ9XZewBYe_kwKz5IwHIJR_TyGYeJh_WPFzfiLgNJ7HdlAHvMja7w0bgMG6k9m886nkUN0ayDjGfnv58Y65tv-9ymSCDo2_V4wdsImdX9VrSz8mm_oG41aWw9J3V2GLSiTkY89K-CoNJ?width=70&height=70&cropmode=none',
                }}
                style={styles.flutuando}
            />
            </TouchableOpacity>
          
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    modal: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: '#00000',
      padding: 20,
    },
    text: {
      color: '#000000',
      marginTop: 10,
    },
    username:{
      marginBottom:'3%',
		marginTop:'5%',
		fontSize: 22,
		fontWeight: 400,
		fontFamily: 'Ruda',
		marginLeft: '2%'
    },
    button: {
        position: 'fixed',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },

      flutuando: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
      },

      inserirImage:{
        borderWidth: 3,
        borderColor: '#fffff',
        height: '50%',
        marginTop: '3%',
      },

      buttonBack:{
        width: 50,
        height: 50,
        
      },

      buttonPubli:{
        fontSize: 22,
        textTransform: 'uppercase',
        color: '#1E5D63',
        borderRadius: 50,
        borderColor: '#04EABD',
        borderWidth: 2,
        marginTop: '8%',
        padding: 10,
        textAlign: 'center',
        margin:'2.5%',
      }
  });