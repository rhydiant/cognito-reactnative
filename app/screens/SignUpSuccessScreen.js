import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
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
        <Text style={{ margin: 16 }}>Done, now you can sign-in.</Text>
        <Button
          title="Close"
          onPress={() => {
            navigation.dismiss();
          }}
        />
      </View>
    );
  }
}
