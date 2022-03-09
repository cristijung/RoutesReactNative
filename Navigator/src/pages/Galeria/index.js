import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    useColorScheme,
    SafeAreaView,
    ScrollView
 } from 'react-native';

 //é possível usar frameworks para estilização
//Material-UI, Materialize, Bootstrap

export default function Galeria({navigation}) {
    const isDarkMode = useColorScheme() == 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

 return (
     <SafeAreaView>
         <ScrollView
            contentInsetAdjustmentBehavior = 'automatic'
         >
        <View>        
        <Text className="styles.sectionConatiner">Galeria</Text>
        <Button
            title = "Voltar ao Início"
            onPress = { () =>
            navigation.navigate('Home')}
            />
        </View>
        </ScrollView>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    sectionContainer: {
        highlight: '700',
        alignItems: 'center',
    },
    
    primaryTitle: {
        fontSize: 24,
        marginTop: 10,
        fontWeight: '400',
    },

    description: {
        fontSize: 16,
        color: '#ccc',
    }
})