import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import user from '../model/user';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.wrapper}>
          <AntDesign name="pluscircleo" size={60} color={'white'} />
        </TouchableOpacity>
        <View style={styles.row}>
          <Text
            style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>
            {user.firstname} {user.lastname}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{user.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{user.cityname}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{user.birthday}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{user.tznumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{user.religionname}</Text>
        </View>
      </ScrollView>
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
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: 30,
    paddingBottom: 3,

    textAlign: 'right',
  },
  text: {
    textAlign: 'right',
    marginHorizontal: 10,
    fontSize: 20,
    color: 'white',
  },
});
export default Profile;
