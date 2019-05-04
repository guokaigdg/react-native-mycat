/**
 * route.js
 */

// 引入依赖
import React from "react";
import { StackNavigator } from "react-navigation";

// 引入页面组件
import ScreenHome from "../screens/ScreenHome";
import ScreenSome1 from "../screens/ScreenSome1";

// 配置路由
const AppNavigator = StackNavigator({
  ScreenHome: {
    screen: ScreenHome
  },
  ScreenSome1: {
    screen: ScreenSome1
  }
});

export default () => <AppNavigator />;