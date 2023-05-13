import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type CameraScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Camera'
>;
export type ModalScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Modal'
>;
