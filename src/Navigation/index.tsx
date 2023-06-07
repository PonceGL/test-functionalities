import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Navigators
// import {NavigatorStack} from './Stack';
import {NavigatorNativeStack} from './NativeStack';

export default function Navigator() {
  return (
    <NavigationContainer>
      <NavigatorNativeStack />
    </NavigationContainer>
  );
}
