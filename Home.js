import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,Image,Platform} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'; // Version can be specified in package.json
class LogoTitle extends React.Component{
  render(){
    return(
      <Image
        source = {require('./images/40.jpeg')}
        style = {{width: 30, height: 30}}
      />
    );
  }
}
class HomeScreen extends React.Component{
  static navigationOptions =({navigation})=>{    //注意一定是 {navigation}
    return{
    headerTitle: <LogoTitle/>,
    //这个位置是单独设计仅当前页面(Home页面)顶部栏目格式
    headerStyle: {
      backgroundColor: '#7AC5CD',   //标题北京色
    },
    headerTintColor: '#fff',  //返回按钮和标题都使用这个属性作为它们的颜色
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight:(   //标题右边按钮
      <Button
        onPress={navigation.getParam('increaseCount')}
        title="Info +1"
        color = {Platform.OS === 'ios'?'#fff':'#EEC900' }
      />
    ),
    };
  }
    componentWillMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    state = {
      count: 2,
    };
    _increaseCount = () => {
      this.setState({ count: this.state.count + Math.floor( Math.random()*100 )});
    };

  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Count: {this.state.count}</Text>
      <Text style={{color:'green',fontSize: 20}}>首页</Text>
      <Text>首页点击下面按钮跳转BottomTabNavigator</Text>
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
      <Text>首页点击下面按钮跳转DrawerNavigator</Text>
      <Button 
          title = "DrawerNavigator" 
          onPress={() => {
            this.props.navigation.navigate('DrawerNavigator',{
              
             });
            } }
        /> 
      <Text>首页点击下面按钮跳转NativeBase</Text>
      <Button 
          title = "NativeBase" 
          onPress={() => {
            this.props.navigation.navigate('NativeBase',{
              
             });
            } }
        /> 
      <Text>首页点击下面按钮跳转上传照片</Text>
      <Button 
          title = "image-crop-picke" 
          onPress={() => {
            this.props.navigation.navigate('ImageCropPicker',{
              
             });
            } }
        /> 
    </View> 
    );
  }
}

export default HomeScreen; 