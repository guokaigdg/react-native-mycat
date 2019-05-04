import React, { Component } from 'react';
//import { Container,  Header, Tab,Tabs, Button, Text, TabHeading, Icon, View,} from 'native-base';
//import { Text, View, Linking, WebView,Platform} from 'react-native';
import { View, WebView,Text, Button,StyleSheet,Image,Dimensions,ListView,Alert} from 'react-native';
import { ActivityIndicator, Switch } from 'react-native-paper';
import { Slider } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

class Test extends React.Component {
    constructor(){
        super();
        this.state = {
            picurl:'',
        }
    }
    _shangchauntupian(){
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
             console.log(image.path);
             this.setState({
                 picurl : image.path
             }) 
          });
    }
    _shangchauntupian2(){
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            console.log(images);
          });
    }
    _shangchauntupian3(){
        ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            console.log(video);
          });
    }
    _shangchauntupian4(){
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }

  render() {
    // const repic = 'require('+this.state.picurl+')';
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{margin:40}}>
            <Text onPress={this._shangchauntupian.bind(this)} >上传图片</Text>
            </View>
            <Text onPress={this._shangchauntupian2} >上传多张图片</Text>
            <Text onPress={this._shangchauntupian3} >上传视频</Text>
            <Text onPress={this._shangchauntupian4} >上传拍照图片</Text>
            <Image source={{uri:this.state.picurl}} style={{width:100, height:100}}/>
        </View>
    )
         
    }
}
export default Test; 

