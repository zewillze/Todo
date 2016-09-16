import React, { Component } from 'react';
import TodoListCell from './todoList';
import AddTodo from './addTodo';
import {getAllTodoInfos} from '../helper/helper';
var cs = require('../common/commonStyle');

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,

} from 'react-native';

const Months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const Weeks = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Saturday",
];

class DateBox extends Component {

	render(){
		var date = new Date();
		let year = date.getFullYear();
		let mon = Months[date.getMonth()]
		let day = date.getDate();
 	 	let week = Weeks[date.getDay()];

		return(
			<View style={styles.dateBox}>

				<View style={styles.dateBoxLeft}>
					<View style={styles.dateBoxLeftContainer}>
						<Text style={[styles.dateColor, styles.day, cs.font22, cs.mediumFont]}>
						 {day}
						</Text>

						<View>
							<Text style={[styles.dateColor, styles.mon, cs.font8, cs.mediumFont]}>
								 {mon}
							</Text>

							<Text style={[styles.dateColor, styles.year, cs.font8, cs.normalFont]}>
								 {year}
							</Text>
						</View>
					</View>
				</View>

				<View style={[styles.dateBoxRight]}>
					<Text style={[styles.dateColor, cs.mediumFont, cs.font10]}>
						{week}
					</Text>
				</View>
			</View>

		);
	}
}

class Todo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      infos: [],
      editing: false,
    };
    this._edit = this._edit.bind(this);
    this._plusButtonPress = this._plusButtonPress.bind(this);
  }

  componentDidMount(){


    var currentRoute = this.props.navigator.navigationContext.currentRoute;
     this.props.navigator.navigationContext.addListener('didfocus', (event) => {
         //didfocus emit in componentDidMount
         if (currentRoute === event.data.route) {
            //  console.log("me didAppear");
            this._getInfos();

         } else {
            //  console.log("me didDisappear, other didAppear");
         }
      });
  }

  _getInfos(){
    getAllTodoInfos().then((value) => {
        this.setState({
          infos: JSON.parse(value),
        });
     });
  }

  _plusButtonPress(){
    this.props.navigator.push({
      index: 1,
    })
  }

  _renderTodoCell(obj, idx) {
      var thiz = this;
      return (
        <TodoListCell text={obj.info} undo={obj.undo} editing={this.state.editing}  key={idx}
          cb={(text)=> {
            console.log("delete   ", text);
            thiz._getInfos();
          }}
        />
      );
  }

  _edit() {
    let state = !this.state.editing;

    this.setState({
      editing: state,
    });

  }

  render() {
    var infoCells = [];
    var idx = 0;
    for (let value of this.state.infos){
      infoCells.push(this._renderTodoCell(value, idx));
      idx ++;
    }

    return (
			<View style={styles.container}>
	        	<DateBox></DateBox>

				<View style={styles.todoList}>
					<ScrollView showsVerticalScrollIndicator={false} >
			       {infoCells}
					</ScrollView>
				</View>

				<View style={styles.plusContainer}>
  					<TouchableOpacity style={styles.plusButton} onPress={this._plusButtonPress}>
  					       <Image style={{width: 40, height: 40}}source={require('../images/plus.png')}/>
  				  </TouchableOpacity>

            <TouchableOpacity  style={[styles.editbutton,cs.normalButton]} onPress={this._edit}>
                <Text ref="editLabel" style={[cs.font11, cs.normalFont, styles.editText]}>
                  {this.state.editing? "Done": "Edit"}
                </Text>
            </TouchableOpacity>
				</View>
	     </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 54,
  	marginRight: 54,
  	flex : 1,
  },
  dateBox: {
	marginTop: 50,
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },

  dateBoxLeft: {
  	justifyContent: 'center',

	flexDirection: 'row',
 	alignItems: 'flex-start'
  },

  dateBoxLeftContainer :{
  	flexDirection:'row',
  	alignItems: 'center',
  	marginTop: 5
  },

  dateBoxRight: {
  	justifyContent: 'center',

  },

  dateColor: {
  	color: '#616473',
  },

  day: {
    marginTop: 4,
  },

  mon: {
  	marginLeft: 5,
  },
  year: {
  	marginLeft: 5,
  },
  todoList: {
	 marginTop: 64,
	 flex : 1,
  },
  plusContainer: {
     width: 120,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignSelf: 'center'
  },
  plusButton: {
  	width: 40,
  },
  editbutton: {
    backgroundColor: 'beige'
  },
  editText :{
    color: 'gray'
  },
});


module.exports = Todo;
