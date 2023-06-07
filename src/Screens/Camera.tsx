import React, {useState} from 'react';
import {Image} from '../interfaces/Assests';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Photo from '../Components/Camera/Photo';
import ImagesList from '../Components/Camera/ImagesList';
import Gallery from '../Components/Camera/Gallery';

const Camera = (): JSX.Element => {
  const [images, setImages] = useState<Image[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.content, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />
      <Photo
        style={styles.buttonContainer}
        images={images}
        setImages={setImages}
      />
      <Gallery
        style={styles.buttonContainer}
        images={images}
        setImages={setImages}
      />
      {images.length > 0 && <ImagesList images={images} />}
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
