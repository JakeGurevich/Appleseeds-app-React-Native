import React, {useState} from 'react';
import {Button, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import 'moment/locale/he';
moment.locale('he');

const DateTimePicker = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    if (props.type === 'date') {
      console.log('A date has been picked: ', moment(date).format('ll'));
      props.setDate(moment(date).format('ll'));
    } else {
      console.log('A time has been picked: ', moment(date).format('LT'));
      props.setTime(moment(date).format('LT'));
    }
    hideDatePicker();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.modal} onPress={showDatePicker}>
          <Icon
            name={
              props.type === 'date'
                ? 'calendar-month'
                : 'clock-time-four-outline'
            }
            size={30}
            color={'#61B1FF'}
          />
          <Text style={{color: '#61B1FF', fontSize: 18}}>
            {props.type === 'date' && props.date
              ? props.date
              : props.type === 'time' && props.time
              ? props.time
              : props.type === 'date'
              ? 'Enter date'
              : 'Enter time'}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={props.type === 'date' ? 'date' : 'time'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};
const styles = StyleSheet.create({
  modal: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {with: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 100,
    width: 150,
    margin: 20,
    alignItems: 'center',
    color: '#61B1FF',
    paddingVertical: 10,
  },
  container: {flex: 1, alignItems: 'center'},
});
export default DateTimePicker;
