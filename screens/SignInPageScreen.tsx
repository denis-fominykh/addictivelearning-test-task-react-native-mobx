import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainButton from '../components/MainButton';
import Header from '../components/Header';

interface SignInPageScreenProps {
  navigation: any;
  store: any;
}

const SignInPageScreen: FC<SignInPageScreenProps> = ({ navigation, store }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    store.changeSignInEmail(email);
    store.changeSignInPassword(password);
  }, [email, password, store.signInSuccess]);

  const clearFields = (): void => {
    setEmail('');
    setPassword('');
  };

  const sendData = (): void => {
    if (email && password) {
      store.signIn();
      clearFields();
    }
  };

  store.signInSuccess === 200 ? navigation.navigate('MainPage') : null;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Back" onPress={() => navigation.goBack()} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          placeholder="email"
          defaultValue={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          placeholder="password"
          defaultValue={password}
          secureTextEntry={true}
        />
        <MainButton onPress={sendData} color="#6EC5D6">
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
