import {Pressable, Text, View} from 'native-base';
import {colors} from '../../common/constants';
import {MaterialCommunityIcons} from '../../common/icons';

interface SettingTileProps {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  onPress: () => void;
}
const SettingTile = ({icon, title, subTitle, onPress}: SettingTileProps) => {
  return (
    <Pressable
      onPress={onPress}
      _pressed={{
        opacity: '0.8',
      }}>
      <View
        display="flex"
        flexDirection="row"
        py="2"
        px="2"
        borderRadius="md"
        bg="white"
        borderWidth={0.5}
        borderColor={colors.accentLight}
        shadow="1">
        <View
          flex={0.2}
          display="flex"
          justifyContent="center"
          alignItems="center">
          {icon}
        </View>
        <View flex={0.8}>
          <Text bold fontSize="md">
            {title}
          </Text>
          <Text fontSize="sm" opacity="0.7">
            {subTitle}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SettingTile;
