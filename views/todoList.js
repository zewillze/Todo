import React, { Component } from 'react';
import {updateInfo, deleteInfo} from '../helper/helper';
var cs = require('../common/commonStyle');

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


const TODOIMAGE = {
	undo: require('../images/undo.png'),
	did: require('../images/did.png')
}

class TodoListCell extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			undo: this.props.undo,
		};
	};

	_onPressButton() {
		let state = !this.state.undo;
		this.setState({undo:state});
    updateInfo(this.props.text, state);

	};

  _deleteInfo(){
    let info = this.props.text;
    var thiz = this;
    deleteInfo(info, ()=>{thiz.props.cb()});

  }
  _drawButton() {

    if (this.props.editing) {

      return (
        <TouchableOpacity style={[styles.editbutton,cs.smallButton]} onPress={this._deleteInfo.bind(this)}>
          <Text style={[ cs.font11, cs.mediumFont]}>
            x
          </Text>
        </TouchableOpacity>
      );
    } else {

      let picPath = this.state.undo ? TODOIMAGE.undo : TODOIMAGE.did;
      return (
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Image style={{width: 20, height: 20}} source={picPath}/>
        </TouchableOpacity>
      );
    }
  }

	render(){
		let textStyle = this.state.undo ? styles.undoText: styles.didText;
    let button = this._drawButton();
		return(
			<View style={styles.container}>
				<Text style={[textStyle, cs.font14, cs.normalFont]}>{this.props.text}</Text>
        {button}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		alignItems: 'center'
	},

	undoText: {
		color: '#dbc0ca',
	},

	didText:{
		color: '#3e434f',
	},

  editbutton: {
    backgroundColor: 'coral',
  },

  editText :{
    color: 'red',
  },
});

module.exports = TodoListCell;
