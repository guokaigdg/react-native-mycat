/** @format */

import {AppRegistry} from 'react-native';
import App from './App'; //默认页面
//import App from './login2'; //测试页快捷
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => createAppContainer(StackNavigator));
