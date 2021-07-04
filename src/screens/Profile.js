import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Profile;
