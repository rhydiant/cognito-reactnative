# cognito-reactnative

Native (iOS/Android) app, authenticating against AWS Cognito.

![](https://github.com/rhydiant/cognito-reactnative/blob/master/screenshots/screen1.png)
![](https://github.com/rhydiant/cognito-reactnative/blob/master/screenshots/screen2.png)
![](https://github.com/rhydiant/cognito-reactnative/blob/master/screenshots/screen4.png)
![](https://github.com/rhydiant/cognito-reactnative/blob/master/screenshots/screen3.png)


## Usage

Follow the [install instructions](https://facebook.github.io/react-native/docs/getting-started) (Building Projects with Native Code) to setup React Native.

Install dependencies with:

    npm install

### AWS Cognito

In your AWS account, [setup a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html) then `mv config.json.template config.json` and add your AWS config.

### Running the app

To run on a simulator:

    react-native run-ios
