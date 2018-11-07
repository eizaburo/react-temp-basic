import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}
