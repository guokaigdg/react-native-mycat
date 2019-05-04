/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class home extends Component {
  render() {
    return (
        <View>
          <Text>Hello world!</Text>
        </View>
    );
  }
}

// npm start 或者 react-native start 开启服务
// 编译RN react-native run-android
// 编译RN react-native run-ios --simulator "iPhone 6"