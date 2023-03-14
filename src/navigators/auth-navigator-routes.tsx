import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signup';

const authRoutes = [
  {
    name: 'signin',
    component: SignInScreen,
  },
  {
    name: 'signup',
    component: SignUpScreen,
  },
];

export default authRoutes;
