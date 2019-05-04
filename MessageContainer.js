/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, 
         View,
         Button 
       } from 'react-native';
export default class MessageContainer extends React.Component {
  render() {
    return (
        <View style ={{paddingTop:30}}>
          <Text>Hello world!</Text>
          <Button onPress={this.props.navigation.goBack()} title={'Go Back'} />
        </View>
    );
  }
}
