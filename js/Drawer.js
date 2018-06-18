import React, { Component } from 'react';
import {
    TabBarIOS,
    Image,
    Text,
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { layout, colors } from './styles'
import { HomeStack, NotificationStack, SettingStack, PostStack, PluginStack } from './Nav'
import { DrawerNavigator } from 'react-navigation'


export default DrawerNavigator(
    {
        Console: HomeStack,
        Post: PostStack,
        Plugin: PluginStack,
        Notification: NotificationStack,
        Setting: SettingStack,
    },
    /*
    {
        drawerWidth: 240, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
        contentOptions: {
          initialRouteName: 'Console', // 默认页面组件
          // activeItemKey : 'Notifications',
          labelStyle : {//标签样式
               // color : 'red',
               height : 30,
               lineHeight: 24,
               fontSize: 14,
          },
          activeTintColor: colors.white,  // 选中文字颜色
          activeBackgroundColor: colors.blue, // 选中背景颜色
          inactiveTintColor: colors.textBlack,  // 未选中文字颜色
          inactiveBackgroundColor: colors.white, // 未选中背景颜色
          style: {  // 样式
             marginVertical: 0,
          },
          // drawerIcon: ({ focused, tintColor }) => {
          //   const { routeName } = navigation.state;
          //   let iconName = 'home'
          //   switch(routeName){
          //       case 'Console':
          //           iconName = 'ios-home'
          //           break
          //       case 'Post':
          //           iconName = 'ios-files'
          //           break
          //       case 'Setting':
          //           iconName = 'ios-cogs'
          //           break
          //       case 'Plugin':
          //           iconName = 'ios-plug'
          //           break
          //       case 'Notification':
          //           iconName = 'ios-alarm'
          //           break
          //   }
          //   return (<Ionicons name={ iconName } size={ 24 } color={ tintColor } />)
          // },
        },
        
      }//*/
)