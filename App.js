import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Basket from './src/screens/Basket';
import mock from './src/mocks/basket';

export default function App() {

  let [fontsLoaded] = useFonts({
    'PoppinsRegular': Poppins_400Regular,
    'PoppinsBold': Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <View />
  } else {
  return (
      <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
      </SafeAreaView>
    );
  }
}
