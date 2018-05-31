import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import TabNavigator from './Tab'
import fpmc from 'yf-fpm-client-js'

fpmc.init({ mode: 'PRODUCT', appkey: '123123', masterKey: '123123', domain: 'http://api.yunplus.io' })
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
