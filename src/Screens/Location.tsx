import React, {useState} from 'react';

import {Position} from '../interfaces/Position';
import {LocationValues} from '../interfaces/ResultLocationValues';

import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  StatusBar,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../Components/Location/Header';
import Footer from '../Components/Location/Footer';
import MainBottons from '../Components/Location/MainBottons';
import ListData from '../Components/Location/ListData';

const Location = (): JSX.Element => {
  const [position, setPosition] = useState<Position | null>(null);
  const [locationValues, setLocationValues] = useState<LocationValues[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.content, backgroundStyle]}>
      <StatusBar
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Header />
      {locationValues.length > 0 && <ListData items={locationValues} />}
      <Footer>
        <MainBottons
          setPosition={setPosition}
          setLocationValues={setLocationValues}
        />
      </Footer>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 24,
  },
});
