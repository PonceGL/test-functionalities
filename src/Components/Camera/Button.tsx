import React from 'react';
import {StyleSheet, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {handleCamera} from '../../util/handleCamera';

const Button = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      onPress={() => handleCamera()}
      style={[
        styles.button,
        {
          backgroundColor: Colors.primary,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: !isDarkMode ? Colors.darker : Colors.lighter,
          },
        ]}>
        Button
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
  },
});
