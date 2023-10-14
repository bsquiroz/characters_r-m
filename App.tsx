import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {AppProvider} from './src/context/appContext';

function App(): JSX.Element {
  return (
    <AppProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
