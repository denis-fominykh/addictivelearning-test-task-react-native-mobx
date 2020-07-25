import 'mobx-react-lite/batchingForReactNative';
import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, Addictive Learning!</Text>
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

export default App;
