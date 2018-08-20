import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  titleText: {
    fontSize: 14,
  },
  actionText: {
    fontSize: 14,
    paddingLeft: 4,
    color: 'blue',
  },
});

const FooterText = (props) => {
  const { title, actionTitle, action } = props;
  return (
    <View style={styles.footer}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity onPress={action}>
        <Text style={styles.actionText}>{actionTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

FooterText.propTypes = {
  title: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default FooterText;
