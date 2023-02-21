import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home';
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
];

export default bottomNavigatorRoutes;
