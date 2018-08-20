import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  errorText: {
    padding: 16,
    color: '#EA3546',
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const ErrorMessageText = (props) => {
  const { message } = props;
  return <Text style={styles.errorText}>{message}</Text>;
};

ErrorMessageText.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessageText;
