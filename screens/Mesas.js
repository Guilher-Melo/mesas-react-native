import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Mesas({ ocupado, numero, navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={styles.mesas}
          onTouchEnd={
            () => ocupado ? navigation.navigate("PedidoFeito") : navigation.navigate("Cardapio")
          }
        >
          <Text style={styles.titulo_mesa}>Mesa {numero}</Text>
          <MaterialCommunityIcons
            name="table-furniture"
            size={32}
            color="black"
          />
        </View>
        <Text
          style={[
            styles.disponibilidade,
            ocupado ? styles.ocupado : styles.disponivel,
          ]}
        >
          {ocupado ? "Ocupado" : "Disponível"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "lightgray",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 7,
  },
  mesas: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
  },
  titulo_mesa: {
    fontSize: 23,
    marginRight: 12,
    textAlign: "center",
  },
  disponibilidade: {
    textAlign: "center",
  },
  ocupado: {
    color: "red",
    fontWeight: "bold",
  },
  disponivel: {
    color: "green",
    fontWeight: "bold",
  },
});
