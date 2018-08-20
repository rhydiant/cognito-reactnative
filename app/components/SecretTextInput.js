import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 44,
    margin: 8,
    padding: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
});

const SecretTextInput = ({ onChangePasswordText }) => (
  <TextInput
    style={styles.textInput}
    placeholder="Password"
    autoCapitalize="none"
    autoCorrect={false}
    secureTextEntry
    clearButtonMode="always"
    onChangeText={onChangePasswordText}
  />
);

SecretTextInput.propTypes = {
  onChangePasswordText: PropTypes.func.isRequired,
};

export default SecretTextInput;
