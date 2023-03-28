import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function Home(props) {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>As melhores Receitas de Bolo </Text>
      <Image style={estilo.banner} source={require('../assets/banner.jpeg')} />

      <ScrollView>
      <TouchableOpacity style={estilo.vitri} onPress={()=>{props.navigation.navigate('BoloChocolate')}}>
        <Text style={estilo.link}> Bolo de Chocolate </Text>
        <Image style={estilo.vitrine} source={require('../assets/bolo_choco.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={estilo.vitri} onPress={()=>{props.navigation.navigate('BoloFuba')}}>
        <Text style={estilo.link}> Bolo de Fubá </Text>
        <Image style={estilo.vitrine} source={require('../assets/bolo-fuba.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity style={estilo.vitri} onPress={()=>{props.navigation.navigate('BoloMilho')}}>
        <Text style={estilo.link}> Bolo de Milho </Text>
        <Image style={estilo.vitrine} source={require('../assets/bolo_milho.jpg')} />
      </TouchableOpacity>
      </ScrollView>

    </View>

  );
}
}

const estilo = StyleSheet.create({
    container: {
    backgroundColor: "#f7d1b0",
    height: '100%'
    },

    titulo: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 18,
    color: "white",
    backgroundColor: "#f16500",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft:15
  },

    banner: {
      width: '100%',
      height: 100,
      alignSelf: 'center',
    },

      vitrine: {
      width: '90%',
      height: 130,
      borderRadius: 30,
      alignSelf: 'center',
      margin: 10,
      position: 'absolute',
      zIndex: 0
    },
      vitri: {
      width: '100%',
      height: 100,
      alignSelf: 'center',
      margin: 30
    },
      link: {
      alignSelf: 'center',
      zIndex: 1,
      marginTop: 60,
      fontFamily: 'RobotoCondensed_700Bold',
      fontSize: 18,
      color: "white",

    }

});
