import {Button, Text, View} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../common/constants';
import CartItem from '../../components/cart-item';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import styles from './style';

const CartScreen = () => {
  const {items, totalPrice} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View display={'flex'} flex="1" style={styles.container}>
          {items.map((item, index) => (
            <CartItem
              key={index}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </View>
      </ScrollView>

      <View py="2" pb="3" px="5" shadow={'2'} bgColor="white">
        <View
          display="flex"
          flexDirection="row"
          py="2"
          justifyContent="space-between">
          <Text fontSize="xl">Grand Total</Text>
          <Text bold fontSize="xl" color="orange.600">
            RS. {totalPrice}
          </Text>
        </View>
        <View>
          <Button bgColor={'orange.600'} isDisabled={totalPrice === 0}>
            <Text fontSize="md" color="white">
              Proceed to Checkout
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default CartScreen;
