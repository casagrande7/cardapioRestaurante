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
            const response = await axios.post('http://10.137.11.216:8000/api/produtos', formData, {
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
                <Text style={styles.headerText}>Top Food</Text>
            </View>
            <View style={styles.form}>

                <TextInput style={styles.input}
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={setNome} />

                <TextInput style={styles.input}
                    placeholder="Preço"
                    value={preco}
                    onChangeText={setPreco} />

                <TextInput style={styles.input}
                    placeholder="Ingredientes"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline />
                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada}/> : null}
                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imagemButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imagemButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
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
        color: 'white'
    },
    form: {
        padding: 10,
        
    },
    input: {
        height: 40,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        fontWeight: 'bold',
        marginTop: 10
    },
    imageButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 12
    },
    imagemButtonText: {
        color: '#3CB371',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 100,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#3CB371',
        fontWeight: 'bold'
    },
    footer: {
        paddingVertical: 50,
        backgroundColor: 'white',
        marginTop: 170,
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
   



});





export default CadastroProduto;