import {NavigationContainer} from '@react-navigation/native';
import BottomNavigations from './src/navigators/bottom-tab-navigator';

function App() {
  return (
    <NavigationContainer>
      <BottomNavigations />
    </NavigationContainer>
  );
}

export default App;
