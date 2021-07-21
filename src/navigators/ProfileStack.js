import React from 'react';
import {Button} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Profile.Navigator>
      <Profile.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'פרופיל',
          headerRight: () => (
            <Icon.Button
              name="menu"
              color="white"
              backgroundColor="#1E90FF"
              size={30}
              onPress={() =>
                navigation.toggleDrawer(() => navigation.toggleDrawer())
              }></Icon.Button>
          ),
          headerStyle: {
            backgroundColor: '#1E90FF',
            borderBottomColor: '1E90FF',
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
        }}
      />
      {/* <Profile.Screen name="Courses" component={CoursesScreen} /> */}
    </Profile.Navigator>
  );
};

export default ProfileStack;
