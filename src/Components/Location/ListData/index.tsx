import React from 'react';
import {LocationValues} from '../../../interfaces/ResultLocationValues';

import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  items: LocationValues[];
}

const ListData = ({items}: Props): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = !isDarkMode ? Colors.darker : Colors.lighter;
  return (
    <View style={styles.content}>
      {items.map(({key, value}) => (
        <Text
          key={key}
          style={{
            color: textColor,
          }}>
          {key} = {value}
        </Text>
      ))}
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
});
