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
        component={TabsScreen}
        options={{
          headerTitle: 'קורסים',

          headerRight: () => (
            <Button
              icon="menu"
              color="white"
              size={30}
              onPress={() => navigation.toggleDrawer()}></Button>
          ),
          headerStyle: {
            backgroundColor: '#1E90FF',
            borderBottomColor: '1E90FF',
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
        }}
      />
      <Courses.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          headerLeft: null,
          headerTitleAlign: 'center',
          headerRight: () => (
            <Button
              icon="arrow-right"
              size={50}
              onPress={() => navigation.goBack()}></Button>
          ),
          headerStyle: {
            backgroundColor: '#1E90FF',
          },
          headerTintColor: '#fff',
        }}
      />
    </Courses.Navigator>
  );
};

export default CoursesStack;
