import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/auth-navigator';
import BottomNavigations from './src/navigators/bottom-tab-navigator';
import {useAppSelector} from './src/redux/types';

function App() {
  const {user} = useAppSelector(state => state.user);
  return (
    <NavigationContainer>
      {user ? <BottomNavigations /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
