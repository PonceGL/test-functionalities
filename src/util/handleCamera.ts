import {
  launchCamera,
  ImagePickerResponse,
  ErrorCode,
  CameraOptions,
} from 'react-native-image-picker';
import {PermissionsAndroid, Platform, ToastAndroid} from 'react-native';

const requestPermission = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(permission);
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return false;
      }
      return true;
    }
  } catch (err) {
    return false;
  }
};

const handleError = (err: ErrorCode | unknown) => {
  console.log('Error on launchCamera');
  console.log(err);
};

const handleSucces = async (response: ImagePickerResponse) => {
  console.log('====================================');
  console.log('handleSucces response');
  console.log(response);
  console.log('====================================');
};

export async function handleCamera() {
  if (Platform.OS === 'android') {
    const granted = await requestPermission();

    if (granted) {
      const options: CameraOptions = {
        mediaType: 'photo',
        includeExtra: true,
        quality: 0.9,
        maxWidth: 2000,
        maxHeight: 2000,
        saveToPhotos: false,
        cameraType: 'front',
        presentationStyle: 'fullScreen',
      };

      try {
        const result = await launchCamera(options);

        handleSucces(result);
      } catch (e) {
        handleError(e);
      }
    } else {
      ToastAndroid.show(
        'Permiso de localización denegado por el usuario. \n Se usará la ciudad del contrato!',
        ToastAndroid.LONG,
      );
    }
  }
}
