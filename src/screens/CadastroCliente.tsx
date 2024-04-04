import React from "react";
import { StatusBar, StyleSheet, TextInput } from "react-native";
import { View } from "react-native-animatable";

interface Clientes{
    id: string,
    nome: string,
    telefone: string,
    endereco: string,
    email: string,
    password: string,
    foto: any
}


function CadastroClienteExample(): React.JSX.Element {
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}></StatusBar>
            <View style={styles.header}>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                placeholder="Nome"
                placeholderTextColor={'grey'}
                />

            </View>
            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3CB371'
    },
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 100,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 150
    },
    footer:{
       paddingVertical: 50,
       backgroundColor: 'white',
       marginTop: 100000,
       alignItems: 'center',
       borderTopRightRadius: 40,
       borderTopLeftRadius: 40,
       
    },
    form: {
        
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 50,
        fontWeight: 'bold',
        height: 50
        

    }
})

export default CadastroClienteExample;