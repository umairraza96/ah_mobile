import {Badge, View} from 'native-base';
import {useAppSelector} from '../../redux/types';
import styles from './styles';

const CartCounter = () => {
  const {value} = useAppSelector(state => state.counter);
  return (
    <View style={styles.container}>
      {value ? (
        <Badge colorScheme="danger" rounded="full" variant="solid">
          {value}
        </Badge>
      ) : null}
    </View>
  );
};

export default CartCounter;
