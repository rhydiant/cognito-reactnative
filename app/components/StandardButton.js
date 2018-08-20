import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { commonStyles } from '../styles/common';

const StandardButton = (props) => {
  const { title, onStandardButtonPress } = props;
  return (
    <TouchableOpacity style={commonStyles.button} onPress={onStandardButtonPress}>
      <Text style={commonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default StandardButton;

StandardButton.propTypes = {
  title: PropTypes.string.isRequired,
  onStandardButtonPress: PropTypes.func.isRequired,
};
