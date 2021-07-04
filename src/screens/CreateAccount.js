import React from 'react';
import {Text, View, Button} from 'react-native';
const CreateAccount = ({navigation}) => {
  return (
    <View>
      <Text>Create Account</Text>
      <Button title="Sign in" />
      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
};

export default CreateAccount;
