import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

import TabNavigator from './Tab'

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <TabNavigator />
    );
  }
}
