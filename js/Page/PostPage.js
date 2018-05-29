import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    H3,
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'
import commonStyles, { colors } from '../styles'

class PostItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      return (
        <View
            style={ styles.postItem }
          {...this.props}
          onPress={this._onPress}
        >
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <Text style={ styles.itemAuthor }>{ this.props.author || '无名氏' }</Text>
                <Text style={ styles.itemCategory }>{ this.props.category || '默认分类' }</Text>
            </View>
            <Text style={ styles.itemTitle }>{ this.props.title }</Text>
            <Text style={ styles.itemSummary}>{ this.props.summary }</Text>
        </View>
      )
    }
}

  
export default class PostPage extends BasePage {
    static navigationOptions = {
        title: 'Posts',
    }
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [
                { id: 1, title: 'A', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
                { id: 2, title: 'B', summary: 'fdasjnnk jklvjkl jklbjkl jklb;jk ljkb'},
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
        
    }

    select = {selected: {}};

    _keyExtractor = (item, index) => item.id;
    
    _onPressItem = (id) => {
        alert(id)
    };

    _onFresh = () => {
        this.setState({
            refreshing: true,
        })
        setTimeout( ()=>{
            this.setState({
                refreshing: false,
            })
        }, 0.5 * 1000)
    }
    _renderItem = ({item}) => (
        <PostItem
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