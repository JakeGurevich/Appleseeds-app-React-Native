import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigators/RootStack';

import Splash from './src/screens/Splash';

import {Provider} from './src/context/AuthContext';
import {} from 'react-native';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState('hh');

  // if (loginState.isLoading) {
  //   return <Splash />;
  // }

  return (
    <Provider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
