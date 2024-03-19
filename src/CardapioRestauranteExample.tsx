import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    preco: string;
    descricao: string,
    image: any;
}

const dados: MenuItem[] = [
    {id: '1', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '2', nome: 'Hambúrguer', preco: 'R$25,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '3', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '4', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '5', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '6', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '7', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '8', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '9', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '10', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '11', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '12', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '13', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '14', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
    {id: '15', nome: 'Hambúrguer', preco: 'R$20,00', descricao: 'Pão de brioche, 2 carnes, alface, tomate, queijo, bacon', 
    image: require('./assets/imagens/h.png')},
];

const renderMenuItem = ({item}: {item: MenuItem}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <View style={styles.espacoDescricao}>
        <Image source={item.image} style={styles.imagemH}></Image>
        <Text style={styles.text}>{item.descricao}</Text>
        <Text style={styles.text}>{item.preco}</Text>
        </View>
    </TouchableOpacity>

);

function CardapioRestauranteExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ifood</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={dados}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
            <TouchableOpacity>
                    <Image source={require('./assets/imagens/i.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/ll.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/p.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/e.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
            </View>
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
        borderRadius: 15

    },
    header: {
        backgroundColor: '#4d663a',
        alignItems: 'center',
        paddingVertical: 10

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    imagemH: {
        height: 100,
        width: 100,
        
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        
    },
    espacoDescricao:{
        flexDirection: 'column',
        

    }
});

export default CardapioRestauranteExample;