import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
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

const LoadingButton = (props) => {
  const { title, isLoading, onLoadButtonPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onLoadButtonPress}>
      <Text style={styles.buttonText}>{isLoading ? 'Loading ...' : title}</Text>
    </TouchableOpacity>
  );
};

export default LoadingButton;

LoadingButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadButtonPress: PropTypes.func.isRequired,
};
