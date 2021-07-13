import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './AuthStackScreen';
import DrawerScreen from './DrawerScreen';
import {Context as AuthContext} from '../context/AuthContext';
const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const {state} = useContext(AuthContext);
  console.log(state);
  return (
    <>
      <RootStack.Navigator headerMode="none">
        {state?.userToken ? (
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
