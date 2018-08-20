import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { Auth } from "aws-amplify";

export default class SignInEntryScreen extends Component {
  state = {
    emailAddress: "",
    password: "",
    errorMessage: "",
    isLoading: false,
    accessToken: ""
  };

  static navigationOptions = {
    title: "Sign-in"
  };

  onPress() {
    this.setState(_ => {
      return { isLoading: true, errorMessage: "" };
    });

    Auth.signIn(this.state.emailAddress, this.state.password)
      .then(user => {
        console.log(user);
        this.setState(_ => {
          return { isLoading: false, errorMessage: "" };
        });
        this.props.navigation.navigate("SignInSuccess");
      })
      .catch(err => {
        console.log(err);
        this.setState(_ => {
          return { isLoading: false, errorMessage: err.message || err };
        });
      });
  }

  render() {
    return (
      <Container>
        <Content style={{ margin: 16 }}>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"email-address"}
                clearButtonMode={"always"}
                onChangeText={emailAddress => this.setState({ emailAddress })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry={true}
                clearButtonMode={"always"}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Text style={styles.error}>{this.state.errorMessage}</Text>
            <Button onPress={this.onPress.bind(this)} block>
              <Text>{this.state.isLoading ? "Loading ..." : "Sign-in"}</Text>
            </Button>
          </Form>
          <View style={styles.footer}>
            <Text>Need an account?</Text>
            <Text
              style={styles.callToActionText}
              onPress={() => {
                this.props.navigation.navigate("SignUpEntry");
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

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32
  },
  callToActionText: {
    paddingLeft: 4,
    color: "blue"
  },
  error: {
    margin: 16,
    color: "red"
  }
});
