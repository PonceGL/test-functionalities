import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../interfaces/RootStackParamList';

// Screens
import Home from '../Screens/Home';
import Camera from '../Screens/Camera';
import Modal from '../Screens/Modal';
import Location from '../Screens/Location';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NavigatorNativeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={{
          presentation: 'modal', // modal
        }}
      />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}
