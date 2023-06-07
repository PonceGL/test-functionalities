import {
  launchCamera,
  ImagePickerResponse,
  ErrorCode,
  CameraOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Alert, PermissionsAndroid, Platform, ToastAndroid} from 'react-native';
import {Image} from '../interfaces/Assests';

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

const options: CameraOptions = {
  mediaType: 'photo',
  includeExtra: true,
  quality: 0.9,
  maxWidth: 2000,
  maxHeight: 2000,
  saveToPhotos: false,
  cameraType: 'back',
  presentationStyle: 'fullScreen',
  includeBase64: true,
};

const handleError = (err: ErrorCode | unknown) => {
  console.log('Error on launchCamera');
  if (err === 'permission') {
    Alert.alert('Permiso de la cámara fue denegado por el usuario.');
  }

  if (err === 'camera_unavailable') {
    Alert.alert('La camara no está disponible.');
  }

  if (err === 'others') {
    Alert.alert('Ocurrió un error.');
  }

  throw new Error(String(err) || 'others');
};

const handleSucces = (response: ImagePickerResponse) => {
  if (response.errorCode === 'permission') {
    handleError(response.errorCode);
  }

  if (!response?.didCancel) {
    if (Array.isArray(response.assets)) {
      return response.assets;
    } else {
      handleError(response.errorCode || 'others');
    }
  }
};

export async function handleCamera(): Promise<Image[] | undefined> {
  if (Platform.OS === 'android') {
    const granted = await requestPermission();

    if (!granted) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(
          'Permiso de la cámara fue denegado por el usuario.',
          ToastAndroid.LONG,
        );
      }
    }
  }

  try {
    const result = await launchCamera(options);

    const assets = handleSucces(result);
    return assets;
  } catch (e) {
    handleError(e);
  }
}

export async function handleGallery() {
  console.log('handleGallery');

  if (Platform.OS === 'android') {
    const granted = await requestPermission();

    if (!granted) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(
          'Permiso de galería fue denegado por el usuario.',
          ToastAndroid.LONG,
        );
      }
    }
  }

  try {
    const result = await launchImageLibrary(options);

    const assets = handleSucces(result);
    return assets;
  } catch (e) {
    handleError(e);
  }
}
