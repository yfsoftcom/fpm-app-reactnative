import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native'

import BasePage from './BasePage'
import Line from '../Component/Line'
import { colors } from '../styles'
import fpmc from 'yf-fpm-client-js'
import dayjs from 'dayjs'

import Ionicons from 'react-native-vector-icons/Ionicons'

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
                    <Text style={ styles.itemAuthor }>{ this.props.author || '推送' }</Text>
                    <Text style={ styles.itemCategory }>{ dayjs(this.props.createAt).format('HH:mm:ss') || '刚刚' }</Text>
                </View>
                <Text style={ styles.itemTitle }>{ this.props.title }</Text>
                <Text style={ styles.itemSummary}>{ this.props.content }</Text>
            </View>
        </TouchableNativeFeedback>
      )
    }
}

export default class NotificationPage extends BasePage {
    static navigationOptions = {
        title: 'Notification',
        drawerIcon: ({tintColor}) => (
            <Ionicons name={ 'ios-home' } size={ 24 } color={ tintColor }/>
        )
    }
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [
                { id: 1, title: 'NA', content: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
            ]
        }
    }

    componentDidMount(){
        this._onFresh()
    }
    _keyExtractor = (item, index) => item.id;

    _onPressItem = (item) => {
        const { navigate } = this.props.navigation
        navigate('blankText', { title: item.title, content: item.content })
    };

    _onFresh = () => {
        this.setState({
            refreshing: true,
        })
        new fpmc.Func('jpush.getRecords')
        .invoke({ limit: 20, skip: 0})
        .then(data=>{
            this.setState({
                data: data.data.rows,
                refreshing: false,
            })
        })
        .catch(e => {
            this.setState({
               refreshing: false,
            })
            alert(e.message || 'Error')
        })
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