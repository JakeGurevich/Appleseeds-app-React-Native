import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileStack from '../navigators/PrifileStack';
import DrawerContent from './DrawerContent';
import CoursesStack from '../navigators/CoursesStack';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        drawerPosition="right">
        <Drawer.Screen name="Home" component={CoursesStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerScreen;
