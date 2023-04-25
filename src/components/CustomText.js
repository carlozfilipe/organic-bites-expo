import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText({ children, style }) {
  let standardStyle = styles.text;

  if (style?.fontWeight === 'bold') {
    standardStyle = styles.textBold;
  }

  return <Text style={[style, standardStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PoppinsRegular',
    fontWeight: 'normal',
  },
  textBold: {
    fontFamily: 'PoppinsBold',
    fontWeight: 'normal',
  }
});
