import {React, useState, useEffect} from 'react';
import { Image, View, TouchableOpacity, } from 'react-native';
import { styles } from "./Shop4GroceriesStyles.style";

const ScreenComponent = () => {
    const [checked, setChecked] = useState(false);
      
    const toggleCheckbox = () => {
        setChecked(!checked);
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Replace 'require('./path/to/your/image.png')' with the actual path to your PNG image */}
      <Image 
        source={require('../../assets/GroceryList.png')} 
        style={{ width: 1000, height: 857 }} 
        resizeMode="contain" 
      />
     
       

    </View>
  );
}


export default ScreenComponent;