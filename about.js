
import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
import { Text, View, Linking, WebView,Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
export default class app extends Component {
    render() {
      return (
        <WebView  style={{marginTop: Platform.OS === 'ios' ? 44 :0}}
        source ={{uri:'https://blog.csdn.net/generon/article/details/79728053'}}
        />
      );
    }
  }