import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
const Profile = ({navigation}) => {
  const user = [{}];
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Text</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Text</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Text</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Text</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Text</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#1E90FF',
  },
  row: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 30,

    textAlign: 'right',
  },
  text: {
    textAlign: 'right',
    marginHorizontal: 10,
    fontSize: 20,
  },
});
export default Profile;
