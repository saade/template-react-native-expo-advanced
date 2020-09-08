import '~/config/reactotron.config';

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Routes from '~/routes';
import { store } from '~/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </StoreProvider>
  );
};

export default App;
