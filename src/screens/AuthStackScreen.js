import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from './CreateAccount';
import SignIn from './SighIn';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Sign In'}}
        />
        <AuthStack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{title: 'Create Account'}}
        />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthStackScreen;
