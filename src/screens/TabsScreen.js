import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StudentScreen from './StudentScreen';
import MadrihScreen from './MadrihScreen';

const Tab = createMaterialTopTabNavigator();
const TabsScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Student" component={StudentScreen} />
        <Tab.Screen name="Madrih" component={MadrihScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TabsScreen;
