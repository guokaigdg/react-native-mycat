
import React, { Component } from 'react';
//import { Container, Header, Content, Icon, Button } from 'native-base';
import { Text, View, Linking, WebView,Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Main from './shop';  
import NativeBase  from './nativebase';
import Icon from 'react-native-vector-icons/Ionicons';
import Test  from './ttt';
import login2  from './login2';
class HomeScreen extends React.Component {
  render() {
    return (
         <WebView style={{marginTop: Platform.OS === 'ios' ? 44 :0}}
         source = {{uri:'https://www.bilibili.com/'}}/>
            
    );
  }
}
class Wode extends React.Component {
  render() {
    return (
      
      <WebView  style={{marginTop: Platform.OS === 'ios' ? 44 :0}}
      source ={{uri:'https://github.com/guokaigdg/React-native-app-guokai/blob/master/README.md'}}
      />
     
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Login:{
    screen:Wode,
    navigationOptions: {
      tabBarLabel:"登录",
      tabBarIcon:({tintColor})=>(
        <Icon name="logo-octocat" size={25} color='#363636'/> 
      ),
    }
  },
  Bilibili: {
    //screen: HomeScreen,
    screen:HomeScreen,
    navigationOptions: {
      tabBarLabel:'Google',
      tabBarIcon:({tintColor})=>(
        <Icon name="logo-google" size={25} color='#363636'/> 
      ),
    }
  },
  商店: {
      screen: Main,
      navigationOptions: {
      tabBarLabel:'whatsapp',
      tabBarIcon:({tintColor})=>(
        <Icon name="logo-whatsapp" size={25} color='#363636'/> 
      ),
    }
  },
  RnBase: {
    screen: NativeBase,
    navigationOptions: {
      tabBarLabel:'snapchat',
      tabBarIcon:({tintColor})=>(
        <Icon name="logo-snapchat" size={25} color='#363636'/> 
      ),
    }
  },
  Test:{
    screen:login2,
    navigationOptions: {
      tabBarLabel:"Your_Girl",
      tabBarIcon:({tintColor})=>(
        <Icon name="logo-octocat" size={25} color='#363636'/> 
      ),
    }
  },

  
    
});

export default createAppContainer(TabNavigator);
