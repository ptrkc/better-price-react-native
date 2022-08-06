import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WeightScreen from './screens/WeightScreen';
import VolumeScreen from './screens/VolumeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let icon;
            if (route.name === 'Weight') {
              icon = '⚖️';
            } else if (route.name === 'Volume') {
              icon = '🍺';
            }
            return <Text>{icon}</Text>;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen name="Weight" component={WeightScreen} />
        <Tab.Screen name="Volume" component={VolumeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
