import React from 'react';

import {Image, StyleSheet} from 'react-native';
import {Image as ImageType} from '../../../interfaces/Assests';

interface Props extends ImageType {}

const Item = ({fileName, base64}: Props) => {
  return (
    <Image
      source={{
        uri: `data:image/png;base64,${base64}}`,
      }}
      alt={fileName}
      resizeMode="cover"
      style={styles.img}
      onError={({nativeEvent: {error}}) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }}
    />
  );
};

export default Item;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
});
