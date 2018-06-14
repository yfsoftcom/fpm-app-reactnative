import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    SectionList,
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';

import JPushModule from 'jpush-react-native'
import BasePage from './BasePage'
import Line from '../Component/Line'
import dayjs from 'dayjs'
import { Func } from 'yf-fpm-client-js'

export default class HomePage extends BasePage {
    static navigationOptions = {
        headerTitle: 'FPM Console',
    };
    constructor (props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'OS', data: [ { key: 'platform', val: '-'} , { key: 'CPUS', val: '-'} , { key: 'MEM', val: '-'} ]
                },
                {
                    title: 'Server', data: [
                        { key: 'StartAt', val: '-'},
                        { key: 'Version', val: '-'},                        
                    ]
                },
            ],
            rotations:[],
            lastDate:0,
            refreshing:false,
        };

    };

    componentDidMount(){
        const { navigate } = this.props.navigation
        if (Platform.OS === 'android') {
          JPushModule.initPush()
          JPushModule.getInfo(map => {
            this.setState({
              appkey: map.myAppKey,
              imei: map.myImei,
              package: map.myPackageName,
              deviceId: map.myDeviceId,
              version: map.myVersion
            })
          })
          JPushModule.notifyJSDidLoad(resultCode => {
            if (resultCode === 0) {
            }
          })
        } else {
          JPushModule.setupPush()
        }
    
        // JPushModule.addReceiveCustomMsgListener(map => {
        //   this.setState({
        //     pushMsg: map.message
        //   })
        //   console.log('extras: ' + map.extras)
        // })
    
        // JPushModule.addReceiveNotificationListener(map => {
        //   console.log('alertContent: ' + map.alertContent)
        //   console.log('extras: ' + map.extras)
        //   // var extra = JSON.parse(map.extras);
        //   // console.log(extra.key + ": " + extra.value);
        // })
    
        JPushModule.addReceiveOpenNotificationListener(map => {
          const extras = JSON.parse(map.extras)
          navigate('blankText', { title: 'Notification Info', content: map.alertContent })
        //   alert(JSON.stringify(map))
        //   alert(map.alertContent)
          // console.log('Opening notification!')
          // console.log('map.extra: ' + map.extras)
          // this.jumpSecondActivity()
          // JPushModule.jumpToPushActivity("SecondActivity");
        })
    
        JPushModule.addGetRegistrationIdListener(registrationId => {
          console.log('Device register succeed, registrationId ' + registrationId)
        })

        this.getSystemInfo()
      }

      getSystemInfo() {
        this.startLoading({
            refreshing: true,
        });
        new Func('system.show').invoke({})
            .then(data => {
                data = data.data
                const sections = [
                    { title: 'OS', 
                        data: [ 
                            { key: 'platform', val: data.platform },
                            { key: 'CPUS', val: data.cpus.length },
                            { key: 'MEM', val: data.freemem + '/' + data.totalmem + ' M'},
                        ] 
                    },
                    { title: 'Server', 
                        data: [ 
                            { key: 'StartAt', val: dayjs(data.startTime).format('MM-DD HH:mm') },
                            { key: 'Version', val: 'V' + data.server.version },
                        ] },
                ]
                this.setState({
                    sections
                })
                this.stopLoading({
                    refreshing: false,
                  })                
            })
            .catch(err => {
                this.stopLoading({
                    refreshing: false,
                  })
                alert(err.message || 'System Error~')
            })

        setTimeout(() => {
          
        }, 1 * 1000)

    };

    placeholderOnRefresh() {
        // this.getNewestNews();
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