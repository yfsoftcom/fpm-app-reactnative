import React, {Component} from 'react';
import {
    StyleSheet,
    WebView,
    View,
    Button,
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'
import { colors } from '../styles'

export default class WebViewPage extends BasePage {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'NoTitled'),
        };
    };

    render() {
        const { navigation } = this.props;
        const url = navigation.getParam('url', 'http://blog.yunplus.io');
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: url}}
                    style={{width:'100%',height:'100%'}}
                />
            </View>
        )
    }
}