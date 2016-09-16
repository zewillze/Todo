'use strict'

import {
  AsyncStorage
} from 'react-native';

const STORAGE_KEY = "STORAGE_KEY";

var addTodoInfo = (todoinfo, callback) => {
  try {
      getAllTodoInfos().then((value) => {
      if (value === null){
        value = [];
      }else{
        value = JSON.parse(value);
      }

      value.push(todoinfo);

      setItems(value, callback);
    });

  }catch(e){

  }
}

var getAllTodoInfos = () => {
  return AsyncStorage.getItem(STORAGE_KEY);
}

var setItems = (values, callback) => {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(values),()=>{
    if (callback !== null){
      callback("setitem callback");
    }
  });
}


var updateInfo = (info, undo) => {
  getAllTodoInfos().then((value) => {
    if (value !== null){
      value = JSON.parse(value);

      for (var obj of value){
        if (obj.info === info){
          obj.undo = undo;
        }
      }

      // function filterByInfo(obj) {
      //     if (obj.info === info){
      //       obj.undo = undo;
      //       return true;
      //     }
      //     return false;
      // }
      // let filterInfos = value.filter(filterByInfo);

      setItems(value, null);
    }
  });
}

var deleteInfo = (info, callback) => {
  getAllTodoInfos().then((value) => {
    if (value !== null) {
      value = JSON.parse(value);
      for (var obj of value){
        if (obj.info === info){
           let idx = value.indexOf(obj);
           if (idx > -1){
             console.log("found and delete at ", idx);
             value.splice(idx, 1)
           }
        }
      }
      setItems(value, callback);


    }
  });
}


export {addTodoInfo, getAllTodoInfos, updateInfo, deleteInfo};
