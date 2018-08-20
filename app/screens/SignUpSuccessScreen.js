import React, { Component } from 'react';
import { View } from 'react-native';
import StandardButton from '../components/StandardButton';
import { commonStyles } from '../styles/common';

export default class SignUpSuccessScreen extends Component {
  static navigationOptions = {
    title: 'Sign-up Success',
    headerLeft: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={commonStyles.screen}>
        <StandardButton
          title="Close"
          onStandardButtonPress={() => {
            navigation.dismiss();
          }}
        />
      </View>
    );
  }
}
