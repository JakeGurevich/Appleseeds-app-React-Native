import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ModalView from '../components/ModalView';
// import {useTheme} from 'react-native-paper';

import {AuthContext} from '../context';

import Users from '../model/users';

const SignInScreen = ({navigation}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // const { colors } = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleSignIn = () => {
    setShowModal(true);
  };
  const checkCode = code => {
    if (code === '1111') {
      setShowModal(false);
      navigation.navigate('Sign up');
    }
  };
  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      {/* <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View> */}
      {/* <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: '#1E90FF',
          },
        ]}> */}
      {/* <Text
          style={[
            styles.text_footer,
            {
              color: 'white',
            },
          ]}>
          אמייל
        </Text> */}
      <View style={styles.action}>
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
        <TextInput
          placeholder="אמייל"
          placeholderTextColor="#DCDCDC"
          style={[
            styles.textInput,
            {
              // color: colors.text
            },
          ]}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
        <Feather
          name="mail"
          // color={colors.text}
          size={20}
        />
      </View>
      {data.isValidUser ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>צריך להיות יותר מ4 אותיות</Text>
        </Animatable.View>
      )}

      {/* <Text
          style={[
            styles.text_footer,
            {
              color: 'white',
              marginTop: 35,
            },
          ]}>
          Password
        </Text> */}
      <View style={styles.action}>
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
            <Feather name="eye" color="grey" size={20} />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="סיסמה"
          placeholderTextColor="#DCDCDC"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={[
            styles.textInput,
            {
              textAlign: 'right',
            },
          ]}
          autoCapitalize="none"
          onChangeText={val => handlePasswordChange(val)}
        />
        <Feather
          name="lock"
          // color={colors.text}
          size={20}
        />
      </View>
      {data.isValidPassword ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>צריך להיות יותר מ8 אותיות</Text>
        </Animatable.View>
      )}

      <TouchableOpacity
        onPress={() =>
          Alert.alert('Oops !', 'ממש חבל !עכשיו לא תוכל להכנס למערכת !', [
            {text: 'Okay'},
          ])
        }>
        <Text style={{color: 'white', marginTop: 15}}>שכחת ?</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
          onPress={() => {
            loginHandle(data.username, data.password);
          }}>
          <Text
            style={[
              styles.textSign,
              {
                color: 'white',
              },
            ]}>
            כניסה
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSignIn()}
          style={[
            styles.signIn,
            {
              // borderColor: 'white',
              // borderWidth: 1,
              marginTop: 70,
            },
          ]}>
          <Text
            style={[
              styles.textSign,
              {
                color: 'white',
              },
            ]}>
            משתמש חדש
          </Text>
          <SimpleLineIcons name="arrow-down" size={30} color={'white'} />
        </TouchableOpacity>
        {showModal && <ModalView check={checkCode} showModal={setShowModal} />}
      </View>
      {/* </Animatable.View> */}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#1E90FF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    marginRight: 5,
    paddingLeft: 10,
    color: '#05375a',
    textAlign: 'right',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
