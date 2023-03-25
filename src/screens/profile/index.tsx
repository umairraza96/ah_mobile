import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, Text, View} from 'native-base';
import {colors} from '../../common/constants';
import {MaterialCommunityIcons} from '../../common/icons';
import SettingTile from '../../components/setting-tile';
import {userActions} from '../../redux/features/user';
import {useAppDispatch} from '../../redux/types';
import styles from './styles';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const onSignOut = () => {
    dispatch(userActions.signOut());
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          display="flex"
          flexDirection="column"
          my="3"
          style={{
            gap: 10,
          }}>
          <SettingTile
            icon={
              <MaterialCommunityIcons
                name="account-circle"
                color={colors.accent}
                size={40}
              />
            }
            onPress={() => navigation.navigate('account')}
            title="Account Settings"
            subTitle="Change Personal Information"
          />
          <SettingTile
            icon={
              <MaterialCommunityIcons
                name="text"
                color={colors.accent}
                size={40}
              />
            }
            onPress={() => navigation.navigate('myorders')}
            title="My Orders"
            subTitle="Order history, Tracking"
          />
        </View>
      </ScrollView>
      <Button onPress={onSignOut}>Sign Out</Button>
    </View>
  );
};

export default ProfileScreen;
