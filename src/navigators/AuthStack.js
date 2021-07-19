import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const AuthStackNavigator = createStackNavigator();
const AuthStack = () => {
  return (
    <>
      <AuthStackNavigator.Navigator>
        <AuthStackNavigator.Screen
          name="SignIn"
          component={SignInScreen}
          options={{title: 'Sign In'}}
        />
        <AuthStackNavigator.Screen
          name="Sign up"
          component={SignUpScreen}
          options={{title: 'Create Account'}}
        />
      </AuthStackNavigator.Navigator>
    </>
  );
};

export default AuthStack;
