// App.js is the entry point of our application.
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecepieBox from "./screens/RecepieBox/RecepieBox.main";
import RecipeDetailScreen from "./screens/RecipeDetailScreen/RecipeDetailScreen.main";
import HomeScreen from "./screens/HomeScreen/HomeScreen.main";
import Shop4Groceries from "./screens/Shop4GroceriesScreen/Shop4Groceries.main";
import MyPantry from "./screens/MyPantry/MyPantry.main";
/* TODO: 

  This app has three screens:
    (1) MovieListScreen
    (2) MovieDetailScreen
    (3) MovieFilterScreen

  Screens (1) and (2) are on the same navigation stack.
  Screen (3) is presented modally.

  This setup is identical to the setup in the React Navigation documentation.
  Read the example carefully to set up this app's screen heirarchy in a similar manner.

  https://reactnavigation.org/docs/modal */
const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name = "Pantry Pal" component = {HomeScreen}/>
        <Stack.Screen name = "Recipe Box" component = {RecepieBox}/>
        <Stack.Screen name = "My Pantry" component = {MyPantry}/>
        <Stack.Screen name = "Recipe" component = {RecipeDetailScreen}/>
        <Stack.Screen name = "Shop4Groceries" component = {Shop4Groceries}/>
      </Stack.Group>
    </Stack.Navigator>
</NavigationContainer>;
}