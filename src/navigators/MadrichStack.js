import React from 'react';
import {Button} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import CoursesScreen from '../screens/CourseScreen';
import MadrichScreen from '../screens/MadrichScreen';
const Madrich = createStackNavigator();

const MadrichStack = ({navigation}) => {
  return (
    <Madrich.Navigator headerMode="none">
      <Madrich.Screen
        name="מדריך"
        component={MadrichScreen}
        options={{
          headerTitle: 'פרופיל',
          headerRight: () => (
            <Button
              icon="menu"
              size={30}
              onPress={() => navigation.toggleDrawer()}></Button>
          ),
        }}
      />
      {/* <Madrich.Screen name="Courses" component={CoursesScreen} /> */}
    </Madrich.Navigator>
  );
};

export default MadrichStack;
