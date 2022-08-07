import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function Check_Box (props){
  return(
    <View>
      <Checkbox.Item className={'checkBox'}
        style={styles.checkbox} label="Ao confirmar concorda que  guardemos seus dados." 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    marginTop: '5%',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '15%',
  }
})

/*import React, { useState } from 'react';
import { CheckBox, Icon } from 'react-native-elements';

function CheckboxComponent(){

  const [check1, setCheck1] = useState(false);

  return (
    <View>
      <CheckBox
        center
        title="Click Here"
        checked={check1} 
        onPress={() => setCheck1(!check1)}
      />
    </View>
  );
}
export default  CheckboxComponent;*/


