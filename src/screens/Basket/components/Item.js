import React from 'react';

import CustomText from '../../../components/CustomText';
import { Image, View, StyleSheet } from 'react-native';

export default function Item({ item: { name, image } }) {

  return <View key={name} style={styles.item}>
    <Image source={image} style={styles.image} />
    <CustomText style={styles.name}> { name } </CustomText>
  </View>;
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    marginHorizontal: 16
  },
  image: {
    width: 46,
    height: 46
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 10,
    color: '#464646'
  }
});