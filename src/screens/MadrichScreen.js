import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';

const MadrichScreen = ({navigation}) => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <List.Accordion
        title="קורסים פעילים"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        {/* <List.Item title="Test" /> */}

        <List.Item
          title="NETA test"
          onPress={() => navigation.navigate('Courses',{title:"NETA test"})}
        />
      </List.Accordion>
      <List.Accordion
        title="קורסים לא פעילים"
        left={props => <List.Icon {...props} icon="folder" />}>
        {/* <List.Item title="First item" />
        <List.Item title="Second item" /> */}
      </List.Accordion>
    </View>
  );
};

export default MadrichScreen;
