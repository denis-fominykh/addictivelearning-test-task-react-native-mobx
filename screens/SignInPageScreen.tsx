import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainButton from '../components/MainButton';
import Header from '../components/Header';

interface SignInPageScreenProps {
  navigation: any;
}

const SignInPageScreen: FC<SignInPageScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Back" onPress={() => navigation.goBack()} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="email"
          defaultValue=""
        />
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="password"
          defaultValue=""
          secureTextEntry={true}
        />
        <MainButton onPress={() => {}} color="#6EC5D6">
          SIGN IN
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: '50%',
  },
  input: {
    height: 40,
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginVertical: 5,
    fontSize: 18,
  },
});

export default inject('store')(observer(SignInPageScreen));
