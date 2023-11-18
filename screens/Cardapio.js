// Importações necessárias do React Native
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

// Componente funcional CardapioItem para exibir itens do cardápio
const CardapioItem = ({ nome, preco }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemNome}>{nome}</Text>
    <Text style={styles.itemPreco}>{preco}</Text>
  </View>
);

// Componente principal Cardapio
const Cardapio = () => (
  <View style={styles.container}>
    <Text style={styles.titulo}>Cardápio</Text>

    {/* Hambúrgueres */}
    <CardapioItem nome="Hambúrguer 1" preco="R$ 15,00" />
    <CardapioItem nome="Hambúrguer 2" preco="R$ 18,00" />
    <CardapioItem nome="Hambúrguer 3" preco="R$ 20,00" />
    <CardapioItem nome="Hambúrguer 4" preco="R$ 22,00" />
    <CardapioItem nome="Hambúrguer 5" preco="R$ 25,00" />

    {/* Bebidas */}
    <CardapioItem nome="Bebida 1" preco="R$ 5,00" />
    <CardapioItem nome="Bebida 2" preco="R$ 7,00" />
    <CardapioItem nome="Bebida 3" preco="R$ 10,00" />
  </View>
);

// Estilos usando StyleSheet
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
    marginBottom: 10,
    borderBottomWidth: 3,
  },
  itemNome: {
    fontSize: 18,
  },
  itemPreco: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cardapio;
