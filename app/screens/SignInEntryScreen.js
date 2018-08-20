import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content, Form, Item, Input, Button, Text,
} from 'native-base';
import { Auth } from 'aws-amplify';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  callToActionText: {
    paddingLeft: 4,
    color: 'blue',
  },
  error: {
    margin: 16,
    color: 'red',
  },
});

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

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

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
      <Container>
        <Content style={{ margin: 16 }}>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                clearButtonMode="always"
                onChangeText={emailAddress => this.setState({ emailAddress })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                clearButtonMode="always"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Text style={styles.error}>{errorMessage}</Text>
            <Button onPress={() => this.onPress()} block>
              <Text>{isLoading ? 'Loading ...' : 'Sign-in'}</Text>
            </Button>
          </Form>
          <View style={styles.footer}>
            <Text>Need an account?</Text>
            <Text
              style={styles.callToActionText}
              onPress={() => {
                navigation.navigate('SignUpEntry');
              }}
            >
              Sign-up.
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
