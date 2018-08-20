import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { commonStyles } from '../styles/common';

const SecretTextInput = ({ placeholder, onChangeSecretText }) => (
  <TextInput
    style={commonStyles.textInput}
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
