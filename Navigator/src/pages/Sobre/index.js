import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

import styleSobre from './styleSobre.css.js'

export default function Sobre({navigation}) {
  return(
    <View>
      <Text style={{fontSize: 16, color:'#FF1493'}}>Sobre o app</Text>
      <Image 
        source={require('.../public/Assets/Img/gato.png')}
        style={{ 
            width: 200, 
            height:200, 
            paddingTop:20 
        }}
        />
      <TextInput
            style={{ 
                height: 40, 
                borderColor: '#836FFF', 
                borderWidth: 1, 
                borderRadius: 5
            }}
       />
      <Button
        title = "Contato"
        onPress = { () =>
          navigation.navigate('Contato')}
          />
      <Button
        title = "Mudar Texto"
        onPress = { () =>
          navigation.setOptions({ title: 'About'})}
         />

    </View>
  );
}