import {
    StyleSheet,
    Dimensions,
    Platform,
  } from 'react-native';
const circleSize = 8;     //注意要提前设置好
const circleMargin = 5;     //
export default StyleSheet.create({  //注意不是const styles = StyleSheet.create
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
    