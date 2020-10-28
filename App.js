import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './src/screens/Home'
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Home />
    </SafeAreaView>
  );
};



export default App;
