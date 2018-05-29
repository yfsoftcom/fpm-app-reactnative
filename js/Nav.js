'use strict'

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import HomePage from './HomePage'
import WebViewPage from './WebViewPage'
import NotificationPage from './NotificationPage'
/**
 *页面列表
 */
const PageList = {
  home: { screen: HomePage },
  webview: { screen: WebViewPage },
  notification: { screen: NotificationPage },
};

/**
 * 导航条配置
 */
const NavigatorConfig = ( rootName ) => {
  return {
      initialRouteName : rootName,
      navigationOptions: {
          headerBackTitle: null,
          headerTintColor: '#3399CC',
      },
  }
}

/**
 * 首页导航
 */
export const HomeStack = StackNavigator (PageList, NavigatorConfig('home'));

export const NotificationStack = StackNavigator (PageList, NavigatorConfig('notification'));
