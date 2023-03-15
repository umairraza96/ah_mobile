import {Button, Image, Input, Text, View} from 'native-base';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {signUp} from '../../redux/features/user/user.thunk';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import styles from './styles';

const SignUpScreen = () => {
  const {pending, user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const [registerForm, setRegisterForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  });

  function onTextChange(key: string, value: string) {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  }

  function validateRegisterForm() {
    const {firstname, lastname, email, username, password} = registerForm;
    if (!firstname) {
      return {isValid: false, message: 'First name is required'};
    }
    if (!lastname) {
      return {isValid: false, message: 'Last name is required'};
    }
    if (!email) {
      return {isValid: false, message: 'Email is required'};
    }
    if (!username) {
      return {isValid: false, message: 'Username is required'};
    }
    if (!password) {
      return {isValid: false, message: 'Password is required'};
    }
    return {isValid: true, message: 'Form is valid'};
  }

  async function onTapRegister() {
    await dispatch(signUp(registerForm));
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            alt="no-image"
            height={100}
            width={100}
          />
        </View>
        <View style={styles.form}>
          <Input
            placeholder="First Name"
            value={registerForm.firstname}
            onChangeText={text => onTextChange('firstname', text)}
          />
          <Input
            placeholder="Last Name"
            value={registerForm.lastname}
            onChangeText={text => onTextChange('lastname', text)}
          />
          <Input
            placeholder="Email"
            value={registerForm.email}
            onChangeText={text => onTextChange('email', text)}
          />
          <Input
            placeholder="Username"
            value={registerForm.username}
            onChangeText={text => onTextChange('username', text)}
          />
          <Input
            placeholder="Password"
            value={registerForm.password}
            onChangeText={text => onTextChange('password', text)}
          />
        </View>
        <Button
          disabled={!validateRegisterForm().isValid}
          _disabled={{
            style: {
              backgroundColor: 'gray',
            },
          }}
          isLoading={pending}
          onPress={onTapRegister}>
          Register
        </Button>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
