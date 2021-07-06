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
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          style: {backgroundColor: '#1E90FF'},
        }}>
        <Tab.Screen name="משתתף/ת" component={StudentScreen} />
        <Tab.Screen name="מדריך" component={MadrihScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TabsScreen;
