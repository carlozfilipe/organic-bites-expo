import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topImage from '../../assets/top.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Basket() {
  return (
    <>
      <Image source={topImage} style={styles.top} />
      <Text style={styles.title}>Detalhes da cesta</Text>
      <View style={styles.basket}>
        <Text style={styles.basketName}>Cesta de Verduras</Text>
        <View style={styles.farm}>
          <Image source={logo} style={styles.farmImage} />
          <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>
          Uma cesta com produtos selecionados
          cuidadosamente de fazenda direto para sua cozinha
        </Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  basketName: {
    color: '#464646',
    fontSize:26,
    lineHeight: 42,
    fontFamily: 'PoppinsBold'
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'PoppinsRegular'
  },
  description: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
});
