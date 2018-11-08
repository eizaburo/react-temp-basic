import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import createStore from './createStore';

import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail },
  },
  {
    initialRouteName: 'Home'
  }
);

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack/>
      </Provider>
    );
  }
}
