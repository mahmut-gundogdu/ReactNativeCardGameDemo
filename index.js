/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {initAxiosSettings} from './axios.config';
import 'react-native-gesture-handler';

initAxiosSettings();

AppRegistry.registerComponent(appName, () => App);
