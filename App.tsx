/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/screens/Details";
import Home from "./src/screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  const options = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="`" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
