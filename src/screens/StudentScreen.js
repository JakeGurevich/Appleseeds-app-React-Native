import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {List} from 'react-native-paper';
const StudentScreen = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <List.Accordion
        title="קורסים פעילים"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Pini super Bootcamp" />
        <List.Item title="Itay awsome bootcamp" />
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

export default StudentScreen;
