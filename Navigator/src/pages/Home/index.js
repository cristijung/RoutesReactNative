
import React from 'react';
import { View, Text, Button } from 'react-native';

import 'styleHome.css';


export default function Home({navigation}) {
 return (
  <View>
   <Text style={{fontSize: 16, color:'#FF1493'}}>Home</Text>
   <Button
     title = "Sobre"
     onPress = { () =>
       navigation.navigate('Sobre')}
       />
  </View>
 );
}