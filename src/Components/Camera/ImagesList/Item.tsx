import React from 'react';

import {Image, StyleSheet} from 'react-native';
import {Image as ImageType} from '../../../interfaces/Assests';

interface Props extends ImageType {}

const Item = ({fileName, uri}: Props) => {
  return (
    <Image
      source={{
        uri: uri,
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
