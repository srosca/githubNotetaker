import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> This is the dashboard</Text>
                <Text> {JSON.stringify(this.props.userInfo)} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});