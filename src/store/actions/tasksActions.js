import {Alert} from 'react-native';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

export const addNewTask = task => {
  return async dispatch => {
    dispatch({
      type: ADDTASK,
      payload: task,
    });
    Alert.alert('Task Added', 'Task has been added successfully');
  };
};

export const deleteTask = taskId => {
  return async dispatch => {
    dispatch({
      type: DELETETASK,
      payload: taskId,
    });
    Alert.alert('Task Deleted', 'Task has been deleted successfully');
  };
};

export const updateTask = task => {
  console.log('updateTask', task);
  return async dispatch => {
    dispatch({
      type: UPDATETASK,
      payload: task,
    });
    Alert.alert('Task Updated', 'Task has been updated successfully');
  };
};
