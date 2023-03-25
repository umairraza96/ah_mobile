import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/auth-navigator';
import HomeNavigator from './src/navigators/home-navigator';
import {useAppSelector} from './src/redux/types';

function App() {
  const {user} = useAppSelector(state => state.user);
  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
