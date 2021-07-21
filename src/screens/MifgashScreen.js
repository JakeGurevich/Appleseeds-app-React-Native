import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import DateTimePicker from '../components/DateTimePicker';
import {List} from 'react-native-paper';

const MifgashScreen = ({route, navigation}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const {title} = route.params;
  React.useLayoutEffect(() => {
    console.log(navigation, route);
    navigation.setOptions({
      title,
    });
  }, []);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rowSection}>
        <DateTimePicker type="date" setDate={setDate} date={date} />
        <DateTimePicker type="time" setTime={setTime} time={time} />
      </View>

      <View style={styles.section}>
        <List.Accordion
          style={{borderRadius: 10, color: 'blue'}}
          title="Uncontrolled Accordion"
          titleStyle={{borderRadius: 10, color: 'grey'}}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
          <Text>Text item</Text>
        </List.Accordion>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {paddingHorizontal: 20},
  rowSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {with: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    // overflow: 'hidden',
  },
});
export default MifgashScreen;
