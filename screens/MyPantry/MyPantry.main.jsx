import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { styles } from "./MyPantryStyles.styles";

export default function MyPantry({navigation, route}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={require('../../assets/MyPantry.png')} 
        style={{ width: 1000, height: 890 }} 
        resizeMode="contain" 
      />
    </View>
  );
}