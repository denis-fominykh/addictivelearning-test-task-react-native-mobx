import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import MainButton from '../components/MainButton';

interface SignUpPageScreenProps {
  navigation: any;
  store: any;
}

const SignUpPageScreen: FC<SignUpPageScreenProps> = ({ navigation, store }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [termsOfUse, setTermsOfUse] = useState<boolean>(false);

  useEffect(() => {
    store.changeEmail(email);
    store.changePassword(password);
    store.changePasswordConfirm(passwordConfirm);
    store.changeTermsOfUse(termsOfUse);
  }, [email, password, passwordConfirm, termsOfUse]);

  const clearFields = (): void => {
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setTermsOfUse(false);
  };

  const sendData = (): void => {
    if (email && password && passwordConfirm && termsOfUse) {
      store.signUp();
      clearFields();
    }
  };

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
        <TextInput
          style={styles.input}
          onChangeText={(value) => setPasswordConfirm(value)}
          placeholder="confirm password"
          defaultValue={passwordConfirm}
          secureTextEntry={true}
        />
        <CheckBox
          iconRight
          title="Terms of use:"
          checked={termsOfUse}
          onPress={() => setTermsOfUse((value) => !value)}
          checkedIcon={<Icon name="checkmark" size={35} color="#00907B" />}
          uncheckedIcon={
            <Icon name="close-outline" size={35} color="#E00025" />
          }
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxTitle}
        />
        <MainButton onPress={sendData} color="#DE0160">
          SIGN UP
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
    marginTop: Dimensions.get('window').height / 5,
  },
  input: {
    height: 40,
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginVertical: 5,
    fontSize: 18,
  },
  checkbox: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    borderWidth: 0,
    marginVertical: 5,
  },
  checkboxTitle: {
    fontSize: 18,
  },
});

export default inject('store')(observer(SignUpPageScreen));
