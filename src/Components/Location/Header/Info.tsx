import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Info = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = !isDarkMode ? Colors.darker : Colors.lighter;
  return (
    <View style={styles.content}>
      <Text
        style={{
          color: textColor,
        }}>
        Location
      </Text>
      <Text
        style={{
          color: textColor,
        }}>
        god
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
