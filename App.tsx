import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/auth-navigator';
import BottomNavigations from './src/navigators/bottom-tab-navigator';

function App() {
  return (
    <NavigationContainer>
      {/* <BottomNavigations /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
