import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./RecipeDetailScreen.styles";
import { getAllIngredients } from "../../constants/Constants";

export default function MovieDetailScreen({ navigation, route }) {
  // TODO: Recieve the RecepieItem by destructuring route params.
  const RecepieItem = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>
          {RecepieItem.name}
        </Text>
        <Image style = {styles.poster} source = {{ uri: RecepieItem?.imageURL }}>
        </Image>
        <Text style = {styles.h4}>
          Ingredients: {"\n •"} {getAllIngredients(RecepieItem).join("\n •")}
        </Text>
        <Text style={styles.h4}>
          Instructions: {RecepieItem.steps}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
