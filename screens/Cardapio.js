import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";


const CardapioItem = ({ nome, preco }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemNome}>{nome}</Text>
    <Text style={styles.itemPreco}>{preco}</Text>
  </View>
);


const Cardapio = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>Cardápio</Text>


    <CardapioItem nome="Hambúrguer cheddar" preco="R$ 15,00" />
    <CardapioItem nome="X-Egg" preco="R$ 18,00" />
    <CardapioItem nome="X-Egg bacon" preco="R$ 20,00" />


    <CardapioItem nome="Coca-Cola" preco="R$ 5,00" />
    <CardapioItem nome="Guaraná" preco="R$ 7,00" />


    <TouchableOpacity onPress={()=>navigation.navigate('RealizaPedido', { cardapioItens: ["Hambúrguer cheddar", "X-Egg", "X-Egg bacon", "Coca-Cola", "Guaraná"] })} style={styles.btn}>
      <Text style={styles.textoBotao}>Ir para o pedido</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 17,
    borderBottomWidth: 3,
  },
  itemNome: {
    fontSize: 18,
  },
  itemPreco: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn:{
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 7,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#fff',
    fontWeight:"bold"
  }
});

export default Cardapio;
