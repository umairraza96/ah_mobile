import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../common/constants';
import ProductScreen from '../screens/product';
import bottomNavigatorRoutes from './bottom-navigator-routes';

const BottomTab = createBottomTabNavigator();

interface BottomNavigationsProps {
  initialScreen?: string;
}

const HomeNavigator = createStackNavigator();

const HomeNavigations = () => {
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
