import React, { FC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title: string;
  onPress: () => void;
}

const Header: FC<HeaderProps> = ({ title, onPress }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={{ paddingLeft: 20 }}
        >
          <Icon name="arrow-back" size={35} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    overflow: 'hidden',
    paddingBottom: 5,
  },
  headerContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    fontSize: 24,
    paddingLeft: 30,
  },
});

export default Header;
