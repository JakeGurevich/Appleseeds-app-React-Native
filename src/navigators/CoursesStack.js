import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabsScreen from '../screens/TabsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import {Button} from 'react-native-paper';
const Courses = createStackNavigator();

const CoursesStack = ({navigation}) => {
  return (
    <Courses.Navigator>
      <Courses.Screen
        name="Tabs"
        children={TabsScreen}
        options={{
          headerTitle: 'Courses',
          headerLeft: () => (
            <Button
              icon="menu"
              onPress={() => navigation.toggleDrawer()}></Button>
          ),
        }}
      />
      <Courses.Screen name="Courses" component={CoursesScreen} />
    </Courses.Navigator>
  );
};

export default CoursesStack;
