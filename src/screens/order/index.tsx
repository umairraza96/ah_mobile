import {Button, Input, Text, View} from 'native-base';
import {useState} from 'react';
import AMInput from '../../components/am-input';
import styles from './styles';

interface IOrderForm {
  address: string;
  phoneNo: string;
  altPhoneNo?: string;
}

const OrderScreen = () => {
  const [orderForm, setOrderForm] = useState<IOrderForm>({
    address: '',
    phoneNo: '',
    altPhoneNo: '',
  });

  function onChangeText(key: keyof IOrderForm, value: string) {
    setOrderForm({...orderForm, [key]: value});
  }

  const isDisabled = orderForm.address && orderForm.phoneNo ? false : true;

  return (
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
        <Button mb="3" size="lg" isDisabled={isDisabled}>
          Confirm Order
        </Button>
      </View>
    </View>
  );
};

export default OrderScreen;
