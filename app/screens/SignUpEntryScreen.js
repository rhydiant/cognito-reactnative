import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Form, Item, Input, Button, Text,
} from 'native-base';
import { Auth } from 'aws-amplify';

const styles = StyleSheet.create({
  error: {
    margin: 16,
    color: 'red',
  },
});

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

  onPress() {
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
      <Container>
        <Content style={{ margin: 16 }}>
          <Text style={{ margin: 16 }}>
            You will need access to the email address provided to verify your account.
          </Text>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
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
            <Item>
              <Input
                placeholder="Confirm Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                clearButtonMode="always"
                onChangeText={confirmedPassword => this.setState({ confirmedPassword })}
              />
            </Item>
            <Text style={styles.error}>{errorMessage}</Text>
            <Button onPress={() => this.onPress()} block>
              <Text>{isLoading ? 'Loading ...' : 'Sign-up'}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
