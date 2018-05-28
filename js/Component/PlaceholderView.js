import React, {Component} from 'react';
import {
    Text,
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import LoadingView from './LoadingView'


export  default class PlaceholderView extends Component {

    constructor(props) {
        super(props);

    };

    render() {
        if (this.props.isLoading === 1) {
            return(
                <Modal transparent={true}>
                    <View style={styles.container}>
                        <LoadingView/>
                    </View>
                </Modal>
            );
        }else if (this.props.isLoading === -1){
            return(
                <TouchableOpacity
                    onPress={this.props.reloadEvent}
                    style={styles.container}
                >
                    <Text style={styles.Text}>加载失败，点击重试</Text>
                </TouchableOpacity>
            );
        }else {
            return null;
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
    },

    Text:{
        color:"tomato"
    }
});