import React from 'react';
import {Pressable, StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type action = () => void;

interface Props {
  text?: string;
  action?: action;
}

const SimpleButton = ({
  text = 'SimpleButton',
  action = () => console.log('Pressable'),
}: Props): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.dark : Colors.light;
  const bgColor = isDarkMode ? Colors.light : Colors.dark;
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
        },
      ]}
      onPress={action}>
      <Text
        style={[
          styles.text,
          {
            color: textColor,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
