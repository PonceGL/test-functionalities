import React from 'react';
import {Props} from './simpleProps';
import {handleCamera} from '../../util/handleCamera';

// Components
import {View} from 'react-native';
import Section from '../Section';
import SimpleButton from '../SimpleButton';

const Photo = ({style, images, setImages}: Props): JSX.Element => {
  const handlePhoto = async () => {
    const assets = await handleCamera();

    if (Array.isArray(assets)) {
      setImages([...images, ...assets]);
    }
  };

  return (
    <>
      <Section title="Cámara">
        En esta sección vamos a aprobar la cámara y sus resultados
      </Section>
      <View style={style}>
        <SimpleButton textButton="Take photo" functionButton={handlePhoto} />
      </View>
    </>
  );
};

export default Photo;
