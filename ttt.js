import React, { Component } from 'react';
//import { Container,  Header, Tab,Tabs, Button, Text, TabHeading, Icon, View,} from 'native-base';
//import { Text, View, Linking, WebView,Platform} from 'react-native';
import { View, WebView,Text, Button,StyleSheet,Image,Dimensions,ListView} from 'react-native';
import { ActivityIndicator, Switch } from 'react-native-paper';
import { Slider } from 'react-native-gesture-handler';

class Test extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isOn: false,
  //     sliderValue: 0
  //   }
  // }
    constructor(props){
      super(props);
      this.state={
        isOn: false,
        sliderValue: 0,
        // ceshi:[
        //   {num1:测试1},
        //   {num2:测试2}
        // ],
      }
    }
  render() {
    long = Dimensions.get('window').width
    width = Dimensions.get('screen').height
    return (
          // <WebView>
          //   style={{width:'100%',height:'100%'}}
          //   source={require('./123.html')}
          //    </WebView>
          <View style ={{ flex:1,justifyContent:"center", alignItems:'center' }}>
          {/* <ActivityIndicator color="purple" size="large" />  */}
          <ActivityIndicator color="purple" size="small" /> 
          
          <Switch 
            onTintColor = "pink"  //开启时背景色
            thumbTintColor = "green"
            intColor = "black"
            
            onValueChange={()=> this.setState({
              isOn: !this.state.isOn,
              open: String(!this.state.isOn)
            })}
            value = {this.state.isOn === true}  //开关默认状态
            /> 
           
            <Text> 开关状态:
              {this.state.open}
            </Text>
            <Slider minimumValue={0}
              style = {{width:200}}
              maximumTrackTintColor='red'//右侧滑轨颜色
              minimumTrackTintColor='blue'//左侧滑轨颜色
              value = {this.state.sliderValue} //滑块初始位置------------------------------------------|
              step = {1}  //步长                                                                      |
              maximumValue = {10} //滑块长度                                                           |
              onValueChange={(value)=>this.setState({               //                               |
                sliderValue:value    //value更改为滑动获取值 <------------------------------------------|
              })}  
            />
            <Text>Slider值{this.state.sliderValue}</Text>
             
            
          </View>

       );
    }
}
export default Test; 

