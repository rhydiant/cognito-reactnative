import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import PlainTextInput from '../components/PlainTextInput';
import SecretTextInput from '../components/SecretTextInput';
import LoadingButton from '../components/LoadingButton';
import ErrorMessageText from '../components/ErrorMessageText';
import { commonStyles } from '../styles/common';

export default class SignUpEntryScreen extends Component {
  static navigationOptions = {
    title: 'Sign-up',
  };

  state = {
    emailAddress: '',
    password: '',
    confirmedPassword: '',
    errorMessage: '',
    isLoading: false,
  };

  onSignUpPress() {
    this.setState({ isLoading: true });

    const { emailAddress, password, confirmedPassword } = this.state;
    const { navigation } = this.props;

    if (password !== confirmedPassword) {
      this.setState({
        isLoading: false,
        errorMessage: 'Password and confirmed password are not the same',
      });
    } else {
      Auth.signUp({
        username: emailAddress,
        password,
      })
        .then(() => {
          this.setState({ isLoading: false, errorMessage: '' });
          navigation.navigate('SignUpConfirm', {
            emailAddress,
          });
        })
        .catch((err) => {
          this.setState({ isLoading: false, errorMessage: err.message || err });
        });
    }
  }

  render() {
    const { errorMessage, isLoading } = this.state;
    return (
      <View style={commonStyles.screen}>
        <Text style={{ margin: 16 }}>
          You will need access to the email address provided to verify your account.
        </Text>
        <PlainTextInput
          placeholder="Email"
          onChangePlainText={emailAddress => this.setState({ emailAddress })}
        />
        <SecretTextInput
          placeholder="Password"
          onChangeSecretText={password => this.setState({ password })}
        />
        <SecretTextInput
          placeholder="Confirm Password"
          onChangeSecretText={confirmedPassword => this.setState({ confirmedPassword })}
        />
        <ErrorMessageText message={errorMessage} />
        <LoadingButton
          title="Sign-up"
          isLoading={isLoading}
          onLoadButtonPress={() => this.onSignUpPress()}
        />
      </View>
    );
  }
}
