import {Divider, ScrollView, Text, View} from 'native-base';
import styles from './styles';
import {MaterialCommunityIcons} from '../../common/icons';

interface OrderItemProps {
  email: string;
  orderItems: number;
  totalPrice: number;
  address: string;
}

const OrderItem = ({
  email,
  orderItems,
  totalPrice,
  address,
}: OrderItemProps) => {
  return (
    <View bg="white" shadow="1" borderRadius="md" mb="2" py="2">
      <View mb="1" style={styles.container}>
        <Text>{email}</Text>
        <Text>Total Items: {orderItems}</Text>
        <Text bold>RS. {totalPrice}</Text>
      </View>
      <Divider />
      <View display="flex" mt="1" flexDirection="row" style={styles.container}>
        <MaterialCommunityIcons
          size={16}
          color="#000000ae"
          style={{marginRight: 5}}
          name="map-marker"
        />
        <Text>{address}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
