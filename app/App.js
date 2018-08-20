import { createStackNavigator } from 'react-navigation';
import Amplify from 'aws-amplify';

import { aws as awsConfig } from '../config.json';

import SignInEntryScreen from './screens/SignInEntryScreen';
import SignInSuccessScreen from './screens/SignInSuccessScreen';

import SignUpEntryScreen from './screens/SignUpEntryScreen';
import SignUpConfirmScreen from './screens/SignUpConfirmScreen';
import SignUpSuccessScreen from './screens/SignUpSuccessScreen';

// setup navigation stacks

const SignUpStack = createStackNavigator({
  SignUpEntry: { screen: SignUpEntryScreen },
  SignUpConfirm: { screen: SignUpConfirmScreen },
  SignUpSuccess: { screen: SignUpSuccessScreen },
});

const AppStack = createStackNavigator({
  SignInEntry: { screen: SignInEntryScreen },
  SignInSuccess: { screen: SignInSuccessScreen },
});

const App = createStackNavigator(
  {
    Home: AppStack,
    SignUp: SignUpStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

// setup AWS config

Amplify.configure({
  Auth: {
    region: awsConfig.region,
    userPoolId: awsConfig.userPoolId,
    userPoolWebClientId: awsConfig.userPoolWebClientId,
  },
});

export default App;
