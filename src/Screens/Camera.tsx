import React, {useEffect} from 'react';
// import {CameraScreenProps} from '../interfaces/StackScreenProps';

import {
  BackHandler,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Section from '../Components/Section';
import CameraButton from '../Components/Camera/Button';
import GalleryButton from '../Components/Gallery/Button';

const Camera = (): JSX.Element => {
  // const Camera = ({navigation}: CameraScreenProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const backAction = () => {
  //   if (navigation.canGoBack()) {
  //     navigation.goBack();
  //   } else {
  //     navigation.navigate('Home');
  //   }

  //   return true;
  // };

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={[styles.content, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />
      <Section title="Cámara">
        En esta sección vamos a aprobar la cámara y sus resultados
      </Section>
      <View style={styles.buttonContainer}>
        <CameraButton />
      </View>
      <Section title="Galería">
        En esta sección vamos a aprobar la galería y sus resultados
      </Section>
      <View style={styles.buttonContainer}>
        <GalleryButton />
      </View>
    </SafeAreaView>
  );
};

export default Camera;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 24,
  },
});
