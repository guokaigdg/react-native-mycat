/*前提条件:   页面跳转到test
import Test  from './ttt';
 */

import React, {Component} from 'react';
import {Text,
        View,
        ListView,
        StyleSheet,
        Image,
        Alert,
        AppRegistry,
        Platform,
        Button,
        TouchableHighlight,
        ImageBackground,
        TextInput,
        ScrollView,
        Dimensions,
        StatusBar,
        RefreshControl,
      } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Test  from './ttt';
const ds = new ListView.DataSource({     //创建ListView.DataSource
  rowHasChanged: (r1,r2) => r1 !== r2
});
const circleSize = 8;
const circleMargin = 5;
export default class home extends Component{  //主页面
  constructor(props){     //构造轮播图函数
    super(props);
    this.state ={
        currentPage: 0,
        dataSource: ds.cloneWithRows([   //为数据源传递一个数组
          { image: require('./images/ad-01.jpg'),
            title: '商品1',
            subTitle: '描述1',  
          },
          { image: require('./images/ad-02.jpg'),
          title: '商品2',
          subTitle: '描述1',  
          },
          { image: require('./images/ad-04.jpg'),
          title: '商品3',
          subTitle: '描述1',  
          },
          { image: require('./images/ad-03.jpg'),
          title: '商品4',
          subTitle: '描述1',  
          },
          { image: require('./images/ad-05.jpg'),
          title: '商品5',
          subTitle: '描述1',  
         },
         { image: require('./images/ad-06.jpg'),
         title: '商品6',
         subTitle: '描述1',  
         },
         { image: require('./images/ad-07.jpg'),
         title: '商品7',
         subTitle: '描述1',  
         },
         { image: require('./images/ad-08.jpg'),
         title: '商品8',
         subTitle: '描述1',  
         },
        { image: require('./images/ad-09.jpg'),
        title: '商品9',
        subTitle: '描述1',  
        },
        { image: require('./images/ad-10.jpg'),
        title: '商品10',
        subTitle: '描述1',  
        },]),
        
        advertisments:[    //轮播广告数组
        {url: 'https://img-blog.csdnimg.cn/2019011114534242.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //广东老海报
        {url: 'https://img-blog.csdnimg.cn/20190111144028927.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //上依
        {url: 'https://img-blog.csdnimg.cn/20190111144231652.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //单子
        {url: 'https://img-blog.csdnimg.cn/20190111143535201.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'},//04-22正式发售
        {url: 'https://img-blog.csdnimg.cn/2019011114422123.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //手套
        ],
        searchText: '',  //保存输入的文本
        isRefreshing: false
    };
  }
  render(){
    const advertismentCount = this.state.advertisments.length;
    //指示器圆点个数
    const indicatorWidth = circleSize * advertismentCount +
    circleMargin * advertismentCount * 2;  //计算指示器的宽度
    const left = (Dimensions.get('window').width - indicatorWidth)/2; //计算指示器最左边坐标的位置
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor = {'pink'}   //设置顶部状态栏背景颜色, 仅在Android有效
          barStyle = {'default'}              //设置默认样式
          networkActivityIndicatorVisible = {true}  //显示正在的网络请求状态, 仅在ios有效
        ></StatusBar>
        <View style={styles.searchbar}>
          <TextInput style={styles.input} placeholder='搜索商品'
            onChangeText={(text)=>{
              this.setState({searchText:text});
              console.log('输入的内容是' + this.state.searchText); //chorme Console(F12打开) 调试搜索结果 
          }}></TextInput>
          <Button style={styles.button} title='搜索'onPress = 
          {()=> {
            Alert.alert('搜索内容: ' + this.state.searchText,null,null);
          }}></Button>
        </View>

        <View style={styles.advertisment}>
          <ScrollView ref='scrollView'
            horizontal={true}   //横向轮播
            showsHorizontalScrollINdicator={false}
            pagingEnabled={true}   //分页效果
            > 
            {this.state.advertisments.map((advertisment,index) => {
              return (
                <TouchableHighlight key={index} onPress={()=>Alert.alert('你点击轮播图',null,null) }>
                  <Image style={styles.advertismentContent}
                    source={{uri:advertisment.url}}>
                  </Image>
                </TouchableHighlight>
              );
            })}      
          </ScrollView>
          <View style={[styles.indicator,{left: left}]}>
            {this.state.advertisments.map((advertisment,
            index)=>{
              return (<View key={index}
                  style={(index === this.state.currentPage)
                  ? styles.circleSelected
                  : styles.circle}/>);
            })}
          </View>
        </View >
        <View style={styles.products}>       
           <ListView 
            dataSource={this.state.dataSource}   
            renderRow = {this._renderRow}
            renderSeparator = {this._renderSeperator}  //渲染分割线
            refreshControl = {this._renderRefreshControl()}
           />
        </View>
      </View>
    );
  }
  //标签使用{value}的方法取值
  _onPress(){
    this.props.navigation.navigate('Test');
  }
  _renderRow = (rowData, sectionID, rowID)=> {
    return (
      <TouchableHighlight onPress={()=> Alert.alert('你点击商品',null,null)}>
      <View style={styles.row}>
          <Image source={rowData.image}
            style={styles.productImage}>
          </Image>
          <View style={styles.productText}>   
          {/* flexDirection:默认是是column竖直*/}
            <Text style={styles.productTitle}>{rowData.title}>
            </Text>
            <Text style={styles.productSubTitle}>{rowData.subTitle}>
            </Text>
          </View>
      </View>
      </TouchableHighlight>
      //-------------------------------------点击跳转-start---------------------------------
      // <TouchableOpacity
      //    onPress= {this._onPress.bind(this)}
      //    //onPress={()=> Alert.alert('你点击商品',null,null)}
      // >
      //     <View style={styles.row}>
      //     <Image source={rowData.image}
      //       style={styles.productImage}>
      //     </Image>
      //     <View style={styles.productText}>   
      //     {/* flexDirection:默认是是column竖直*/}
      //       <Text style={styles.productTitle}>{rowData.title}>
      //       </Text>
      //       <Text style={styles.productSubTitle}>{rowData.subTitle}>
      //       </Text>
      //     </View>
      // </View>
      // </TouchableOpacity>
      //-------------------------------------点击跳转-end------------------------------------
    );
  }
  _renderSeperator(sectionID, rowID, adjacentRowHighlighted){
    return(
      <View key = {`${sectionID} - ${rowID}`} style = {styles.divider}>
      </View>
    );
  }
  _renderRefreshControl(){
    return (
      <RefreshControl   
      refreshing = {this.state.isRefreshing} //通过this.state.isRefreshing设置RefreshControl是否刷新
      onRefresh = {this._onRefresh}
      tintColor = {'#FF0000'}
      title = {'长在刷新数据, 请稍等...'}
      titleColor = {'#0000FF'}>
      </RefreshControl>
    );
  }
_onRefresh = () => {
  this.setState({isRefreshing: true});  //设置装状态为正在刷新
  setTimeout( ()=>{                     //设置状态为结束刷新
       const products = Array.from(new Array(10)).map((value,
       index) => ({
        image: require('./images/ad-033.jpg'),
        title: '新商品' + index,
        subTitle: '新商品描述' + index,
       }));
    this.setState({isRefreshing:false, dataSource: ds.cloneWithRows(products)}); //定时器时间间隔1.5s
  },1500);
}
  componentDidMount(){
    this._startTimer();
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  _startTimer(){
    this.interval = setInterval(() =>{
      nextPage = this.state.currentPage + 1;
      if(nextPage >= 5){
        nextPage = 0;  //如果翻滚到最后一页,下次翻滚第一页
      }
      this.setState({currentPage:nextPage});
        const offSetX = nextPage * Dimensions.get('window').width;
        this.refs.scrollView.scrollResponderScrollTo({ x:offSetX, y:0, animated:true});
    },2000);   //定时器间隔时间20000毫秒
  }

}
//-------------------------------------------------格式------------------------------------------------------------------
const styles = StyleSheet.create({
    container:{
      flex:1,
      //padding:23,
    },
    searchbar:{
      marginTop: Platform.OS === 'ios' ? 44 :0,   //状态栏
      height: 40,
      flexDirection: 'row',   //子元素在父容器中的排列位置 row横向,culumn纵向
    },
    input:{
      flex:1,
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 6,  //边框圆角
    },
    button:{
      flex:1,
    },
    advertisment:{
      //marginTop: 20,
      height: 180,
      //flexDirection:'culumn',
      backgroundColor:'pink',
    },
    advertismentContent:{
      height: 180,
      width: Dimensions.get('window').width,
    },
    products:{
      flex:1,
    },
    row:{
      height: 60,
      justifyContent: "center",
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    indicator:{
      position: 'absolute',
      top: 160,
      flexDirection: 'row',
    },
    circle:{
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      marginHorizontal:circleMargin,
    },
    circleSelected:{
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor:'white',
      marginHorizontal:circleMargin,
    },
    row:{
      height:60,
      flexDirection:'row',
      alignItems:'center',
    },
    productImage:{
      width: 40,
      height: 40,
      marginLeft: 10,
      marginRight: 10,
      alignSelf: 'center',
    },
    productText:{
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
    },
    productTitle:{
      flex: 3,
      fontSize: 16,
    },
    productSubTitle:{
      flex: 2,
      fontSize: 14,
      color: 'gray',
    },
    divider:{
      height: 1,
      width: Dimensions.get('window').width - 5,
      marginLeft: 5,
      backgroundColor: 'lightgray',
    },

});

// npm start 或者 react-native start 开启服务
// 编译RN react-native run-android
// 编译RN react-native run-ios --simulator "iPhone 6"