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
import { md5 } from '../kit'

export default class WebViewPage extends BasePage {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'NoTitled'),
            // headerRight: (
            //     <Button
            //       onPress={() => alert(md5('123'))}
            //       title="Info"
            //       color={ colors.blue }
            //     />
            //   ),
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