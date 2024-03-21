import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar, TextInput,} from "react-native";
import * as Animatable from 'react-native-animatable';
interface MenuItem {
    id: string;
    nome: string;
    preco: string;
    descricao: string,
    image: any;
}

const dados: MenuItem[] = [
    {
        id: '1', nome: 'Hambúrguer: X BACON', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon.',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '2', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '3', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '4', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '5', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '6', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '7', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '8', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '9', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '10', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '11', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '12', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '13', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '14', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
    {
        id: '15', nome: 'Hambúrguer: ', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon',
        image: require('./assets/imagens/h.png')
    },
];

const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textNome}>{item.nome}</Text>
        <Text style={styles.text}>{item.descricao}</Text>
        <Text style={styles.textPreco}>{item.preco}</Text>
        <Image source={item.image} style={styles.imagemH}></Image>
        <TouchableOpacity>
            <Image source={require('./assets/imagens/mais.png')} style={styles.maisImagem}></Image>
        </TouchableOpacity>
    </TouchableOpacity>

);

function CardapioRestauranteExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#D2B48C'}></StatusBar>
            <Animatable.View  animation={'fadeInDown'} delay={30} style={styles.header}>
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
                data={dados}
                renderItem={renderMenuItem}
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
        backgroundColor: 'black'
    },
    item: {
        backgroundColor: '#D2B48C',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
    },
    header: {
        backgroundColor: '#4d663a',
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
        backgroundColor: '#4d663a',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 12

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
    textMenu: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 240,
        marginTop: -27

    },
    imagemMenu: {
        marginLeft: 215,
        height: 20,
        width: 20,
        marginTop: -20
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
        marginBottom: 25,
        borderRadius: 10,
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
        marginLeft: 10

    }

});

export default CardapioRestauranteExample;