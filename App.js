import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,Image} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'; // Version can be specified in package.json
import Iconicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import Login from './login2';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import NativeBase from './nativebase';
import ImageCropPicker from './imageCropPicker'
import SplashScreen from 'react-native-splash-screen'
class LogoTitle extends React.Component{
  render(){
    return(
      <Image
        source = {require('./images/40.jpeg')}   //你本地图片路径
        style = {{width: 30, height: 30}}
      />
    );
  }
}
class DetailsScreen extends React.Component {
    static navigationOptions =({navigation})=>{
      return{
        title: navigation.getParam('otherParam','未接收到参数'),
     };
    };
    render(){
      const {navigation} = this.props;       
      console.log(navigation.state.params.itemId);
      const itemId = navigation.getParam('itemId','86-ID');     //this.props.navigation.getParam() 获取上一个页传过来的数据
      const test = navigation.state.params.itemId               //ttest = navigation.state.params.itemId 同样可以获取上一个页传过来的数据
      const otherParam = navigation.getParam('otherParam','未接收到数据')
      const Name = navigation.getParam('name','未接收到数据')
      
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button
          onPress={() => this.props.navigation.navigate('Home')} 
          title = "Go to createBottomTabNavigator" 
        />
        <Button
        title="Go back"
        onPress ={()=>this.props.navigation.goBack()}
        />
        <Button 
          title = 'Update the title'
          onPress = {()=>this.props.navigation.setParams({otherParam:'UP'})}
        />
{/* -----------------------------------------<LogoTitle/> 独立设计组件引用组件-----------------------------------  */}
        <LogoTitle/>         
      </View>
     
      );
    }
}
const AppNavigator = createStackNavigator(
  { 
    Login: {
      screen:Login,
      navigationOptions:{
        header:null,  //隐藏标题
      }
    },
    Home: {screen: HomeScreen},
    BottomTabNavigator:{
      screen:BottomTabNavigator,
      navigationOptions:{
        //headerTitle: "TABye"
        header:null,  //隐藏标题
      }
    
    },
    DrawerNavigator:{screen:DrawerNavigator},
    NativeBase: {screen:NativeBase},
    ImageCropPicker: {screen: ImageCropPicker}, 
    Details: {screen: DetailsScreen}, 

  },
  
  {  //这个位置是所有页面通用顶部栏目格式
    initialRouteName: 'Login',    //设置默认首页
    headerMode:'float',
    defaultNavigationOptions:{
      headerStyle: 
        {
          backgroundColor: '#f4511e',   //#f4511e这个橙橘颜色好
        },
      headerTitle: '通用标题',
      headerTintColor: '#fff',  //返回按钮和标题都使用这个属性作为它们的颜色
      headerTitleStyle: {
      fontWeight: 'bold',
      },
    },
  }

);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component{
  componentDidMount() {
     //SplashScreen.hide();//关闭启动屏幕
     setTimeout(()=>{SplashScreen.hide()}, 1000, ) //3秒后关闭启动页
    }
    render(){
      {/* -----------------------------------------<AppContainer/> 独立设计组件引用组件-----------------------------------  */}
      return <AppContainer/>
    }
} 
//在react-navigation升级后必须在外部包裹一层 createAppContainer(AppNavigator),
//从源码看来createAppContainer是一个高阶组件包装了路由相关的代码，估计是为了分离view层和control层做出的修改。
