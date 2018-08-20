import { StyleSheet } from 'react-native';

// colors

export const colors = {
  darkGrey: '#303030',
  P500: '#510063',
  N500: '#603f66',
  N50070: '#603f6670', // N500 with 70% opacity
  N100: '#f8f5f9',
  N300: '#d7cbd9',
  O400: '#ff5500',
  M500: '#2dc3bf',
  M50020: '#2dc3bf20', // M500 with 20% opacity
  white: '#ffffff',
  O450: '#ea4e00',
  borderGray: '#e8e8e8',
  errorTextGray: '#6c6c6c',
};

// common styles

export const commonStyles = StyleSheet.create({
  screen: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
});
