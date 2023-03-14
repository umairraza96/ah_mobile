import {Button, Text, View} from 'native-base';
import {signIn} from '../../redux/features/user/user.thunk';
import {useAppDispatch} from '../../redux/types';

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  async function onSignIn() {
    await dispatch(
      signIn({
        email: 'superadmin@dev.com',
        password: 'dev',
      }),
    );
  }
  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button onPress={onSignIn}>Sign In Fire</Button>
    </View>
  );
};

export default SignInScreen;
