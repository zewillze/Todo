/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Todo from './views/root';
import AddTodo from './views/addTodo';



import {
  AppRegistry,
  Navigator,
} from 'react-native';


class App extends Component {
  render(){
    return(
      <Navigator
      initialRoute={{ index: 0 }}
      configureScene={this.configureScene}
      renderScene={this.navigatorRenderScene}/>
    );
  }
  configureScene(route, navigator){
    switch (route.index) {
      case 0:
        return null
      case 1:
        return Navigator.SceneConfigs.FloatFromBottom
    }
  }


  navigatorRenderScene(route, navigator) {

    switch (route.index) {
      case 0:
        return <Todo navigator={navigator}/>
      case 1:
        return <AddTodo navigator={navigator}/>
    }
  }

}
 

AppRegistry.registerComponent('Todo', () => App);
