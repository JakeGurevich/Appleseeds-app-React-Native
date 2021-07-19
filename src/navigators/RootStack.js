import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';
import {Context as AuthContext} from '../context/AuthContext';
const Root = createStackNavigator();

const RootStack = () => {
  const {state} = useContext(AuthContext);
  console.log(state);
  return (
    <>
      <Root.Navigator headerMode="none">
        {state?.userToken ? (
          <Root.Screen
            name="App"
            component={DrawerNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <Root.Screen
            name="Auth"
            component={AuthStack}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </Root.Navigator>
    </>
  );
};

export default RootStack;
