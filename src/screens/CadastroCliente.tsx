import axios from "axios";
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
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
    const [errors, setErrors] = useState<string>("");

    const validateForm = () => {
        const newErrors: any = {};
    
        if (!nome) {
          newErrors.nome = "O campo nome é obrigatório";
        }
    
        if (!email) {
          newErrors.email = "O campo e-mail é obrigatório";
        }
    
        if (!endereco) {
          newErrors.endereco = "O campo endereço é obrigatório";
        }
    
        if (!telefone) {
          newErrors.telefone = "O campo telefone é obrigatório";
        }
    
        if (!password) {
          newErrors.password = "O campo senha é obrigatório";
        }
    
        if (!cpf) {
          newErrors.cpf = "O campo CPF é obrigatório";
        }
    
        if (!Image) {
          newErrors.imagem = "Por favor, selecione uma imagem";
        }
    
        setErrors(newErrors);
    
        return !Object.keys(newErrors).length;
      };
    

    const cadastrarClientes = async () => {
        if (validateForm()){    
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
            console.log(response)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors){
                setErrors(error.response.data.errors);
            } else{
                console.log(error);
            }
        }
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
                <TouchableOpacity onPress={abrirCamera}>
                    {foto ? <Image source={{ uri: foto }} style={styles.imagem} /> :
                        <Image source={require('./imagens/p.png')} style={styles.imagem} />}

                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={selecionarImagem}>
                <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome:"
                    placeholderTextColor={'white'}
                    value={nome}
                    onChangeText={setNome}
                />
                {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
                
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="E-mail:"
                    placeholderTextColor={'white'}
                    value={email}
                    onChangeText={setEmail}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
               
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="CPF:"
                    placeholderTextColor={'white'}
                    value={cpf}
                    onChangeText={setCpf}
                />
                {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}
                
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Endereço:"
                    placeholderTextColor={'white'}
                    value={endereco}
                    onChangeText={setEndereco}
                />
                {errors.endereco && <Text style={styles.errorText}>{errors.endereco}</Text>}
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Telefone:"
                    placeholderTextColor={'white'}
                    value={telefone}
                    onChangeText={setTelefone}
                />
                {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Password:"
                    placeholderTextColor={'white'}
                    value={password}
                    onChangeText={setPassword}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                
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
        marginTop: 80,
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
        marginTop: 32,
        fontWeight: 'bold',
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#fff',
        color: 'white',
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10
    },
    imagem: {
        height: 100,
        width: 100,
        marginTop: -60,
        marginRight: 15,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#3CB371'
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
    },
    errorText: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black'
    },

})

export default CadastroClienteExample;