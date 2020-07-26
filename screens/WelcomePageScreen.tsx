import React, { FC } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainButton from '../components/MainButton';

interface WelcomePageScreenProps {
  navigation: any;
}

const WelcomePageScreen: FC<WelcomePageScreenProps> = ({ navigation }) => {
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
    marginTop: '30%',
  },
  buttonContainer: {
    width: '100%',
    marginTop: '70%',
  },
});

export default WelcomePageScreen;
