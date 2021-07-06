import React from 'react';
import {Button} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
const Profile = createStackNavigator();

const PrifileStack = ({navigation}) => {
  return (
    <Profile.Navigator>
      <Profile.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'פרופיל',
          headerRight: () => (
            <Button
              icon="menu"
              onPress={() => navigation.toggleDrawer()}></Button>
          ),
        }}
      />
      {/* <Profile.Screen name="Courses" component={CoursesScreen} /> */}
    </Profile.Navigator>
  );
};

export default PrifileStack;
