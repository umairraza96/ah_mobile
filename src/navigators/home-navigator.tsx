import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'native-base';
import {Pressable} from 'react-native';
import {colors} from '../common/constants';
import {MaterialCommunityIcons} from '../common/icons';
import CartCounter from '../components/cart-counter';
import AccountScreen from '../screens/account';
import MyOrdersScreen from '../screens/my-orders';
import OrderScreen from '../screens/order';
import ProductScreen from '../screens/product';
import bottomNavigatorRoutes from './bottom-navigator-routes';

const BottomTab = createBottomTabNavigator();

interface BottomNavigationsProps {
  initialScreen?: string;
}

const HomeNavigator = createStackNavigator();

const HomeNavigations = () => {
  const navigation = useNavigation();
  return (
    <HomeNavigator.Navigator initialRouteName="Home">
      <HomeNavigator.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={BottomNavigations}
      />
      <HomeNavigator.Screen
        name="product"
        component={ProductScreen}
        options={{
          headerTitle: 'Product Details',
          headerRight: props => {
            return (
              <Pressable onPress={() => navigation.navigate('cart')}>
                <View mr="5">
                  <CartCounter />
                  <MaterialCommunityIcons name="cart" size={25} />
                </View>
              </Pressable>
            );
          },
        }}
      />
      <HomeNavigator.Screen
        name="order"
        component={OrderScreen}
        options={{
          headerTitle: 'Order',
        }}
      />
      <HomeNavigator.Screen
        name="myorders"
        component={MyOrdersScreen}
        options={{
          headerTitle: 'My Orders',
        }}
      />
      <HomeNavigator.Screen
        name="account"
        component={AccountScreen}
        options={{
          headerTitle: 'Account',
        }}
      />
    </HomeNavigator.Navigator>
  );
};

const BottomNavigations = ({
  initialScreen = 'home',
}: BottomNavigationsProps) => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.accentDark,
      }}
      initialRouteName={initialScreen}>
      {bottomNavigatorRoutes.map(route => (
        <BottomTab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default HomeNavigations;
