import {useRoute} from '@react-navigation/native';
import {Button, Image, Text, View} from 'native-base';
import {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {cartActions} from '../../redux/features/cart';
import {getProduct} from '../../redux/features/product/products.thunk';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import {useImageOrPlaceholder} from '../../utils';
import styles from './styles';

const ProductScreen = () => {
  const {product} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  const route = useRoute<any>();
  async function fetchProduct() {
    const productId = route.params.id;
    await dispatch(getProduct(productId));
  }

  function onAddToCartPress() {
    if (!product) return console.log('product not present');
    dispatch(cartActions.addToCart(product));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.productContainer}>
          <View display="flex" justifyContent="center" alignItems="center">
            <Image
              source={useImageOrPlaceholder(product.image)}
              width={250}
              height={250}
              alt="Product Image"
            />
          </View>
          <View my="5">
            <Text bold fontSize="lg">
              {product.name}
            </Text>
            <Text bold fontSize="md" my="2">
              Descripton
            </Text>
            <Text fontSize="sm">{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer} shadow={'1'} minHeight={120}>
        <Text bold fontSize="xl">
          RS. {product.price}
        </Text>
        <Button bg="orange.500" onPress={onAddToCartPress}>
          <Text color="white" fontSize="md">
            Add to cart
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default ProductScreen;
