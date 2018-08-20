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

// text styles

export const textStyles = StyleSheet.create({
  errorText: {
    margin: 16,
    color: 'red',
  },
  callToActionText: {
    paddingLeft: 4,
    color: 'blue',
  },
});

// component styles

export const componentStyles = StyleSheet.create({
  textInput: {
    height: 44,
    margin: 8,
    padding: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
});
