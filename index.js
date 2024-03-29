/**
 * @format
 */

import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/store';

const AppWithProviders = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithProviders);
