import {
  launchCamera,
  ImagePickerResponse,
  ErrorCode,
  CameraOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Alert, PermissionsAndroid, Platform, ToastAndroid} from 'react-native';

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
};

const handleSucces = async (response: ImagePickerResponse) => {
  console.log('====================================');
  console.log('handleSucces');
  console.log('====================================');

  if (response.errorCode === 'permission') {
    handleError(response.errorCode);
  }

  if (!response.didCancel) {
    console.log('====================================');
    console.log('handleSucces response');
    console.log(response.assets);
    console.log('====================================');
  }
};

export async function handleCamera() {
  console.log('handleCamera');

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

    handleSucces(result);
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

    handleSucces(result);
  } catch (e) {
    handleError(e);
  }
}
