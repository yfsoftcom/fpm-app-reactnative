import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    Alert,
    Button,
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
        this.state = {
            headpic: 'https://gitee.com/uploads/6/333306_yfsoft.png',
            sections: [
            ]
        }
    }

    renderItem(item) {
        return (
            <View style={[ styles.item ]}>
                <Text style={[ styles.itemTitle ]}>{ item.item.key }</Text>
                <Text style={[ styles.itemNote]}>{ item.item.val }</Text>
            </View>
        )
    }

    renderSectionHeader(section) {
        return <Text style={ styles.sectionHeader }>{ section.section.title }</Text>
    }

    onLogout() {
        Alert.alert('Tip', 'Logout Pressed')
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.row }>
                    <Image style={ styles.headpic} source={{ uri: this.state.headpic }}/>
                    <View>
                        <Text>MR.Fan</Text>
                        <Text>ID: 1001</Text>
                    </View>
                </View>
                <View style={ styles.row }>
                    <Button style={ styles.btnLogout} onPress={ this.onLogout} 
                        title="Logout"
                        color="#841584"/>
                </View>
                
                {/* <SectionList
                    sections={ this.state.sections }
                    renderItem={ this.renderItem.bind(this) }
                    renderSectionHeader={ this.renderSectionHeader.bind(this) }
                    ItemSeparatorComponent={ Line }
                /> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headpic: {
        width: 60, 
        height: 60,
        marginRight: 10,
    },
    btnLogout: {
        display: 'block',
        
    },
    container: {
        flex: 1,
        paddingTop: 10
    },
    sectionHeader: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        backgroundColor: '#eee',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 1,
        flexDirection: 'row'
    },
    itemTitle: {
        lineHeight: 24,
        flex: 1,
        height: 24,
        color: '#333'
    },
    itemNote: {
        lineHeight: 24,
        flex: 1,
        textAlign: 'right',
        height: 24,
        color: '#666'
    },
    listView: {
        flex:1,
    },
});