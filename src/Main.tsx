import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './Navigation/Navigation';

export default function Main() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
