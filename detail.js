import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,

      } from 'react-native';
export default class detail extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    详情页
                </Text>
            </View>

        );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
    },
});