import React, { Component } from 'react';
import {
  Platform,
  Alert,
} from 'react-native';
// import TabNavigator from './Tab'
import DrawerNavigator from './Drawer'
import fpmc from 'yf-fpm-client-js'
import JPushModule from 'jpush-react-native'

fpmc.init({ mode: 'PRODUCT', appkey: '123123', masterKey: '123123', domain: 'http://api.yunplus.io' })
fpmc.ping().then(()=>{
  //
  console.info('online')
})
export default class App extends Component {

  
  componentDidMount(){
    if (Platform.OS === 'android') {
      JPushModule.initPush()
      JPushModule.getInfo(map => {
        this.setState({
          appkey: map.myAppKey,
          imei: map.myImei,
          package: map.myPackageName,
          deviceId: map.myDeviceId,
          version: map.myVersion
        })
      })
      JPushModule.notifyJSDidLoad(resultCode => {
        if (resultCode === 0) {
        }
      })
    } else {
      JPushModule.setupPush()
    }

    JPushModule.addReceiveOpenNotificationListener(map => {
      const extras = JSON.parse(map.extras)
      Alert.alert(map.title || 'Notify', map.alertContent)
    })

    JPushModule.addGetRegistrationIdListener(registrationId => {
      console.log('Device register succeed, registrationId ' + registrationId)
    })
  }
  render() {
    console.disableYellowBox = true;
    return (
      <DrawerNavigator />
    );
  }
}
