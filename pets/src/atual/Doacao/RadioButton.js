import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    marginTop:'20%',
    justifyContent: "center"
  },
 

  // baseAmarela:{
  //   width: 70,
  //   backgroundColor: 'yellow',
  //   marginTop:'20%',
  // }
});