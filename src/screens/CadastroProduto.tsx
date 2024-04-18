import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProdutos = async () => {
        try {

            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('preco', preco);
            formData.append('ingredientes', ingredientes);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            console.log(formData)
            const response = await axios.post('http://10.137.11.216:8000/api/produtos/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)

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
                let imageUri = response.uri || response.assets?.[0].uri;
                setImagem(imageUri);
                console.log(imageUri);
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
                let imageUri = response.uri || response.assets?.[0].uri;
                setImagem(imageUri);
            }

        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#3CB371' barStyle='light-content'></StatusBar>
            <View style={styles.header}>
            <TouchableOpacity onPress={abrirCamera}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> :
                        <Image source={require('./imagens/pp.png')} style={styles.imagemSelecionada} />}
                </TouchableOpacity>
            </View>
            <TouchableOpacity  onPress={selecionarImagem}>
                    <Text style={styles.imagemButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
            <View style={styles.form}>

                <TextInput style={styles.input}
                    placeholder="Nome do Produto: "
                    value={nome}
                    onChangeText={setNome} 
                    placeholderTextColor={'white'}/>

                <TextInput style={styles.input}
                    placeholder="Preço:"
                    value={preco}
                    onChangeText={setPreco} 
                    placeholderTextColor={'white'}/>

                <TextInput style={styles.input}
                    placeholder="Ingredientes:"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    placeholderTextColor={'white'}
                    multiline />
                <TouchableOpacity style={styles.button} onPress={cadastrarProdutos}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
                </TouchableOpacity>

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
        borderBottomRightRadius: 150,
        height: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: ''
    },
    form: {
        padding: 10,
        
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        marginBottom: 10,
        borderColor: 'white',
        fontWeight: 'bold',
        marginTop: 45,
        marginLeft: 2,
        marginRight: 2
    },
    imageButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20
    },
    imagemButtonText: {
        color: '#3CB371',
        fontWeight: 'bold',
        marginTop: -40,
        marginLeft: 128
    },
    imagemSelecionada: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 100,
        marginTop: -70,
        marginRight:15,
        borderWidth: 5,
        borderColor: '#3CB371'
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        height: 40,
        width: 300,
        marginLeft: 35
    },
    buttonText: {
        color: '#3CB371',
        fontWeight: 'bold'
    },
    footer: {
        paddingVertical: 50,
        backgroundColor: 'white',
        marginTop: 145,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
   



});





export default CadastroProduto;