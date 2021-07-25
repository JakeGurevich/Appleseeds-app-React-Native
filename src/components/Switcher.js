import * as React from 'react';
import {Switch} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
const Switcher = ({color, textLeft, textRight}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.switcher}>
      <Text style={!isSwitchOn ? styles.textActive : styles.text}>
        {textLeft}
      </Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={color} />
      <Text style={isSwitchOn ? styles.textActive : styles.text}>
        {textRight}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  switcher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  textActive: {color: '#4C4CA6'},
  text: {color: 'grey'},
});
export default Switcher;
