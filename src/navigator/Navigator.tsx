import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Character, Home} from '../screens';
import {Container} from '../components';
import {useAppContext} from '../context/useAppContext';

export type RootStackParams = {
  Home: undefined;
  Character: {id: number};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const {styleApp} = useAppContext();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: styleApp.bg100,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  );
};
