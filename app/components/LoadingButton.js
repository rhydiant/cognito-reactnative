import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { commonStyles } from '../styles/common';

const LoadingButton = (props) => {
  const { title, isLoading, onLoadButtonPress } = props;
  return (
    <TouchableOpacity style={commonStyles.button} onPress={onLoadButtonPress}>
      <Text style={commonStyles.buttonText}>{isLoading ? 'Loading ...' : title}</Text>
    </TouchableOpacity>
  );
};

export default LoadingButton;

LoadingButton.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadButtonPress: PropTypes.func.isRequired,
};
