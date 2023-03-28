import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableOpacity, ScrollView, } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function Bolochocolate() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Bolo de Chocolate </Text>
      <ScrollView>
      <Image
        style={estilo.banner}
        source={require('../assets/bolo_chocolate.jpg')}
      />

      <Text style={estilo.subtitle}>Ingredientes:</Text>
      <Text style={estilo.ingre}>• 2 xícaras de açúcar{'\n'}
      • 1 e 3/4 xícaras de farinha de trigo{'\n'}
      • 3/4 xícara de cacau em pó{'\n'}
      • 1 e 1/2 colher de chá de bicarbonato de sódio{'\n'}
      • 1 colher de chá de sal{'\n'}
      • 2 ovos{'\n'}
      • 1 xícara de leite{'\n'}
      • 1/2 xícara de óleo vegetal{'\n'}
      • 2 colheres de chá de essência de baunilha{'\n'}
      • 1 xícara de água quente</Text>
      
      <Text style={estilo.subtitle}>Modo de Preparo:</Text>
      <Text style={estilo.ingre}>
        1. Pré-aqueça o forno a 180°C. Unte e enfarinhe duas formas redondas de 23cm.{'\n'}{'\n'}
        2. Em uma tigela grande, misture o açúcar, a farinha, o cacau em pó, o bicarbonato de sódio e o sal.{'\n'}{'\n'}
        3. Adicione os ovos, o leite, o óleo e a baunilha. Bata em velocidade média por cerca de 2 minutos.{'\n'}{'\n'}
        4. Adicione a água quente e misture até ficar homogêneo (a massa será líquida).{'\n'}{'\n'}
        5. Divida a massa entre as duas formas preparadas.{'\n'}{'\n'}
        6. Asse por cerca de 30-35 minutos, ou até que um palito inserido no centro do bolo saia limpo.{'\n'}{'\n'}
        7. Deixe esfriar nas formas por 10 minutos, depois remova os bolos das formas e deixe esfriar completamente em uma grade.{'\n'}{'\n'}
      </Text>
      </ScrollView>
    </View>
  );
}
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#f7d1b0',
    alignItems: 'left',
    justifyContent: 'center',
  },

  titulo: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#431f19',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    width: '100%',
  },

  banner: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 30
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    alignSelf: 'flex-start',
    fontFamily: 'RobotoCondensed_700Bold',
  },

    ingre: {
    fontSize: 15,
    margin: 15,
    alignSelf: 'flex-start',
    fontFamily: 'RobotoCondensed_400Regular',
  },
});