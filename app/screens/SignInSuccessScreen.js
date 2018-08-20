import React, { Component } from "react";
import { Container, Content, Text, Button } from "native-base";
import { Auth } from "aws-amplify";

export default class SignInSuccessScreen extends Component {
  state = {
    accessToken: ""
  };

  static navigationOptions = {
    title: "Welcome",
    headerLeft: null
  };

  componentDidMount() {
    Auth.currentSession()
      .then(data => {
        console.log(data);
        this.setState({ accessToken: data.accessToken.jwtToken });
      })
      .catch(err => console.log(err));
  }

  signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Content style={{ margin: 16 }}>
          <Text style={{ margin: 16 }}>
            Sign-in success, accessToken: {this.state.accessToken}
          </Text>
          <Button block onPress={this.signOut.bind(this)}>
            <Text>Sign out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
