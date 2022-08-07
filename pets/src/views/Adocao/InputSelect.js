import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Modal, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const Select = ({options, onChangeSelect, text}) => {

    const [txt, setTxt] = useState(text);
    const [modalVisible, setModalVisible] = useState(false);

    function renderOption(item){
        return(
            <TouchableOpacity style={styles.optionContainer}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
	        <Text style={styles.txt} numberOfLines={1} > {txt} </Text>
            {/* precisa baixar o react native vector para usar icone */}
            <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                
            <SafeAreaView>   
                <View style={styles.headerModal}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                            {/* precisa baixar o react native vector para usar icone */}
                    </TouchableOpacity>

                    <Text style={styles.modalTitle}>{text}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                            {/* precisa baixar o react native vector para usar icone */}
                    <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>

                <FlatList 
                    data={options}
                    keyExtractor={(item) => String(item.id)} renderItem={({item})=> renderOption(item)}
                />
            </SafeAreaView>

            </Modal>
        </TouchableOpacity>
    );

};


const styles= StyleSheet.create({
	container:{
		height:50,
		backgroundColor: 'white',
		paddingHorizontal: 10,
		marginHorizontal:20,
		borderRadius: 8,
		fontSize: 18,
		borderColor: 'grey',
		borderWidth: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
	},

    txt:{
        color: 'black',
        fontSize: 16,
        width: width - 86,
    },

    headerModal:{
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomColor:'#DDD',
        borderBottomWidth: 1,
    },

    modalTitle:{
        fontSize:20
    }
});


// onRequestClose -> usado para que o modal feche quando o usuário clicar no botão de voltar do celular


export default Select;

