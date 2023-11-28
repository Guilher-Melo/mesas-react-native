import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MesasDistribuidas from "./components/MesasDistribuidas";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cardapio from "./screens/Cardapio";
import RealizaPedido from "./screens/RealizaPedido";
import PedidoFeito from "./screens/PedidoFeito";
import { Home } from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MesasDistribuidas"
          component={MesasDistribuidas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cardapio"
          component={Cardapio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RealizaPedido"
          component={RealizaPedido}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PedidoFeito"
          component={PedidoFeito}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
