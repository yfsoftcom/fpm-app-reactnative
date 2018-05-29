import React, {Component} from 'react';
import {
    StyleSheet,
    SectionList,
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';

import BasePage from './BasePage'
import Line from '../Component/Line'

export default class HomePage extends BasePage {
    static navigationOptions = {
        headerTitle: 'FPM Console',
    };
    constructor (props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'OS', data: [ { key: 'CPU', val: 4} , { key: 'MEM', val: '2G'} ]
                },
                {
                    title: 'Server', data: [
                        { key: 'StartAt', val: '05-29 12:00'},
                        { key: 'Version', val: 'v2.4.6'},
                        { key: 'Hostname', val: 'localhost'},
                        { key: 'Port', val: '9999'},
                        { key: 'StartAt1', val: '05-29 12:00'},
                        { key: 'Version1', val: 'v2.4.6'},
                        { key: 'Hostname1', val: 'localhost'},
                        { key: 'Port1', val: '9999'},
                        { key: 'StartAt2', val: '05-29 12:00'},
                        { key: 'Version2', val: 'v2.4.6'},
                        { key: 'Hostname2', val: 'localhost'},
                        { key: 'Port2', val: '9999'},
                        
                    ]
                },
            ],
            rotations:[],
            lastDate:0,
            refreshing:false,
        };

    };

    componentDidMount() {
        this.getNewestNews();
    };

    getNewestNews() {
        this.startLoading({
            refreshing: true,
        });

        setTimeout(() => {
          this.stopLoading({
            refreshing: false,
          })
        }, 1 * 1000)
        // MKServices.requestNewestNews().then((responseData) => {
        //     let tempData = [{
        //         key:100,
        //         data:responseData.stories
        //     }];
        //     this.stopLoading({
        //         sections: tempData,
        //         rotations: responseData.top_stories,
        //         lastDate: responseData.date,
        //         refreshing: false,
        //     });

        // }).catch((error) => {
        //     this.requestFailure();
        //     console.log(error);
        // });
    };

    getMoreNews() {

        // MKServices.requestBeforeNews(this.state.lastDate).then((responseData) => {

        //     let tempData = this.state.sections;
        //     tempData.push({
        //         key:responseData.date,
        //         data:responseData.stories
        //     });
        //     this.setState({
        //         sections: tempData,
        //         lastDate: responseData.date,
        //     })
        // }).catch((error) => {
        //     console.log(error);
        // });
    };

    placeholderOnRefresh() {
        this.getNewestNews();
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


    render () {
        return super.render(
            <View style={[ styles.container ]}>
                {/* <Text style={[ styles.h3 ]}>Primary Info</Text> */}
                <SectionList
                    sections={ this.state.sections }
                    renderItem={ this.renderItem.bind(this) }
                    renderSectionHeader={ this.renderSectionHeader.bind(this) }
                    ItemSeparatorComponent={ Line }
                    />
            </View>
          )
    };

}

const styles = StyleSheet.create({
    h3: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    container: {
        flex: 1,
        // paddingTop: 4
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