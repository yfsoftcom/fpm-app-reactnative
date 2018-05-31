import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import TabNavigator from './Tab'
import fpmc from 'yf-fpm-client-js'

fpmc.init({ mode: 'DEV', appkey: '123123', masterkey: '123123', domain: 'http://192.168.1.108:9999' })
fpmc.ping().then(()=>{
  //
  console.info('online')
})
export default class App extends Component {

  render() {
    console.disableYellowBox = true;
    return (
      <TabNavigator />
    );
  }
}
