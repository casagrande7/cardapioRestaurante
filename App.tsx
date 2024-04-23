import React from "react";
import CardapioRestauranteExample from "./src/CardapioRestauranteExample";
import CadastroProduto from "./src/screens/CadastroProduto";
import CadastroCliente from "./src/screens/CadastroCliente";
import CardapioListagem from "./src/CardapioListagem";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CardapioListagem' component={CardapioListagem}
        options={{headerShown: false}}/>
        <Stack.Screen name='CardapioRestauranteExample' component={CardapioRestauranteExample}
        options={{headerShown: false}}/>
        <Stack.Screen name='CadastroCliente' component={CadastroCliente}
        options={{headerShown: false}}/>
        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;