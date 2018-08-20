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

export default class SignUpConfirmScreen extends Component {
  state = {
    confirmCode: "",
    errorMessage: ""
  };

  onPress() {
    var emailAddress = this.props.navigation.getParam("emailAddress", "");

    Auth.confirmSignUp(emailAddress, this.state.confirmCode, {
      forceAliasCreation: true
    })
      .then(data => {
        console.log(data);
        this.setState(_ => {
          return { errorMessgae: "" };
        });
        this.props.navigation.navigate("SignUpSuccess");
      })
      .catch(err => {
        console.log(err);
        this.setState(_ => {
          return { errorMessgae: err.message || err };
        });
      });
  }

  render() {
    return (
      <Container>
        <Content style={{ margin: 16 }}>
          <Text style={{ margin: 16 }}>
            Please check your email for a confirmation code.
          </Text>
          <Form>
            <Item>
              <Input
                placeholder="Code"
                onChangeText={confirmCode => this.setState({ confirmCode })}
              />
            </Item>
            <Text style={styles.error}>{this.state.errorMessage}</Text>
            <Button onPress={this.onPress.bind(this)} block>
              <Text>Confirm</Text>
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
