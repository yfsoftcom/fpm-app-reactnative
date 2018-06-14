'use strict'

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import HomePage from './Page/HomePage'
import WebViewPage from './Page/WebViewPage'
import NotificationPage from './Page/NotificationPage'
import SettingPage from './Page/SettingPage'
import PostPage from './Page/PostPage'
import BlankTextPage from './Page/BlankTextPage'
/**
 *页面列表
 */
const PageList = {
  home: { screen: HomePage },
  webview: { screen: WebViewPage },
  blankText: { screen: BlankTextPage },
  notification: { screen: NotificationPage },
  setting: { screen: SettingPage },
  post: { screen: PostPage },
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

export const SettingStack = StackNavigator (PageList, NavigatorConfig('setting'));

export const PostStack = StackNavigator (PageList, NavigatorConfig('post'));
