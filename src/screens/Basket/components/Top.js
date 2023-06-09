import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../../../components/CustomText';
import topImage from '../../../../assets/top.png';

const width = Dimensions.get('screen').width;

export default function Top({ title }) {
  return (
    <>
      <Image source={topImage} style={styles.top} />
      <CustomText style={styles.title}>{title}</CustomText>
    </>
  )
};

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
  }
})