import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';

export const getCurrentPosition = (): Promise<GeolocationResponse> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (pos: GeolocationResponse) => {
        resolve(pos);
      },
      (error: GeolocationError) => {
        reject(new Error(JSON.stringify(error)));
      },
      {enableHighAccuracy: true, maximumAge: 0},
    );
  });
};
