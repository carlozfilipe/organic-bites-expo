import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import CustomText from './CustomText';

export default function Button({ text, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <CustomText style={styles.textButton}>{ text }</CustomText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 8,
  },
  textButton: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  }
});