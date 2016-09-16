import React, { Component } from 'react';
import {addTodoInfo} from '../helper/helper';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

var dismissKeyboard = require('dismissKeyboard');
var cs = require('../common/commonStyle');


class AddTodo extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      todoText: '',
    };
    this._addTodo = this._addTodo.bind(this);
    this._cancel = this._cancel.bind(this);
  }


  containerTouched(event) {
    this.refs.textInput.blur();
    return false;
  }

  _addTodo() {
    console.log(this.state.todoText);
    let todoText = this.state.todoText;
    var thiz = this;
    if (todoText.length > 0){
      addTodoInfo({info: todoText, undo: false}, (s) => {thiz._cancel()});
    }
  }

  _cancel() {
    this.props.navigator.pop();
  }

  render(){
    return(
      <TouchableWithoutFeedback  onPress={()=> dismissKeyboard()}>
      <View style={styles.container} onStartShouldSetResponder={this.containerTouched.bind(this)}>
          <TextInput
            style={[styles.input, cs.mediumFont]}
            returnKeyType="done"
            maxLength = {30}
            multiline={false}
            onChangeText={(todoText) => this.setState({todoText})}
            placeholder="input something"
            autoFocus
          />

          <View style={styles.buttonsBox}>

            <TouchableOpacity style={[styles.done, cs.bigButton]} onPress={this._addTodo}>
              <Text style={[cs.font13,cs.normalFont,styles.text, styles.doneText]}>
                Add
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.cancel,cs.bigButton]} onPress={this._cancel}>
              <Text style={[cs.font13,cs.normalFont, styles.cancelText]}>
                Cancle
              </Text>
            </TouchableOpacity>

          </View>

      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    marginTop: 100,
    marginLeft: 54,
    marginRight: 54,
    height: 30,
    fontSize: 14,
    borderColor: 'gray',
    borderBottomWidth: 1.5,
    borderRadius: 5,
  },
  buttonsBox: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 150,
    justifyContent: 'space-between',

  },
  done: {
    backgroundColor: 'deepskyblue'
  },
  cancel: {
    backgroundColor: 'beige'
  },
  doneText: {
    color: 'white'
  },
  cancelText :{
    color: 'gray'
  },
})
module.exports = AddTodo;
