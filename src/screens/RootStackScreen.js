import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './AuthStackScreen';
import DrawerScreen from './DrawerScreen';
const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => {
  return (
    <>
      <RootStack.Navigator headerMode="none">
        {userToken ? (
          <RootStack.Screen
            name="App"
            component={DrawerScreen}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </>
  );
};

export default RootStackScreen;
