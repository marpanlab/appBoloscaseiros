import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableOpacity, ScrollView, } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/dev';

export default function Bolofuba() {
    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Bolo de Fubá </Text>
      <ScrollView>
      <Image
        style={estilo.banner}
        source={require('../assets/bolo-de-fuba.jpg')}
      />

      <Text style={estilo.subtitle}>Ingredientes:</Text>
      <Text style={estilo.ingre}>• 2 xícaras de açúcar{'\n'}
      • 1 xícara de farinha de trigo{'\n'}
      • 2 xícaras de fubá{'\n'}
      • 1 colher de sopa de fermento em pó{'\n'}
      • 3 ovos{'\n'}
      • 1 xícara de leite{'\n'}
      • 1 xícara de óleo vegetal{'\n'}
      • 1 colher de chá de erva-doce (opcional)</Text>
      
      <Text style={estilo.subtitle}>Modo de Preparo:</Text>
      <Text style={estilo.ingre}>
        1. Pré-aqueça o forno a 180°C. Unte uma forma com furo no meio com margarina e polvilhe com fubá.{'\n'}{'\n'}
        2. Em uma tigela grande, misture o açúcar e os ovos até obter um creme homogêneo.{'\n'}{'\n'}
        3. Adicione o fubá e a farinha de trigo e misture bem.{'\n'}{'\n'}
        4. Acrescente o óleo e o leite e misture novamente até que a massa fique homogênea.{'\n'}{'\n'}
        5. Adicione o fermento em pó e a erva-doce (se estiver usando) e misture delicadamente.{'\n'}{'\n'}
        6. Despeje a massa na forma preparada e leve ao forno por cerca de 40 minutos, ou até que um palito inserido no centro do bolo saia limpo.{'\n'}{'\n'}
        7. Retire do forno e deixe esfriar antes de servir.{'\n'}{'\n'}
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
    backgroundColor: '#eaaf57',
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