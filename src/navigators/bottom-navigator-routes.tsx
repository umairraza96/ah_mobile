import {View} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../common/constants';
import CartCounter from '../components/cart-counter';
import CartScreen from '../screens/cart';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import {BottomNavigatorRoutes} from './types';

const bottomNavigatorRoutes: BottomNavigatorRoutes[] = [
  {
    name: 'home',
    component: HomeScreen,
    options: {
      title: 'Alsyed Healthmart',
      tabBarLabel: 'Home',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    },
  },
  {
    name: 'search',
    component: SearchScreen,
    options: {
      title: 'Search',
      tabBarLabel: 'Search',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="magnify" color={color} size={size} />
      ),
    },
  },
  {
    name: 'cart',
    component: CartScreen,
    options: {
      title: 'My Cart',
      tabBarLabel: 'Cart',
      tabBarIcon: ({color, size}) => (
        <View style={{position: 'relative'}}>
          <CartCounter />
          <MaterialCommunityIcons name="cart" color={color} size={size} />
        </View>
      ),
    },
  },
  {
    name: 'profile',
    component: ProfileScreen,
    options: {
      title: 'Profile',
      tabBarLabel: 'Profile',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
    },
  },
];

export default bottomNavigatorRoutes;
