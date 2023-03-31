import {ScrollView, Text, View} from 'native-base';
import {useEffect} from 'react';
import {getAllOrders} from '../../redux/features/order/order.thunk';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import OrderItem from '../../components/order-item';
import styles from './style';

const MyOrdersScreen = () => {
  const dispatch = useAppDispatch();
  const {orders, pending} = useAppSelector(state => state.orders);
  async function fetchOrders() {
    await dispatch(getAllOrders());
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (pending) return <Text>Loading...</Text>;
  return (
    <ScrollView>
      <View style={styles.container}>
        {orders.map((order, index) => (
          <OrderItem
            email={order.user.email}
            orderItems={order.order_items.length}
            totalPrice={order.total_price}
            address={order?.address ? order.address : ''}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MyOrdersScreen;
