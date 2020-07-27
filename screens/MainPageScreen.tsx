import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomePageScreen from './HomePageScreen';
import SettingsPageScreen from './SettingsPageScreen';

const Tab = createBottomTabNavigator();

const MainPageScreen: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DE0160',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomePageScreen} />
      <Tab.Screen name="Settings" component={SettingsPageScreen} />
    </Tab.Navigator>
  );
};

export default MainPageScreen;
