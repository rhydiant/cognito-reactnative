import React, { Component } from 'react';
import {
  Container, Content, Text, Button,
} from 'native-base';
import { Auth } from 'aws-amplify';

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
      <Container>
        <Content style={{ margin: 16 }}>
          <Text style={{ margin: 16 }}>
            Sign-in success, accessToken:
            {accessToken}
          </Text>
          <Button block onPress={() => this.signOut()}>
            <Text>Sign out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
