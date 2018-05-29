import React, { Component } from 'react';
import {
    TabBarIOS,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { layout, colors } from './styles'
import { HomeStack, NotificationStack, SettingStack } from './Nav'
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'


export default createBottomTabNavigator(
    {
        Console: HomeStack,
        Notification: NotificationStack,
        Setting: SettingStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName
                switch(routeName){
                    case 'Console':
                        iconName = `ios-home${focused ? '' : '-outline'}`
                        break
                    case 'Setting':
                        iconName = `ios-setting${focused ? '' : '-outline'}`
                        break
                    case 'Notification':
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`
                        break
                }
                return (<Icon name={'ios-home'} size={30} color={ colors.blue } />)
                
            },
        }),
        tabBarOptions: {
            activeTintColor: colors.blue,
            inactiveTintColor: 'gray',
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)