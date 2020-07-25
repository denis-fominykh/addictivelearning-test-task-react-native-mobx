import 'mobx-react-lite/batchingForReactNative';
import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomePageScreen from './screens/WelcomePageScreen';
import SignUpPageScreen from './screens/SignUpPageScreen';
import SignInPageScreen from './screens/SignInPageScreen';
import MainPageScreen from './screens/MainPageScreen';

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomePage" headerMode="none">
          <Stack.Screen name="WelcomePage" component={WelcomePageScreen} />
          <Stack.Screen name="SignUpPage" component={SignUpPageScreen} />
          <Stack.Screen name="SignInPage" component={SignInPageScreen} />
          <Stack.Screen name="MainPage" component={MainPageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
