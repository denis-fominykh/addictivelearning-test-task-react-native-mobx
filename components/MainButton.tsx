import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface MainButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  color: string;
}

const MainButton: FC<MainButtonProps> = ({ children, onPress, color }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default MainButton;
