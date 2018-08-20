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

export default class SignUpConfirmScreen extends Component {
  state = {
    confirmCode: '',
    errorMessage: '',
  };

  onPress() {
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
      <Container>
        <Content style={{ margin: 16 }}>
          <Text style={{ margin: 16 }}>Please check your email for a confirmation code.</Text>
          <Form>
            <Item>
              <Input
                placeholder="Code"
                onChangeText={confirmCode => this.setState({ confirmCode })}
              />
            </Item>
            <Text style={styles.error}>{errorMessage}</Text>
            <Button onPress={() => this.onPress()} block>
              <Text>Confirm</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
