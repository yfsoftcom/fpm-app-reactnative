import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'
import { colors } from '../styles'

export default class BlankTextPage extends BasePage {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Content'),
        };
    };

    render() {
        const { navigation } = this.props;
        const content = navigation.getParam('content', 'Foo');
        return (
            <View style={{flex: 1}}>
                <Text style={ styles.text }>{ content }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        padding: 10,
    },
})