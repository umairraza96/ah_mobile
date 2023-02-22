import {Button, Text, View} from 'native-base';
import {FontAwesome} from '../../common/icons';
import {ccounterActions} from '../../redux/features/cart';
import {useAppDispatch} from '../../redux/types';

const CartScreen = () => {
  const dispatch = useAppDispatch();
  const onIncrement = () => {
    dispatch(ccounterActions.increment());
  };

  const onDecrement = () => {
    dispatch(ccounterActions.decrement());
  };
  return (
    <View>
      <Text>Cart Screen</Text>
      <Button onPress={onIncrement}>
        <FontAwesome name="plus" size={20} color="white" />
      </Button>
      <Button
        onPress={onDecrement}
        style={{
          marginTop: 20,
        }}>
        <FontAwesome name="minus" size={20} color="white" />
      </Button>
    </View>
  );
};

export default CartScreen;
