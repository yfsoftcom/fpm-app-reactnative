'use strict'

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import HomePage from './HomePage';
/**
 *页面列表
 */
const PageList = {
  home: { screen: HomePage },
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
export const HomeNavigator = StackNavigator (PageList, NavigatorConfig('home'));
