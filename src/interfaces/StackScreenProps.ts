import type {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamList';

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type CameraScreenProps = StackScreenProps<RootStackParamList, 'Camera'>;
export type ModalScreenProps = StackScreenProps<RootStackParamList, 'Modal'>;
