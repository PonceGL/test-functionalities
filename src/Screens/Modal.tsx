import React from 'react';
import {ModalScreenProps} from '../interfaces/StackScreenProps';
import {Colors} from 'react-native/Libraries/NewAppScreen';

//Components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

const Modal = ({navigation}: ModalScreenProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.content, backgroundStyle]}>
      <View>
        <Text
          style={{
            color: !isDarkMode ? Colors.darker : Colors.lighter,
          }}>
          Modal
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    borderWidth: 2,
    borderColor: '#ff00ff',
  },
});
