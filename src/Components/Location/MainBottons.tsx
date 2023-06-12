import React, {Dispatch, SetStateAction} from 'react';
import {Position} from '../../interfaces/Position';
import {LocationValues} from '../../interfaces/ResultLocationValues';

import {getCurrentPosition} from '../../util/location/getCurrentPosition';
import {transformResponse} from '../../util/transformResponse';

import {StyleSheet, View} from 'react-native';
import SimpleButton from '../../Common/SimpleButton';

interface Props {
  setPosition: Dispatch<SetStateAction<Position | null>>;
  setLocationValues: Dispatch<SetStateAction<LocationValues[]>>;
}

const MainBottons = ({setPosition, setLocationValues}: Props): JSX.Element => {
  const getPosition = async () => {
    try {
      const posicion = await getCurrentPosition();
      if (posicion) {
        const {latitude, longitude} = posicion.coords;
        setPosition({
          latitude,
          longitude,
        });
        const transformedData = transformResponse(posicion);
        setLocationValues(transformedData);
      }
    } catch (error) {
      console.log('====================================');
      console.log('error');
      console.log(error);
      console.log('====================================');
    }
  };
  return (
    <View style={styles.content}>
      <SimpleButton text="Current Position" action={getPosition} />
      <SimpleButton />
    </View>
  );
};

export default MainBottons;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
