import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInPageScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignInPageScreen</Text>
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

export default SignInPageScreen;
