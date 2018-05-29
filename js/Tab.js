import React, { Component } from 'react';
import {
    TabBarIOS,
    Image,
} from 'react-native';

import { layout, colors } from './styles'
import { HomeStack, NotificationStack } from './Nav'
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export default createBottomTabNavigator(
    {
        Console: HomeStack,
        Notification: NotificationStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                switch(routeName){
                    case 'Console':
                        return (<Icon name="home" size={32} color="#900" />)
                        // return <Image style={{width: 32, height: 32}} 
                        //     source={ focused? require('../icons/home-heightline.png'):require('../icons/home.png') } />
                    case 'Notification':
                        return (<Icon name="mail" size={32} color="#900" />)
                }
                
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