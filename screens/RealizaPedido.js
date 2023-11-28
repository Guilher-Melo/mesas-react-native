import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const RealizaPedido = ({ route, navigation }) => {
  const { cardapioItens } = route.params;

  const [pedido, setPedido] = useState([]);

  const toggleItem = (item) => {
    // Verifica se o item já está no pedido, se sim, remove, se não, adiciona
    const updatedPedido = pedido.includes(item)
      ? pedido.filter((pedidoItem) => pedidoItem !== item)
      : [...pedido, item];

    setPedido(updatedPedido);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Faça seu Pedido</Text>
      <ScrollView style={styles.opcoesContainer}>
        {cardapioItens.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.opcao, pedido.includes(item) && styles.opcaoSelecionada]}
            onPress={() => toggleItem(item)}
          >
            <Text style={pedido.includes(item) && styles.textoSelecionado}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

  
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('PedidoFeito')}>
        <Text style={styles.textoBotao}>Realizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
    textAlign: 'center'
  },
  opcoesContainer: {
    maxHeight: 200,
    marginBottom: 16,
  },
  opcao: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
    borderRadius: 5,
  },
  opcaoSelecionada: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  textoSelecionado: {
    color: '#fff',
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default RealizaPedido;
