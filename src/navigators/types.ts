import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {
  createNavigationContainerRef,
  NavigationProp,
  NavigationState,
} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';

export interface BottomNavigatorRoutes {
  name: string;
  component: React.FC;
  options?: BottomTabNavigationOptions;
}

export interface AuthRoute {
  name: string;
  component: React.FC;
  options?: StackNavigationOptions;
}

export type AuthStackParamList = {
  signin: undefined;
  signup: undefined;
};

export type BottomTabParamList = {
  home: undefined;
  search: undefined;
  cart: undefined;
  profile: undefined;
  product: {id: string};
};

export type RootStackParamList = {} & AuthStackParamList & BottomTabParamList;

export type AppNavigationProps = NavigationProp<
  NavigationState<RootStackParamList>
>;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
