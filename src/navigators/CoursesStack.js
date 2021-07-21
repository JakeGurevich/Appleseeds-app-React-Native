import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import TabsNavigator from './TabsNavigator';
import CourseScreen from '../screens/CourseScreen';
import MifgashScreen from '../screens/MifgashScreen';
import {Button} from 'react-native-paper';
const Courses = createStackNavigator();

const CoursesStack = ({navigation}) => {
  return (
    <Courses.Navigator>
      <Courses.Screen
        name="Tabs"
        component={TabsNavigator}
        options={{
          headerTitle: 'קורסים',

          headerRight: () => (
            <Icon.Button
              name="menu"
              color="white"
              backgroundColor="#1E90FF"
              size={30}
              onPress={() => navigation.toggleDrawer()}></Icon.Button>
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
        name="Course"
        component={CourseScreen}
        options={{
          headerLeft: null,
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon.Button
              name="arrow-right"
              color="white"
              backgroundColor="#1E90FF"
              size={30}
              onPress={() => navigation.goBack()}></Icon.Button>
          ),
          headerStyle: {
            backgroundColor: '#1E90FF',
          },
          headerTintColor: '#fff',
        }}
      />
      <Courses.Screen
        name="Mifgash"
        component={MifgashScreen}
        options={{
          headerLeft: null,
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon.Button
              name="arrow-right"
              color="white"
              backgroundColor="#1E90FF"
              size={30}
              onPress={() => navigation.goBack()}></Icon.Button>
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
