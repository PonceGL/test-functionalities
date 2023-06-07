import {ViewStyle} from 'react-native/types';
import {Image} from '../../interfaces/Assests';
import {Dispatch, SetStateAction} from 'react';

export interface Props {
  style: ViewStyle;
  images: Image[];
  setImages: Dispatch<SetStateAction<Image[]>>;
}
