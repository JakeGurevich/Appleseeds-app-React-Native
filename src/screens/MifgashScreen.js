import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '../components/DateTimePicker';
import {List} from 'react-native-paper';
import Switcher from '../components/Switcher';
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
          style={{}}
          title="נושאי הלימוד למפגש הקרוב"
          titleStyle={styles.title}>
          <View style={styles.content}>
            <Text>Text item</Text>
          </View>
        </List.Accordion>
      </View>
      <View style={styles.section}>
        <List.Accordion
          style={{textAlign: 'right'}}
          title="שיטוף סרטון/קישור"
          titleStyle={styles.title}>
          <View style={styles.content}>
            <Text>Text item</Text>
          </View>
          <View style={styles.content}>
            <Text>Text item</Text>
          </View>
        </List.Accordion>
      </View>
      <View style={styles.section}>
        <List.Accordion
          style={{textAlign: 'right'}}
          title="כאן זה המקום להערות"
          titleStyle={styles.title}>
          <View style={styles.content}>
            <Text>Text item</Text>
          </View>
          <View style={styles.content}>
            <Text>Text item</Text>
          </View>
        </List.Accordion>
      </View>

      <Switcher color="blue" textLeft="שלח תזכורת" textRight="על תשלח" />
      <View style={styles.button}>
        <TouchableOpacity
          style={{
            borderRadius: 25,
            borderColor: 'green',
            borderWidth: 1,
            paddingHorizontal: 25,
            paddingVertical: 10,
          }}>
          <Text style={{color: '#4C4CA6', fontSize: 20}}>פרסום מפגש</Text>
        </TouchableOpacity>
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
    borderRadius: 7,
    backgroundColor: 'white',
    // borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 30,
  },
  content: {
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-end',
    fontSize: 22,
    color: '#4C4CA6',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  textActive: {color: '#4C4CA6'},
  text: {color: 'grey'},
});
export default MifgashScreen;
