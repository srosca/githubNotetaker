import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>Testing the router</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            padding: 30,
            marginTop: 65,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#48BBEC'
        }
    });