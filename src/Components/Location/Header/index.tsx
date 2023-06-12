import React from 'react';

import {StyleSheet, View} from 'react-native';
import Info from './Info';

const Header = () => {
  return (
    <View style={styles.header}>
      <Info />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
});
