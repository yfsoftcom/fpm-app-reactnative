/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import {
    StyleSheet,
} from 'react-native';

export const colors = {
    lightGray:"#F0F0F0",
    lineGray: '#F0F0F0',
    green: '#80BD01',
    backGray: '#E5E5E5',
    textGray: '#9A9A9A',
    textBlack: '#333333',
    purple: '#9966CC',
    red: '#f61d4b',
    backWhite: '#F2F2F2',
    textGold: '#BC7233',
    borderColor: '#E2E2E2',
    black: '#586872',
    blue: '#4078c0',
    white: "white",
    pageBackgroundColor: '#ffffff',
    bottomLineColor:'#bfbfbf',
};

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadowLine: {
        shadowColor: '#999999',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 1
        },
    },
    sepLine: {
        backgroundColor: colors.backGray,
        height: 0.5,
    },
    textInput: {
        fontSize: 15,
        borderWidth: 1,
        height: 38,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 4,
        padding: 3,
        borderColor: colors.blue,
    },
    btn: {
        borderWidth: 1,
        height: 38,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "center",
        borderColor: colors.blue,
        backgroundColor: colors.blue,
        borderRadius: 6,
        marginTop:20,
    }
});

export const layout = {
    tabBarHeight:49,
    bottomLineHeight:0.5,
    swiperHeight:200,
}


export default commonStyles;
