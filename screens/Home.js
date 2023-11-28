import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Hamburgueria do Zé</Text>
            <Text style={styles.subtexto}>Veja as mesas disponíveis e faça o pedido!</Text>
            <View style={styles.icon}>
                <Ionicons name="md-restaurant-outline" size={74} color="white" />
            </View>
            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate("MesasDistribuidas")}>
                    <Text style={styles.textoBotao}>Veja as mesas disponíveis</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: 'black'
    },
    texto: {
        fontSize: 23,
        marginBottom: 10,
        marginTop: 80,
        textAlign: "center",
        color: 'white',
        borderBottomColor: 'lightgray',
        borderWidth: 2,
        fontWeight: "bold"
    },
    subtexto: {
        color: 'white',
        fontSize: 16
    },
    icon: {
        marginTop: 120,
    },
    botao: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
      },
      textoBotao: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 16
      },
      areaBotao: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150
      }
})