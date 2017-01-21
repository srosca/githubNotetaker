import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    makeBackground(btn) {
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        };

        if(btn === 0){
            obj.backgroundColor = '#48BBEC'
        }else if(btn ===1){
            obj.backgroundColor = '#E77AAE'
        }else{
            obj.backgroundColor = '#758BF4'
        }

        return obj;
    }

    goToProfile(){

    }

    goToRepos(){

    }

    goToNotes(){

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}></Image>
                <TouchableHighlight
                    onPress={this.goToProfile.bind(this)}
                    style={this.makeBackground(0)}>
                    <Text style={styles.buttonText}> View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.goToRepos.bind(this)}
                    style={this.makeBackground(1)}>
                    <Text style={styles.buttonText}> View Repos</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.goToNotes.bind(this)}
                    style={this.makeBackground(2)}>
                    <Text style={styles.buttonText}> View Notes</Text>
                </TouchableHighlight>
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