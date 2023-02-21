/**
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const AppWithProviders = () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithProviders);
