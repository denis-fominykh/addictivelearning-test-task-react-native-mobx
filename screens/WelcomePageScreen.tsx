import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WelcomePageScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomePageScreen</Text>
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

export default WelcomePageScreen;