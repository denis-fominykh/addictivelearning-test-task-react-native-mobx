import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SignUnPageScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>SignUnPageScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUnPageScreen;
