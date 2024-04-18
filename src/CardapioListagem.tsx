import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar, TextInput} from "react-native";
import * as Animatable from 'react-native-animatable';
interface Produtos {
    id: string;
    nome: string;
    preco: string;
    descricao: string,
    image: any;
}

function CardapioListagem(): React.JSX.Element {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://10.137.11.216:8000/api/produtos');
                setProdutos(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    

    const renderProdutoItem = ({ item }: { item: Produtos }) => (
        <View style={styles.item}>
            <Text style={styles.textNome}>{item.nome}</Text>
            <Text style={styles.text}>{item.descricao}</Text>
            <Text style={styles.textPreco}>{item.preco}</Text>
            <Image source={{ uri: item.image}} style={styles.imagemH} />
            <TouchableOpacity>
            <Image source={require('./assets/imagens/mais.png')} style={styles.maisImagem}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assets/imagens/subtracao.png')} style={styles.subtracaoImagem}></Image>
        </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#D2B48C'}></StatusBar>
            <Animatable.View  animation={'fadeInDown'} delay={30}  style={styles.header}>
                <Image source={require('./assets/imagens/hh.png')} style={styles.imagem}></Image>
                <Text style={styles.headerText}>FOOD KING</Text>
                <TouchableOpacity> 
                <Image source={require('./assets/imagens/mercado.png')} style={styles.carrinho}></Image>
                </TouchableOpacity>
            </Animatable.View>
            <View style={styles.alinhamentoPesquisa}>
                <TextInput style={styles.input} placeholder="Pesquisar" placeholderTextColor={'black'}/>
                <Image source={require('./assets/imagens/lupa.eudorio.png')} style={styles.lupa}></Image>
            </View>
            
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={produtos}
                    renderItem={renderProdutoItem}
                    keyExtractor={(item) => item.id}
                />
            
            <Animatable.View animation={'fadeInUp'} delay={30} style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/i.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/ll.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/p.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/cardapio.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98FB98'
    },
    item: {
        backgroundColor: '#D2B48C',
        padding: 20,
        marginBottom: 10,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#3CB371',
    },
    header: {
        backgroundColor: '#3CB371',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -40
    },
    imagemH: {
        height: 100,
        width: 100,
        marginTop: -110,
        marginLeft: 200

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#3CB371',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'justify',
        marginRight: 140,
    },
    maisImagem: {
        width: 30,
        height: 30,
        marginTop: 4
    },
    subtracaoImagem: {
        width: 25,
        height: 25,
        marginLeft: 30,
        marginTop: -27

    },
    textPreco: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 170,
        color: 'white',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: 0
    },
    imagem: {
        width: 50,
        height: 50,
        marginRight: 300,
        marginTop: -8
    },
    textNome: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'justify',
        marginRight: 40,
        textDecorationLine: 'underline',
        lineHeight: 25,
    },
    carrinho: {
        height: 30,
        width: 30,
        marginLeft: 330,
        marginTop: -30
    },
    alinhamentoPesquisa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: "90%",
    },
    input: {
        backgroundColor: '#D2B48C',
        width: '90%',
        height: 45,
        marginBottom: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        marginLeft: 35,
        marginTop: 2
    },
    lupa: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginLeft: 5
    },

});

export default CardapioListagem;
