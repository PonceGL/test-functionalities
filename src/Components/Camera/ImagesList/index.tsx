import React from 'react';
import {Image} from '../../../interfaces/Assests';

// Components
import {FlatList, StyleSheet, View} from 'react-native';
import Item from './Item';

interface Props {
  images: Image[];
}

const ImagesList = ({images}: Props): JSX.Element => {
  return (
    <FlatList
      data={images}
      renderItem={({item}) => <Item {...item} />}
      keyExtractor={item => String(item.uri)}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default ImagesList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    paddingHorizontal: 24,
  },
  separator: {
    width: '100%',
    height: 10,
  },
});
