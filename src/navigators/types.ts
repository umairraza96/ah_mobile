import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export interface BottomNavigatorRoutes {
  name: string;
  component: React.FC;
  options?: BottomTabNavigationOptions;
}
