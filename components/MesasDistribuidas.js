import { View, StyleSheet, Text, StatusBar } from "react-native";
import Mesas from "../screens/Mesas";

export default function MesasDistribuidas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesas do Restaurante</Text>
      <View style={styles.ordem}>
        <Mesas numero={1} ocupado={true} navigation={navigation} />
        <Mesas numero={2} ocupado={true} navigation={navigation} />
      </View>
      <View style={styles.ordem}>
        <Mesas numero={3} ocupado={false} navigation={navigation} />
        <Mesas numero={4} ocupado={false} navigation={navigation} />
      </View>
      <View style={styles.ordem}>
        <Mesas numero={5} ocupado={false} navigation={navigation} />
        <Mesas numero={6} ocupado={false} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
    color: "white",
  },
  ordem: {
    display: "flex",
    flexDirection: "row",
  },
});
