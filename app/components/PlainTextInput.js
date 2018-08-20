import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { commonStyles } from '../styles/common';

const PlainTextInput = ({ placeholder, onChangePlainText }) => (
  <TextInput
    style={commonStyles.textInput}
    placeholder={placeholder}
    autoCapitalize="none"
    autoCorrect={false}
    keyboardType="email-address"
    clearButtonMode="always"
    onChangeText={onChangePlainText}
  />
);

PlainTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangePlainText: PropTypes.func.isRequired,
};

export default PlainTextInput;
