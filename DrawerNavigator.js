
import React, { Component } from 'react';
import { Text, View, Linking, Button,WebView,Platform,StyleSheet,tintColor,Image,styles} from 'react-native';
import { createAppContainer,createStackNavigator,createDrawerNavigator } from 'react-navigation';
import Main from './shop';  
class HomeScreen extends React.Component {
  render() {
    return (
         <WebView style={{marginTop: Platform.OS === 'ios' ? 44 :0}}
         source = {{uri:'https://www.bilibili.com/'}}/> 
    );
  }
}
class Weibo extends React.Component {
  render() {
    return (
      <WebView  style={{marginTop: Platform.OS === 'ios' ? 44 :0}}
      source ={{uri:'https://blog.csdn.net/generon/article/details/79728053'}}
      />
    );
  }
}
class Test extends React.Component {
  render() {
    return (
        //<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button 
          title = "点击唤器Drawer"
          onPress={() => this.props.navigation.openDrawer()} 
        />
        <View style={{marginTop:20}}>
        <Button 
          title = "BottomTabNavigator" 
          onPress={() => {
              this.props.navigation.navigate('BottomTabNavigator',{
              itemId :86,
              otherParam:'参数传递测试',
              name:"guokai",
             });
            } }
        />
         </View>
      </View>
    );
  }
}
const TabNavigator = createDrawerNavigator({
  Test:Test,
  Bilibili: HomeScreen,
  商店: {screen: Main},
  博客:Weibo,
  
});

export default createAppContainer(TabNavigator);
