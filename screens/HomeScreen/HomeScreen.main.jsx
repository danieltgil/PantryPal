import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { styles } from "./HomeScreenStyles.style";
// import { stylesGroceries } from "./Shop4GroceriesStyles.style"

export default function HomeScreen({navigation, route}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={require('../../assets/HomeScreen.png')} 
        style={{ width: 1000, height: 890 }} 
        resizeMode="contain" 
      />
       <TouchableOpacity style={styles.shop4GroceryButton} onPress={()=> navigation.navigate('Shop4Groceries')}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.recipeButton} onPress={()=> navigation.navigate('Recipe Box')}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pantryButton} onPress={()=> navigation.navigate('My Pantry')}>
      </TouchableOpacity>
    </View>
  );
}