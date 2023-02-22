import {Button} from 'native-base';
import {View, Text} from 'react-native';
import AMCarousel from '../../components/am-carousel';

const HomeScreen = () => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <AMCarousel />
      </View>
    </View>
  );
};

export default HomeScreen;
