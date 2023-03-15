import {Button, Text, View} from 'native-base';
import {userActions} from '../../redux/features/user';
import {useAppDispatch} from '../../redux/types';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const onSignOut = () => {
    dispatch(userActions.signOut());
  };
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button onPress={onSignOut}>Sign Out</Button>
    </View>
  );
};

export default ProfileScreen;
