import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    ListItem,
    Text,
    View,
    SectionList,
    H1,
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'
import { colors } from '../styles'

export default class SettingPage extends BasePage {
    static navigationOptions = {
        title: 'Setting',
    }
    // 初始化模拟数据
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    
                </View>
                {/* <SectionList
                    renderItem={({item}) => <ListItem title={item.title} />}
                    renderSectionHeader={({section}) => <H1 title={section.key} />}
                    sections={[ // 不同section渲染相同类型的子组件
                        {data: ['aaa', 'bbb'], key: 'Common'},
                        {data: ['ccc', 'ddd'], key: 'Advance'},
                    ]}
                /> */}
                <Text> Setting Here</Text>
            </View>
        )
    }
}