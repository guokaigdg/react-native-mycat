import React, { Component } from 'react';
//import { Container,  Header, Tab,Tabs, Button, Text, TabHeading, Icon, View,} from 'native-base';
//import { Text, View, Linking, WebView,Platform} from 'react-native';
import { View, Text, Button,StyleSheet,Image,Dimensions,ListView} from 'react-native';

//export default class GeneralExample extends Component {
// class HomeScreen extends React.Component{
//   render() {
//     return (
//           <View>
//             <Text>
//               hh
//             </Text>
//           </View>
              
//               // <WebView style={{marginTop: Platform.OS === 'ios' ? 44 :0}}
//               // source = {{uri:'http://www.todolist.cn/'}}/>
      
//     );
//   }
// }
const REQUEST_URL = 'https://api.douban.com/v2/movie/top250'
class Test extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ll:   //为数据源传递一个数组
        { image: require('./images/ad-01.jpg'),
          title: '商品1',
          subTitle: '描述1',  
        },
    }
  }

  render() {
    long = Dimensions.get('window').width
    width = Dimensions.get('screen').height
    return (
        <View>
          <View style = {{height:40}}/>
            <Text> {long} {width}</Text>
            <Text> {this.state.ll.title} </Text>
            {/* <ListView>
                {this.state.dataSource.title}  
            </ListView> */}
        </View>
    );
  }
}
export default Test; 

