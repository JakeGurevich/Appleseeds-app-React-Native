import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileStack from './ProfileStack';
import DrawerContent from '../screens/DrawerContent';
import CoursesStack from './CoursesStack';
import StudentsListScreen from '../screens/StudentsListScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        drawerPosition="right">
        <Drawer.Screen name="Home" component={CoursesStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
        <Drawer.Screen
          name="Students"
          component={StudentsListScreen}
          // options={{
          //   headerTitle: 'פרופיל',
          //   headerRight: () => (
          //     <Button
          //       icon="menu"
          //       onPress={() => navigation.toggleDrawer()}></Button>
          //   ),
          // }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
