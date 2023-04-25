import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CustomText from '../../../components/CustomText';

export default function Details({ basketName, farmLogo, farmName, description, price }) {
  return(
      <>
        <CustomText style={styles.basketName}>{ basketName }</CustomText>
        <View style={styles.farm}>
          <Image source={farmLogo} style={styles.farmImage} />
          <CustomText style={styles.farmName}>{ farmName }</CustomText>
        </View>
        <CustomText style={styles.description}>
          { description }
        </CustomText>
        <CustomText style={styles.price}>{ price }</CustomText>
      </>      
  )
};

const styles = StyleSheet.create({
  basketName: {
    color: '#464646',
    fontSize:26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  farm: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12
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