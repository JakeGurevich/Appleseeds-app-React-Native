import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('hh');

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }

  return (
    // <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
    // </AuthContext.Provider>
  );
};

export default App;
