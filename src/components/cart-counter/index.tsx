import {Badge, View} from 'native-base';
import {useAppSelector} from '../../redux/types';
import styles from './styles';

const CartCounter = () => {
  const {totalItems} = useAppSelector(state => state.cart);
  return (
    <View style={styles.container}>
      {totalItems ? (
        <Badge colorScheme="danger" rounded="full" variant="solid">
          {totalItems}
        </Badge>
      ) : null}
    </View>
  );
};

export default CartCounter;
