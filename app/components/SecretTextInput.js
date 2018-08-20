import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 44,
    margin: 8,
    padding: 8,
    backgroundColor: '#E8F3F9',
    fontSize: 16,
    borderRadius: 5,
  },
});

const SecretTextInput = ({ placeholder, onChangeSecretText }) => (
  <TextInput
    style={styles.textInput}
    placeholder={placeholder}
    autoCapitalize="none"
    autoCorrect={false}
    secureTextEntry
    clearButtonMode="always"
    onChangeText={onChangeSecretText}
  />
);

SecretTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeSecretText: PropTypes.func.isRequired,
};

export default SecretTextInput;
