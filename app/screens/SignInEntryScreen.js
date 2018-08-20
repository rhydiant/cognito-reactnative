import React, { Component } from 'react';
import { View } from 'react-native';
import { Auth } from 'aws-amplify';
import PlainTextInput from '../components/PlainTextInput';
import SecretTextInput from '../components/SecretTextInput';
import LoadingButton from '../components/LoadingButton';
import ErrorMessageText from '../components/ErrorMessageText';
import FooterText from '../components/FooterText';
import { commonStyles } from '../styles/common';

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

  onSignInPress() {
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
      <View style={commonStyles.screen}>
        <PlainTextInput
          placeholder="Email"
          onChangePlainText={emailAddress => this.setState({ emailAddress })}
        />
        <SecretTextInput
          placeholder="Password"
          onChangeSecretText={password => this.setState({ password })}
        />
        <ErrorMessageText message={errorMessage} />
        <LoadingButton
          title="Sign-in"
          isLoading={isLoading}
          onLoadButtonPress={() => this.onSignInPress()}
        />
        <FooterText
          title="Need an account?"
          actionTitle="Sign-up"
          action={() => navigation.navigate('SignUpEntry')}
        />
      </View>
    );
  }
}
