import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import PlainTextInput from '../components/PlainTextInput';
import LoadingButton from '../components/LoadingButton';
import ErrorMessageText from '../components/ErrorMessageText';
import { commonStyles } from '../styles/common';

export default class SignUpConfirmScreen extends Component {
  state = {
    confirmCode: '',
    errorMessage: '',
  };

  onConfirmPress() {
    const { navigation } = this.props;
    const { confirmCode } = this.state;
    const emailAddress = navigation.getParam('emailAddress', '');

    Auth.confirmSignUp(emailAddress, confirmCode, {
      forceAliasCreation: true,
    })
      .then(() => {
        this.setState({ errorMessage: '' });
        navigation.navigate('SignUpSuccess');
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message || err });
      });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <View style={commonStyles.screen}>
        <Text style={{ margin: 16 }}>Please check your email for a confirmation code.</Text>
        <PlainTextInput
          placeholder="Code"
          onChangePlainText={confirmCode => this.setState({ confirmCode })}
        />
        <ErrorMessageText message={errorMessage} />
        <LoadingButton
          title="Confirm"
          isLoading={false}
          onLoadButtonPress={() => this.onConfirmPress()}
        />
      </View>
    );
  }
}
