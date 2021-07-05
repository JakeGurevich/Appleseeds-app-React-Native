import React from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context';
const SigninScreen = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  return (
    <View>
      <Text>Sign in</Text>
      <Button title="Sign in" onPress={() => signIn()} />
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
