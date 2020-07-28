import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainButton from '../components/MainButton';

interface SettingsPageScreenProps {
  navigation: any;
  store: any;
}

const SettingsPageScreen: FC<SettingsPageScreenProps> = ({
  navigation,
  store,
}) => {
  const logOut = (): void => {
    store.logOut();
    navigation.navigate('WelcomePage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainButton onPress={logOut} color="#612469">
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

export default inject('store')(observer(SettingsPageScreen));
