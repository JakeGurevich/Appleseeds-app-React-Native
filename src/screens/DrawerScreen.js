import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabsScreen from './TabsScreen';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerScreen;
