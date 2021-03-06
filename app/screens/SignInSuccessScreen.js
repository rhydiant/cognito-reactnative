import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import StandardButton from '../components/StandardButton';
import { commonStyles } from '../styles/common';

export default class SignInSuccessScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft: null,
  };

  state = {
    accessToken: '',
  };

  componentDidMount() {
    Auth.currentSession()
      .then((data) => {
        this.setState({ accessToken: data.accessToken.jwtToken });
      })
      .catch(err => console.log(err));
  }

  signOut() {
    const { navigation } = this.props;
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    navigation.goBack();
  }

  render() {
    const { accessToken } = this.state;
    return (
      <ScrollView>
        <View style={commonStyles.screen}>
          <Text style={{ margin: 16 }}>
            Sign-in success, accessToken:
            {accessToken}
          </Text>
          <StandardButton title="Sign out" onStandardButtonPress={() => this.signOut()} />
        </View>
      </ScrollView>
    );
  }
}
