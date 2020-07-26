import React, { FC, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import MainButton from '../components/MainButton';

interface SignUpPageScreenProps {
  navigation: any;
}

const SignUpPageScreen: FC<SignUpPageScreenProps> = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
        />
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="confirm password"
          defaultValue=""
        />
        <CheckBox
          iconRight
          title="Terms of use:"
          checked={isChecked}
          onPress={() => setIsChecked((value) => !value)}
          checkedIcon={<Icon name="checkmark" size={35} color="#00907B" />}
          uncheckedIcon={
            <Icon name="close-outline" size={35} color="#E00025" />
          }
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxTitle}
        />
        <MainButton onPress={() => {}} color="#DE0160">
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
