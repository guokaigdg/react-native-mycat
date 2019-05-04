
import React, {Component} from 'react';
import {Text,View,Image,Alert,AppRegistry,Platform,Button,StyleSheet,TouchableOpacity,ImageBackground,TextInput,} from 'react-native';
class Blink extends Component {
        constructor(props) {
          super(props);
          this.state = { isShowingText: true };
          // 每1000毫秒对showText状态做一次取反操作
          setInterval(() => {
            this.setState(previousState => {
              return { isShowingText: !previousState.isShowingText };
            });
          }, 1000);
        } 
        render() {
          // 根据当前showText的值决定是否显示text内容
          if (!this.state.isShowingText) {
            return null;
          }
          return (
            <Text>{this.props.text}</Text>
          );
      }
}
export default class App extends Component{  //主页面
  render() {
    let pic = {
      uri: 'https://img-blog.csdnimg.cn/20181209132253692.jpg'
    };
    return (
      <ImageBackground 
      style={{ flex:1,width: '100%',height: '100%',position: 'relative'}}
      source={require('./images/duobeiyunapp/login.png')}
      resizeMode="stretch"
  >
      <View >
         <View style={{height:100}} /> 
             {/* 闪烁文字 */}
              <Text style={styles.welcome}>
                {/* <Blink text= 'Hello'/>  */}
              </Text>
            {/*image 居中显示*/}
            <View style={{alignItems:'center'}}>  
              <Image source={pic} style={styles.image}/>
            </View>
            <View style={{ alignItems:'center',justifyContent:'center'}}>
              <View style = {styles.inputWrap   } >  
                  <Text> 账户: </Text>
                  <View style={styles.dividingLine} />    
                  <TextInput placeholder = { 'Your Account'} />
              </View>        
              <View style = {styles.inputWrap}>  
                  <Text> 密码: </Text>
                  <View style={styles.dividingLine} />
                  <TextInput placeholder = {'Your Password'} />
              </View> 
            </View>

            <View style={{height:10}} /> 
            <View style={styles.login}>
            <Button
                onPress={() => {
                this.props.navigation.navigate('Home')
                //Alert.alert("登录测试项");
              }}
              title="登录"
            />
            <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}
                onPress={()=>{Alert.alert('dianji')}}>
              <Image source={pic} style={{height:50,width:50}}/>
            </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
              accessible={true}
              accessibilityLabel="Tap me!"
              onPress={this._onPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Press me!</Text>
              </View>
            </TouchableOpacity> */}

      </View>
      </ImageBackground>
    );
  }
}
// StyleSheet.create来集中定义组件的样式
const styles = StyleSheet.create({
  welcome:{
    color: 'pink',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width:200, 
    height:200,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stretch:{
    width: 50,
    height: 200,
  },
  login:{
    margin:20,
    borderRadius:16,
  },
  loginBtn: {
    width: 260,
    height: 36,
    borderRadius: 16,
    backgroundColor: '#9a74f9',
    shadowColor: '#9a74f9',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    flexDirection: 'row',
    shadowOpacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  dividingLine: {
    marginLeft: 4,
    height: 22,
    width: 1,
    backgroundColor: '#474455',
  },
  inputWrap: {
    width: 200,
    height: 44,
    marginTop: 15,
    //backgroundColor:'red',
    flexDirection: 'row',      //横向排列
    justifyContent: "flex-start",  
    alignItems: 'center',
    borderBottomWidth: 1,   //底部虚线
    borderBottomColor: '#b4b4b4',
  },

});

// 编译RN react-native run-android
 