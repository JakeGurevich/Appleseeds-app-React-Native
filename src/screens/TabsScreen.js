import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StudentScreen from './StudentScreen';
import MadrihScreen from './MadrihScreen';

const Tab = createMaterialTopTabNavigator();
const TabsScreen = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 18},
          activeTintColor: '#e91e63',
          style: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen
          name="משתתף"
          component={StudentScreen}
          
        />
        <Tab.Screen name="מדריך" component={MadrihScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TabsScreen;
