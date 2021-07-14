import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DateTimePicker from '../components/DateTimePicker';

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
      <DateTimePicker type="date" setDate={setDate} />
      <DateTimePicker type="time" setTime={setTime} />
      <View>
        <Text>{time && console.log(time.getHours(), time.getMinutes())}</Text>
        <Text>{date && console.log(date.getDate())}</Text>
      </View>
    </View>
  );
};

export default SingleCourseScreen;
