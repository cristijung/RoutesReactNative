import React from 'react';
import { View, Text, Button } from 'react-native';

import styleContato from './styleContato.css.js'

export default function Contato({navigation}) {
  return(
    <View>
      <Text>Contato app</Text>
      <Button
        title="Home"
         onPress = { () =>
          navigation.navigate('Home')}
          />
    </View>
  );
}