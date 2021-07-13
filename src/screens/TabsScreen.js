import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StudentScreen from './StudentScreen';
import MadrichStack from '../navigators/MadrichStack';

const Tab = createMaterialTopTabNavigator();
const TabsScreen = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 20},
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          style: {backgroundColor: '#1E90FF', borderTopWidth: 0},
          indicatorStyle: {
            borderBottomColor: '#fff',
            borderBottomWidth: 4,
          },
        }}>
        <Tab.Screen name="משתתף/ת" component={StudentScreen} />
        <Tab.Screen name="מדריך" component={MadrichStack} />
      </Tab.Navigator>
    </>
  );
};

export default TabsScreen;
