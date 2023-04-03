import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '../Components/Section';

const Home = ({navigation}): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.content, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Cámara">
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              <Text
                style={{
                  color: !isDarkMode ? Colors.darker : Colors.lighter,
                }}>
                En esta sección vamos a aprobar la cámara y sus resultados
              </Text>
            </TouchableOpacity>
          </Section>
          <Section title="See Your Changes"></Section>
          <Section title="Debug"></Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
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
