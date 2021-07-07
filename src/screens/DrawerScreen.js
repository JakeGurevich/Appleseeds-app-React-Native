import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileStack from '../navigators/PrifileStack';
import DrawerContent from './DrawerContent';
import CoursesStack from '../navigators/CoursesStack';
import StudentsListScreen from './StudentsListScreen';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
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

export default DrawerScreen;
