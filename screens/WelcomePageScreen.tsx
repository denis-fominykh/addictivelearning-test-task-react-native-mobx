import React, { FC, useEffect } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import MainButton from '../components/MainButton';

interface WelcomePageScreenProps {
  navigation: any;
  store: any;
}

const WelcomePageScreen: FC<WelcomePageScreenProps> = ({
  navigation,
  store,
}) => {
  useEffect(() => {
    SplashScreen.hide();
    store.loadAsyncData(navigation);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/al-logo.png')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <MainButton
          onPress={() => navigation.navigate('SignUpPage')}
          color="#DE0160"
        >
          SIGN UP
        </MainButton>
        <MainButton
          onPress={() => navigation.navigate('SignInPage')}
          color="#6EC5D6"
        >
          SIGN IN
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  logo: {
    width: '25%',
    height: '25%',
    marginTop: Dimensions.get('window').height / 7,
  },
  buttonContainer: {
    width: '100%',
    marginTop: Dimensions.get('window').height / 3.5,
  },
});

export default inject('store')(observer(WelcomePageScreen));
