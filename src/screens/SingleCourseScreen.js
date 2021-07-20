import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DateTimePicker from '../components/DateTimePicker';
import DateTimePickerModal from '../components/DateTimePickerNew';

const SingleCourseScreen = ({route, navigation}) => {
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
    <View>
      <View style={styles.rowSection}>
        <DateTimePicker type="date" setDate={setDate} date={date} />
        <DateTimePicker type="time" setTime={setTime} time={time} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rowSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SingleCourseScreen;
