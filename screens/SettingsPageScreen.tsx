import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainButton from '../components/MainButton';

interface SettingsPageScreenProps {
  navigation: any;
}

const SettingsPageScreen: FC<SettingsPageScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MainButton
        onPress={() => navigation.navigate('WelcomePage')}
        color="#612469"
      >
        LOG OUT
      </MainButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SettingsPageScreen;
