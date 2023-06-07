import React from 'react';
import {Props} from './simpleProps';

// Components
import {View} from 'react-native';
import Section from '../Section';
import SimpleButton from '../SimpleButton';
import {handleGallery} from '../../util/handleCamera';

const Gallery = ({style, images, setImages}: Props): JSX.Element => {
  const handlePhoto = async () => {
    const assets = await handleGallery();

    if (Array.isArray(assets)) {
      setImages([...images, ...assets]);
    }
  };
  return (
    <>
      <Section title="Galería">
        En esta sección vamos a aprobar la galería y sus resultados
      </Section>
      <View style={style}>
        <SimpleButton textButton="Select image" functionButton={handlePhoto} />
      </View>
    </>
  );
};

export default Gallery;
