import React from 'react';
import {Text, View, Button} from 'react-native';

const SigninScreen = ({navigation}) => {
  return (
    <View>
      <Text>Sign in</Text>
      <Button title="Sign in" />
      <Button
        title="Create Account"
        onPress={() => {
          navigation.navigate('Create Account');
        }}
      />
    </View>
  );
};

export default SigninScreen;
