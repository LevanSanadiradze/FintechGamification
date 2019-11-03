import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthPage from './components/js/AuthPage';
import MainPage from './components/js/MainPage';


const MainNavigator = createStackNavigator({
  Auth: {screen: AuthPage},
  Home: {screen: MainPage},
});

const App = createAppContainer(MainNavigator);


export default App;
