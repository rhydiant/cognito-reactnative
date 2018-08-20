import React, { Component } from "react";
import { StyleSheet } from "react-native";
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

export default class SignUpEntryScreen extends Component {
  state = {
    emailAddress: "",
    password: "",
    confirmedPassword: "",
    errorMessage: "",
    isLoading: false
  };

  static navigationOptions = {
    title: "Sign-up",
    gesturesEnabled: false,
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Close"
        color={"blue"}
      />
    )
  };

  onPress() {
    this.setState(_ => {
      return { isLoading: true };
    });

    Auth.signUp({
      username: this.state.emailAddress,
      password: this.state.password
    })
      .then(data => {
        console.log(data);
        this.setState(_ => {
          return { isLoading: false, errorMessage: "" };
        });
        this.props.navigation.navigate("SignUpConfirm", {
          emailAddress: this.state.emailAddress
        });
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
          <Text style={{ margin: 16 }}>
            You will need access to the email address provided to verify your
            account.
          </Text>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                autoCapitalize={"none"}
                autoCorrect={false}
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
            <Item>
              <Input
                placeholder="Confirm Password"
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry={true}
                clearButtonMode={"always"}
                onChangeText={confirmedPassword =>
                  this.setState({ confirmedPassword })
                }
              />
            </Item>
            <Text style={styles.error}>{this.state.errorMessage}</Text>
            <Button onPress={this.onPress.bind(this)} block>
              <Text>{this.state.isLoading ? "Loading ..." : "Sign-up"}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    margin: 16,
    color: "red"
  }
});
