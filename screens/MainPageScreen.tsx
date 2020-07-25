import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainPageScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MainPageScreen</Text>
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

export default MainPageScreen;
