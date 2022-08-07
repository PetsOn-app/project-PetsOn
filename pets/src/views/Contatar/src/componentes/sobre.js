//Importações para a composição da parte Sobre da página de Contatar Empresa:
import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, Picker } from 'react-native';


//Exportação da função da página Sobre de Contatar Empresas:
export default function Sobre() {

    const [selectedValue, setSelectedValue] = useState();

    return (
        <View>
            <View style={styles.viewSelect}>
                <Text style={styles.text1}>Motivo</Text>
                <Picker
					selectedValue={selectedValue}
					style={styles.escolha}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					<Picker.Item label="Denúncia" value="denuncia" />
					<Picker.Item label="Ajuda" value="ajuda" />
					<Picker.Item label="Melhorias" value="melhoria" />
				</Picker>
            </View>

            <Image style={styles.img1} source={require('../img/carta.png')}/>

            <Text style={styles.text2}>Para</Text>
            <Picker
				selectedValue={selectedValue}
				style={styles.input1}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="petsOn.denuncia@hotmail.com" value="denuncia"/>
				<Picker.Item label="petsOn.ajuda@hotmail.com" value="ajuda" />
				<Picker.Item label="petsOn.melhoria@hotmail.com" value="melhoria" />
			</Picker>

            <Text style={styles.text2}>Assunto</Text>
            <TextInput style={styles.input2}/>

            <Text style={styles.text2}>Motivo</Text>
            <TextInput style={styles.input3} multiline={true} numberOfLines={7}/>

            <Text style={styles.text2}>Anexo</Text>
            <TextInput style={styles.input2}/>

            <View style={styles.viewBotao}>
                <TouchableOpacity style={styles.botao} onPress="">
                    <Image style={styles.img2} source={require('../img/voltar.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress="">
                    <Image style={styles.img2} source={require('../img/salvar.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};


//Estilização da página Sobre de Contatar Empresas:
const styles= StyleSheet.create({
    viewSelect:{
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        marginTop: '8%',
        paddingLeft: '10%',
        paddingRight: '10%'
    }, 
    text1:{
        fontSize: 20,
    },
    escolha:{ 
		height: 35, 
		width: 230,
	},
	img1:{
		width: 80,
		height: 80,
        alignSelf: 'center',
        marginTop: '10%'
	},
    text2:{
        fontSize: 20,
        marginLeft: '12%',
        marginTop: '7%'
    },
    input1:{
        height: 30,
        width: 290,
        borderBottomWidth: 2,
        borderBottomColor: 'Black',
        marginLeft: '12%',
        marginRight: '12%',
        paddingLeft: '2%',
        fontSize: 16,
        marginTop: '2%'
    },
    input2:{
        height: 30,
        width: 290,
        borderWidth: 2,
        borderColor: 'Black',
        marginLeft: '12%',
        marginRight: '12%',
        paddingLeft: '2%',
        fontSize: 16,
        marginTop: '3%',
        borderRadius: 5
    },
    input3:{
        height: 150,
        width: 290,
        borderWidth: 2,
        borderColor: 'Black',
        marginLeft: '12%',
        marginRight: '12%',
        paddingLeft: '2%',
        fontSize: 16,
        marginTop: '3%',
        borderRadius: 5
    },
    viewBotao:{
        flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '10%',
    },
    img2:{
		width: 30,
		height: 30,
	},
    botao:{
        borderWidth: 2,
        borderColor: 'Black',
        borderRadius: 30,
        padding: 10,
    },
   
});