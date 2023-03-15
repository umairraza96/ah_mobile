import {StackNavigationOptions} from '@react-navigation/stack';
import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signup';
import {AuthRoute} from './types';

const authRoutes: AuthRoute[] = [
  {
    name: 'signin',
    component: SignInScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'signup',
    component: SignUpScreen,
    options: {
      headerTitle: 'Register',
    },
  },
];

export default authRoutes;
