import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

const Footer = ({children}: PropsWithChildren): JSX.Element => {
  return <View style={styles.content}>{children}</View>;
};

export default Footer;

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
});
