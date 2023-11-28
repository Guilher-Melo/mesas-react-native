import { View, Text, StyleSheet, StatusBar } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export default function PedidoFeito () {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                {`O seu pedido foi realizado com sucesso!`} 
            </Text>
            <AntDesign name="checkcircleo" size={84} color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        fontSize: 23,
        marginBottom: 10,
        textAlign: "center"
    }
})