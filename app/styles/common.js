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

// component base styles

export const commonStyles = StyleSheet.create({
  // base style for all screens
  screen: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  // base style for all text inputs
  textInput: {
    height: 44,
    margin: 8,
    padding: 8,
    backgroundColor: '#E8F3F9',
    fontSize: 16,
    borderRadius: 5,
  },
  // base style for all buttons
  button: {
    backgroundColor: '#067BC2',
    padding: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
