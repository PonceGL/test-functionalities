import {GeolocationResponse} from '@react-native-community/geolocation';
import {LocationValues} from '../interfaces/ResultLocationValues';

export const transformResponse = (
  response: GeolocationResponse,
): LocationValues[] => {
  const {coords, extras} = response;

  const coordsData = Object.keys(coords).map(key => ({
    key,
    value: coords[key],
  }));

  let extrasData = [];

  if (extras) {
    extrasData = Object.keys(extras).map(key => ({
      key: key,
      value: `${extras[key]} - extras`,
    }));
  }

  return [...coordsData, ...extrasData];
};
