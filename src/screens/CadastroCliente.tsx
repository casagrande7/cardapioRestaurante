import axios from "axios";
import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Image, View, Text } from "react-native-animatable";
import CadastroCliente from "./CadastroCliente";

interface Clientes {
    id: string,
    nome: string,
    telefone: string,
    endereco: string,
    email: string,
    password: string,
    foto: any
}


function CadastroClienteExample(): React.JSX.Element {
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [endereco, setEndereco] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [foto, setFoto] = useState<any>("");

    const cadastrarClientes = async () => {
        try {

            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('endereco', endereco);
            formData.append('telefone', telefone);
            formData.append('cpf', cpf);
            formData.append('password', password);
            formData.append('foto', {
                uri: foto,
                type: 'foto/jpeg',
                name: new Date() + '.jpg'
            });
           

            const response = await axios.post('http://10.137.11.216:8000/api/clientes/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error);
        }

    }


    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            masHeight: 2000,
            maxWidht: 2000
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let fotoUri = response.uri || response.assets?.[0].uri;
                setFoto(fotoUri);
                console.log(fotoUri);
            }
        });
    }

    const selecionarImagem = () => {

        console.log('gay');
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            masHeight: 2000,
            maxWidht: 2000
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let fotoUri = response.uri || response.assets?.[0].uri;
                setFoto(fotoUri);
            }

        });
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}></StatusBar>
            <View style={styles.header}>
                {foto ? <Image source={{ uri: foto }} style={styles.imagem} /> :
                    <Image source={require('./imagens/p.png')} style={styles.imagem} />}
            </View>
            <TouchableOpacity onPress={selecionarImagem}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor={'white'}
                    value={nome}
                    onChangeText={setNome}
                />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={'white'}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="CPF"
                    placeholderTextColor={'white'}
                    value={cpf}
                    onChangeText={setCpf}
                />

            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Endereço"
                    placeholderTextColor={'white'}
                    value={endereco}
                    onChangeText={setEndereco}
                />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Telefone"
                    placeholderTextColor={'white'}
                    value={telefone}
                    onChangeText={setTelefone}
                />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={'white'}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={cadastrarClientes}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>


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
        borderBottomRightRadius: 150,
        height: 10
    },
    footer: {
        paddingVertical: 50,
        backgroundColor: 'white',
        marginTop: 45,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,

    },
    form: {
        width: 360,
        marginLeft: 10,
        marginTop: -25,

    },
    input: {
        backgroundColor: 'transparent',
        
        marginTop: 40,
        fontWeight: 'bold',
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#fff',
        color:'white',
        paddingLeft:10,
        marginLeft:10,
        marginRight: 10
    },
    imagem: {
        height: 100,
        width: 100,
        marginTop: -60,
        marginRight: 15,
        borderRadius: 40
    },
    button: {
        backgroundColor: "white",
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 30,
        height: 50,
        width: 250,
        marginLeft: 65,
    },
    buttonText: {
        color: "#3CB371",
        fontWeight: "bold",
        textAlign: "center",
    },
    imageButtonText: {
        color: '#3CB371',
        fontWeight: 'bold',
        marginTop: -40,
        marginLeft: 125
    }

})

export default CadastroClienteExample;