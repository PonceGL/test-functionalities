import React from 'react';
import {Platform} from 'react-native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../interfaces/RootStackParamList';

// Screens
import Home from '../Screens/Home';
import Camera from '../Screens/Camera';
import Modal from '../Screens/Modal';

const Stack = createStackNavigator<RootStackParamList>();

export function NavigatorStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.OS === 'ios' ? true : false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          cardOverlayEnabled: true,
          presentation: 'modal',
          // ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
}
