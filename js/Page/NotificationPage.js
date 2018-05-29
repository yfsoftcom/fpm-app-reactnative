import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'
import { colors } from '../styles'


class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props);
    };
  
    render() {
      return (
        <TouchableNativeFeedback
          onPress={this._onPress}
        >
            <View style={ styles.postItem } {...this.props}>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={ styles.itemAuthor }>{ this.props.author || '无名氏' }</Text>
                    <Text style={ styles.itemCategory }>{ this.props.category || '默认分类' }</Text>
                </View>
                <Text style={ styles.itemTitle }>{ this.props.title }</Text>
                <Text style={ styles.itemSummary}>{ this.props.summary }</Text>
            </View>
        </TouchableNativeFeedback>
      )
    }
}

export default class NotificationPage extends BasePage {
    static navigationOptions = {
        title: 'Notification',
    }
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [
                { id: 1, title: 'NA', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 2, title: 'NB', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 3, title: 'C', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 11, title: 'A', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 12, title: 'B', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 13, title: 'C', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 21, title: 'A', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 22, title: 'B', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 23, title: 'C', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
            ]
        }
    }

    componentDidMount(){
        this._onFresh()
    }
    _keyExtractor = (item, index) => item.id;

    _onPressItem = (item) => {
        const { navigate } = this.props.navigation
        navigate('webview', { url: item.url || 'http://www.baidu.com', title: item.title || 'baidu.com' })
    };

    _onFresh = () => {
        this.setState({
            refreshing: true,
        })
        setTimeout( () => {
            this.setState({
                refreshing: false,
            })
        }, 1000)
        // new fpmc.Func('system.show')
        //     .invoke({})
        //     .then(data=>{
        //         this.setState({
        //             data,
        //             refreshing: false,
        //         })
        //     })
        //     .catch(e => {
        //         this.setState({
        //            refreshing: false,
        //         })
        //         alert(e.message || 'Error')
        //     })
    }
    _renderItem = ({item}) => (
        <ListItem
          id={item.id}
          onPressItem={this._onPressItem}
          title={item.title}
          {...item}
        />
      );

    render() {
        return (
            <View style={{flex: 1, backgroundColor: colors.lightGray }}>
                <FlatList
                    data={ this.state.data }
                    extraData={this.select}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onRefresh={ this._onFresh }
                    refreshing={ this.state.refreshing }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    postItem: {
        backgroundColor: colors.white,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        flex: 1,
        marginTop: 6,
    },
    itemAuthor: {
        lineHeight: 14,
        flex: 1,
        height: 14,
        color: '#333',
        marginBottom: 6,
    },
    itemCategory: {
        lineHeight: 14,
        flex: 1,
        height: 14,
        color: colors.textGray,
        textAlign: 'right',
    },
    itemTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textBlack,
        lineHeight: 24,

    },
    itemSummary: {
        fontSize: 14,
        color: colors.textGray,
        lineHeight: 18,
    }
})