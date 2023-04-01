import {useNavigation} from '@react-navigation/native';
import {Button, Image, Input, Text, View, useToast} from 'native-base';
import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {signIn} from '../../redux/features/user/user.thunk';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import styles from './styles';

const SignInScreen = () => {
  const {pending, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const toast = useToast();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  async function onSignIn() {
    dispatch(signIn(credentials));
  }

  function onTextChange(key: string, value: string) {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  }

  async function onRegisterHereTap() {
    navigation.navigate('signup');
  }

  useEffect(() => {
    if (error)
      toast.show({
        description: error,
      });
  }, [error]);

  const isDisabled = credentials.email && credentials.password ? false : true;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            alt="no-image"
            height={200}
            width={200}
          />
        </View>
        <Text
          bold
          fontSize="3xl"
          style={{
            textAlign: 'center',
          }}>
          Al Syed Healthmart
        </Text>
        <Text bold fontSize={'md'}>
          Sign In
        </Text>
        <View style={styles.form}>
          <Input
            placeholder="Email"
            value={credentials.email}
            onChangeText={text => onTextChange('email', text)}
            autoComplete="email"
            fontSize={'sm'}
          />
          <Input
            placeholder="Password"
            value={credentials.password}
            secureTextEntry
            autoComplete="off"
            fontSize={'sm'}
            type="password"
            onChangeText={text => onTextChange('password', text)}
          />
        </View>
        <Button isLoading={pending} isDisabled={isDisabled} onPress={onSignIn}>
          Sign In
        </Button>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginTop: 10,
          }}>
          <Button variant="ghost" onPress={onRegisterHereTap}>
            Register Here
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
