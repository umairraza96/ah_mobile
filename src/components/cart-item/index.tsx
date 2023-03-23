import {Divider, IconButton, Image, Text, View} from 'native-base';
import {colors} from '../../common/constants';
import {MaterialCommunityIcons} from '../../common/icons';
import {cartActions} from '../../redux/features/cart';
import {Product} from '../../redux/features/product/products.types';
import {useAppDispatch} from '../../redux/types';
import {useImageOrPlaceholder} from '../../utils';
import styles from './styles';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({product, quantity}: CartItemProps) => {
  const dispatch = useAppDispatch();

  function onAddQuantity() {
    dispatch(cartActions.addToCart(product));
  }

  function onSubtractQuantity() {
    dispatch(cartActions.decreaseQuantity(product));
  }

  function onRemoveFromCart() {
    dispatch(cartActions.removeFromCart(product));
  }
  return (
    <View>
      <View
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mt="1">
        <View flex={0.3} shadow="2" borderRadius="lg">
          <Image
            borderRadius={'lg'}
            source={useImageOrPlaceholder(product.image)}
            alt="product-image"
            height={120}
            width={'full'}
          />
        </View>
        <View display="flex" flexDirection="column" flex={0.66}>
          <Text fontSize="lg">{product.name}</Text>
          <View display="flex" flexDirection="column" p="1">
            <Text fontSize="md">
              {quantity} x {product.type}
            </Text>
            <Text bold fontSize="md">
              RS. {quantity * product.price}
            </Text>
          </View>
          <View display="flex" flexDirection="row" flex="1" alignItems="center">
            {quantity > 1 ? (
              <IconButton
                bgColor="orange.400"
                borderRadius="xl"
                onPress={onSubtractQuantity}
                _pressed={{
                  style: {
                    backgroundColor: colors.accentDark,
                  },
                }}
                icon={
                  <MaterialCommunityIcons
                    color={colors.white}
                    size={14}
                    name="minus"
                  />
                }
              />
            ) : (
              <IconButton
                bgColor="orange.400"
                borderRadius="xl"
                onPress={onRemoveFromCart}
                _pressed={{
                  style: {
                    backgroundColor: colors.accentDark,
                  },
                }}
                icon={
                  <MaterialCommunityIcons
                    color={colors.white}
                    size={14}
                    name="trash-can"
                  />
                }
              />
            )}
            <Text fontSize="2xl" mx="2">
              {quantity}
            </Text>
            <IconButton
              bgColor="orange.400"
              borderRadius="xl"
              onPress={onAddQuantity}
              _pressed={{
                style: {
                  backgroundColor: colors.accentDark,
                },
              }}
              icon={
                <MaterialCommunityIcons
                  color={colors.white}
                  size={14}
                  name="plus"
                />
              }
            />
          </View>
        </View>
      </View>
      <Divider mt="3" />
    </View>
  );
};

export default CartItem;
