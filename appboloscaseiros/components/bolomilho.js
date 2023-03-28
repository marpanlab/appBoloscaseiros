import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableOpacity, ScrollView, } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function Bolomilho() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Bolo de Milho Cremoso </Text>
      <ScrollView>
      <Image
        style={estilo.banner}
        source={require('../assets/bolo-de-milho.png')}
      />

      <Text style={estilo.subtitle}>Ingredientes:</Text>
      <Text style={estilo.ingre}>• 1 lata de milho verde{'\n'}
      • 1 lata de açúcar (medida da lata de milho){'\n'}
      • 1 lata de fubá (medida da lata de milho){'\n'}
      • 2 colheres (sopa) de farinha de trigo{'\n'}
      • 4 ovos{'\n'}
      • 2 colheres (sopa) de coco ralado{'\n'}
      • 1 e 1/2 colher (chá) de fermento em pó{'\n'}
      </Text>
      
      <Text style={estilo.subtitle}>Modo de Preparo:</Text>
      <Text style={estilo.ingre}>
        1. Em um liquidificador, adicione o milho verde, o óleo, o açúcar, o fubá, os ovos e a farinha de trigo, depois bata até obter uma consistência cremosa.{'\n'}{'\n'}
        2. Depois, acrescente o coco ralado e o fermento, misture novamente.{'\n'}{'\n'}
        3. Despeje a massa em uma assadeira untada e leve para assar, em um forno com temperatura média a 180°C, preaquecido por 40 minutos.{'\n'}{'\n'}
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
    backgroundColor: '#eac014',
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