import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StatusBar } from 'expo-status-bar';
// import './main.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      'Gilroy-Regular': require('./assets/fonts/Gilroy-Regular.ttf'),
      'Gilroy-ExtraBold': require('./assets/fonts/Gilroy-ExtraBold.ttf'),
      'PlayfairDisplay-ExtraBold': require('./assets/fonts/PlayfairDisplay-ExtraBold.ttf'),
      'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    }).then(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigation />
    </Provider>
  );
};

export default App;
