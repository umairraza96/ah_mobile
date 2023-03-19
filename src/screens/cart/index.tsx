import {Button, Text, View} from 'native-base';
import {FontAwesome} from '../../common/icons';
import {useAppDispatch, useAppSelector} from '../../redux/types';

const CartScreen = () => {
  const {items, totalPrice} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Cart Screen</Text>
      {items.map((item, index) => (
        <View
          key={index}
          display={'flex'}
          flexDirection="row"
          justifyContent={'space-between'}
          alignItems="center">
          <Text>{item.product.name}</Text>
          <Text>{item.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
