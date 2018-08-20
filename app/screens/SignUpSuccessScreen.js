import React, { Component } from 'react';
import {
  Container, Content, Text, Button,
} from 'native-base';

export default class SignUpSuccessScreen extends Component {
  static navigationOptions = {
    title: 'Sign-up Success',
    headerLeft: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content style={{ margin: 16 }}>
          <Text style={{ margin: 16 }}>Done, now you can sign-in.</Text>
          <Button
            block
            onPress={() => {
              navigation.dismiss();
            }}
          >
            <Text>Close</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
