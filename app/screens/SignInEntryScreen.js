import React, { Component } from 'react';
import {
  View, TextInput, Button, Text,
} from 'react-native';
import { Auth } from 'aws-amplify';
import SecretTextInput from '../components/SecretTextInput';
import { textStyles, componentStyles } from '../styles/common';

export default class SignInEntryScreen extends Component {
  static navigationOptions = {
    title: 'Sign-in',
  };

  state = {
    emailAddress: '',
    password: '',
    errorMessage: '',
    isLoading: false,
  };

  onPress() {
    const { emailAddress, password } = this.state;
    const { navigation } = this.props;

    this.setState({ isLoading: true, errorMessage: '' });

    Auth.signIn(emailAddress, password)
      .then(() => {
        this.setState({ isLoading: false, errorMessage: '' });
        navigation.navigate('SignInSuccess');
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          errorMessage: err.message || err,
        });
      });
  }

  render() {
    const { errorMessage, isLoading } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ margin: 16 }}>
        <TextInput
          style={componentStyles.textInput}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          clearButtonMode="always"
          onChangeText={emailAddress => this.setState({ emailAddress })}
        />
        <SecretTextInput onChangePasswordText={password => this.setState({ password })} />
        <Text style={textStyles.errorText}>{errorMessage}</Text>
        <Button
          title={isLoading ? 'Loading ...' : 'Sign-in'}
          onPress={() => this.onPress()}
          block
        />
        <View style={componentStyles.footer}>
          <Text>Need an account?</Text>
          <Text
            style={textStyles.callToActionText}
            onPress={() => {
              navigation.navigate('SignUpEntry');
            }}
          >
            Sign-up.
          </Text>
        </View>
      </View>
    );
  }
}
