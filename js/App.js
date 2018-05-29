import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import TabNavigator from './Tab'
import fpmc from './Sdk'
fpmc.init({ mode: 'DEV', appkey: '123123', masterkey: '123123' })
export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <TabNavigator />
    );
  }
}
