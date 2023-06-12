import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomeProps} from '../interfaces/StackScreenProps';

//Components
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Modal,
  StatusBarStyle,
  Platform,
} from 'react-native';
import Section from '../Components/Section';
import MidleModal from '../Components/Modal/Midle';

const Home = ({navigation}: HomeProps): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  interface Return {
    color: string;
    style: StatusBarStyle;
  }
  const getStatusBarProperties = (): Return => {
    let color: string = Colors.black;
    let style: StatusBarStyle = 'light-content';

    if (modalVisible) {
      color = '#57C5B5';
      style = 'light-content';
    } else {
      if (isDarkMode) {
        color = Colors.black;
        style = 'light-content';
      } else {
        color = Colors.white;
        style = 'dark-content';
      }
    }

    return {color, style};
  };

  return (
    <>
      <Modal
        animationType="slide"
        hardwareAccelerated={true}
        transparent={Platform.OS === 'android'}
        visible={modalVisible}
        presentationStyle={
          Platform.OS === 'android' ? 'overFullScreen' : 'formSheet'
        }
        statusBarTranslucent={false}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <MidleModal setModalVisible={setModalVisible} />
      </Modal>
      <StatusBar
        animated={true}
        backgroundColor={getStatusBarProperties().color}
        barStyle={getStatusBarProperties().style}
        showHideTransition="slide"
        hidden={false}
      />
      <SafeAreaView style={[styles.content, backgroundStyle]}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          {/* <Header /> */}
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              <Section title="Cámara">
                <Text
                  style={{
                    color: !isDarkMode ? Colors.darker : Colors.lighter,
                  }}>
                  En esta sección vamos a aprobar la cámara y sus resultados
                </Text>
              </Section>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
              <Section title="ModalScreen">
                <Text
                  style={{
                    color: !isDarkMode ? Colors.darker : Colors.lighter,
                  }}>
                  Esta sección es para probar las diferentes formas de
                  presentation
                </Text>
              </Section>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Section title="Modal de React Native" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
});
