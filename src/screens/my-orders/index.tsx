import {Text, View} from 'native-base';
import {useEffect} from 'react';
import {getAllOrders} from '../../redux/features/order/order.thunk';
import {useAppDispatch, useAppSelector} from '../../redux/types';

const MyOrdersScreen = () => {
  const dispatch = useAppDispatch();
  const {orders} = useAppSelector(state => state.orders);
  async function fetchOrders() {
    await dispatch(getAllOrders());
  }

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <View>
      {orders.map((order, index) => (
        <Text key={index}>{order.id}</Text>
      ))}
    </View>
  );
};

export default MyOrdersScreen;
