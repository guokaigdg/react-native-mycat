
import React, { Component } from 'react';
//import { Container,  Header, Tab,Tabs, Button, Text, TabHeading, Icon, View,} from 'native-base';
import { View, WebView,Text, Button,StyleSheet,Image,Dimensions,ListView,Platform,TextInput,ImageBackground} from 'react-native';
import { ActivityIndicator, Switch } from 'react-native-paper';
import { Slider } from 'react-native-gesture-handler';
import Test from './ttt';

class login extends React.Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
        }
    }
    //输入用户名时触发的方法
    render(){

        return(
            <ImageBackground 
                style={{ flex:1,width: '100%',height: '100%',position: 'relative'}}
                source={require('./images/duobeiyunapp/login.png')}
                resizeMode="stretch"
            >
            <View style={{flex:1,justifyContent:"center", alignItems:"center", marginTop: Platform.OS === "ios"? 44:0 }} >
                <Text> 账户: {this.state.username} ,用户名: {this.state.password}</Text>
                <View style={styles.inputWrap}>
                  <Text> 账户: </Text>
                  <View style={styles.dividingLine} />
                <TextInput  
                    placeholder ={"  Your Accounut"}
                    onChangeText = {(value)=>this.setState({
                        username:value,
                    })}
                />
                </View>
                <View style={styles.inputWrap}>
                  <Text> 密码: </Text>
                  <View style={styles.dividingLine} />
                <TextInput  
                    secureTextEntry={true} 　//密文密码
                    placeholder ={"  Your password"}
                    onChangeText = {(value)=>this.setState({
                        password:value,
                    })}
                />
                </View>
                <View style={styles.button}>
                <Button   
                    title="登录"
                    color= {Platform.OS=='ios'? 'white': 'blue'  } //文本的颜色(iOS)，或是按钮的背景色(Android)
                    
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                      }}
                />
                </View>
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    inputWrap: {
        width: 200,
        height: 38,
        marginTop: 10,
        //backgroundColor:'red',
        flexDirection: 'row',      //横向排列
        justifyContent: "flex-start",  
        alignItems: 'center',
        borderBottomWidth: 1,   //底部虚线
        borderBottomColor: '#b4b4b4',
        backgroundColor: 'white',
        borderRadius: 8,  //边框圆角
      },
      dividingLine: {
        marginLeft: 4,
        height: 22,
        width: 1,
        backgroundColor: '#474455',
      },
      button:{
        width: 200,
        //height: 44,
        marginTop: 10,
        //flexDirection: 'row',      //横向排列
        justifyContent: "center",  
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 8,  //边框圆角
      }
    
})

export default login;