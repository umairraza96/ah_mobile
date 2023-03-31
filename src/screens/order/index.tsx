import {useNavigation} from '@react-navigation/native';
import {Button, Modal, View} from 'native-base';
import {useState} from 'react';
import {colors} from '../../common/constants';
import {MaterialCommunityIcons} from '../../common/icons';
import AMInput from '../../components/am-input';
import {createOrder} from '../../redux/features/order/order.thunk';
import {useAppDispatch, useAppSelector} from '../../redux/types';
import styles from './styles';

interface IOrderForm {
  address: string;
  phoneNo: string;
  altPhoneNo?: string;
}

const OrderScreen = () => {
  const {items, totalPrice, pending} = useAppSelector(state => ({
    items: state.cart.items,
    totalPrice: state.cart.totalPrice,
    pending: state.orders.pending,
  }));
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [orderForm, setOrderForm] = useState<IOrderForm>({
    address: '',
    phoneNo: '',
    altPhoneNo: '',
  });

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  function onChangeText(key: keyof IOrderForm, value: string) {
    setOrderForm({...orderForm, [key]: value});
  }

  const isDisabled = orderForm.address && orderForm.phoneNo ? false : true;

  async function onConfirmOrder() {
    if (items.length === 0) return;

    let dataToSend = {
      phone_no: orderForm.phoneNo,
      address: orderForm.address,
      alt_phone: orderForm.altPhoneNo,
      total_price: totalPrice,
      order_items: items.map((item, index) => ({
        product_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price * item.quantity,
      })),
    };

    await dispatch(createOrder(dataToSend));

    openConfirmationModal();
  }

  function openConfirmationModal() {
    setModalVisible(true);
  }

  function onDone() {
    setModalVisible(false);
    navigation.navigate('home');
  }

  return (
    <>
      <View
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        style={styles.container}
        bg="white">
        <View
          display="flex"
          flexDirection="column"
          style={{
            gap: 10,
          }}>
          <AMInput
            title="Address"
            placeholder="Enter your address"
            onChangeText={text => onChangeText('address', text)}
          />
          <AMInput
            title="Phone No."
            placeholder="Enter your phone no."
            onChangeText={text => onChangeText('phoneNo', text)}
            hint="Example: +923331234567"
          />
          <AMInput
            title="Alt Phone"
            placeholder="Enter alternate phone no."
            onChangeText={text => onChangeText('altPhoneNo', text)}
            hint="Example: +923337654321"
          />
        </View>
        <View>
          <Button
            onPress={onConfirmOrder}
            mb="3"
            size="lg"
            bgColor="orange.500"
            isLoading={pending}
            isDisabled={isDisabled}>
            Confirm Order
          </Button>
        </View>
      </View>
      {/* Success Modal */}
      <Modal isOpen={modalVisible} onClose={onDone}>
        <Modal.Content>
          <Modal.Header>Order Placed</Modal.Header>
          <View
            display="flex"
            justifyContent="center"
            mt="5"
            alignItems="center">
            <View borderRadius="full" p="1" bg="orange.300">
              <MaterialCommunityIcons size={70} name="check" />
            </View>
          </View>
          <Modal.Body>Your Order has been successfully placed.</Modal.Body>
          <Modal.Footer>
            <Button onPress={onDone} bgColor="orange.500" flex="1">
              Done
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default OrderScreen;
