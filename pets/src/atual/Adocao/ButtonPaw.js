import {StyleSheet, TouchableOpacity, Image, View } from 'react-native';

export default function Confirmar (){

  return(
    <View>
      <TouchableOpacity onPress='buttonConfirm' >
      <Image source={{
                    uri:'https://chi01pap001files.storage.live.com/y4mrUYrxCnGcVyctbN4fpF0cZVqDySmL3w_BISiBysVvC1Kiu08-uMo6BxRG3zD5rCgLiPhl_pq18TJdFgS8wEKaKs_TK71vknrDP4Mp6CT5Vb81oy-_GcxnVctk7m-0zlEibfHlk9vd5sujH6c8Q3nzYFo2L_ZtwvdSfGlEVHbmAmq-Bn4BGIlER73YKhGWkXl?width=71&height=70&cropmode=none' }}
                    style={styles.buttonPet}/>
      </TouchableOpacity>
    </View>
    )
  }



//Estilização
const styles = StyleSheet.create({
  buttonPet:{
    width: 50,
    height: 50
  }
})