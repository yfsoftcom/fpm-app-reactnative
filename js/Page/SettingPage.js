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
            headpic: 'https://thumbnail10.baidupcs.com/thumbnail/4d377cdba7590affadb83766afac4b65?fid=1378231486-250528-404993797863139&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-QChf0C1y7S9kM56U1zaxvVbg06g%3d&expires=8h&chkbd=0&chkv=0&dp-logid=3814652769215272643&dp-callid=0&time=1528945200&size=c256_u256&quality=90&vuk=1378231486&ft=image',
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