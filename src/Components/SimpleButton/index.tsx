import React from 'react';
import {StyleSheet, Text, TouchableOpacity, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  textButton: string;
  functionButton: () => void;
}

const SimpleButton = ({textButton, functionButton}: Props): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      onPress={functionButton}
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
        {textButton}
      </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

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
