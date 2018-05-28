import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

export default class LoadingView extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.LoadingView}>
                <ActivityIndicator color={LoadingViewConfig.backgroundColor} />
                <Text style={styles.Text}>{LoadingViewConfig.text}</Text>
             </View>
        );

    }
}

const styles = StyleSheet.create({

    LoadingView: {
        width:100,
        height:100,
        backgroundColor:'#3a3a3aee',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    Text:{
        position:'absolute',
        bottom:10,
        color:"#dcdcdc"
    }
});

const LoadingViewConfig = {
    backgroundColor:'#dcdcdc',
    text:'loading...',
};