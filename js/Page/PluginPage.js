import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    H3,
    TouchableNativeFeedback,
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'
import commonStyles, { colors } from '../styles'
import fpmc from 'yf-fpm-client-js'

class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props);
    };
  
    render() {
      return (
        <TouchableNativeFeedback
          onPress={this._onPress}
        >
            <View
                style={ styles.postItem }
                {...this.props}>
                <Text style={ styles.itemTitle }>{ this.props.title }</Text>
            </View>
        </TouchableNativeFeedback>
      )
    }
}

  
export default class PluginPage extends BasePage {
    static navigationOptions = {
        title: 'Plugins',
    }
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [
                { id: 1, title: 'Wrold Cup 2018', url: 'http://tiyu.baidu.com/match/%E4%B8%96%E7%95%8C%E6%9D%AF' },
            ]
        }
    }

    componentDidMount(){
        this._onFresh()
    }

    select = {selected: {}};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (item) => {
        const { navigate } = this.props.navigation
        navigate('webview', { url: item.url || 'http://blog.yunplus.io', title: item.title || 'yunplus.io' })
    };

    _onFresh = () => {
        this.setState({
            refreshing: false,
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