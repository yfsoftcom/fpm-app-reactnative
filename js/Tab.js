import React, { Component } from 'react';
import {
    TabBarIOS,
    Image,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { layout, colors } from './styles'
import { HomeStack, NotificationStack, SettingStack, PostStack, PluginStack } from './Nav'
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'


export default createBottomTabNavigator(
    {
        Console: HomeStack,
        Post: PostStack,
        Plugin: PluginStack,
        Notification: NotificationStack,
        Setting: SettingStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = 'home' //,tintColor = focused? colors.blue: colors.lightGray
                
                switch(routeName){
                    case 'Console':
                        iconName = 'home'
                        break
                    case 'Post':
                        iconName = 'clone'
                        break
                    case 'Setting':
                        iconName = 'cogs'
                        break
                    case 'Plugin':
                        iconName = 'plug'
                        break
                    case 'Notification':
                        iconName = 'envelope'
                        break
                }
                return (<Icon name={ iconName } size={ 24 } color={ tintColor } />)
                
            },
        }),
        tabBarOptions: {
            activeTintColor: colors.blue,
            inactiveTintColor: colors.textGray,
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)