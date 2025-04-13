import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import defaultScreenStyle from '../../styles/DefaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/tasksActions';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();
  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
    };

    dispatch(addNewTask(task));
  };
  return (
    <View style={defaultScreenStyle.container}>
      <Input
        value={title}
        onChangeText={value => setTitle(value)}
        placeholder="Please Set Title"
        title="Task input"
      />
      <Input
        value={date}
        onChangeText={value => setDate(value)}
        placeholder="Please Set Date"
        title="Task Date"
      />
      <Input
        value={status}
        onChangeText={value => setStatus(value)}
        placeholder="Please Set Status"
        title="Task Status"
      />
      <Button onPress={() => saveTask()} title="kaydet" status="success" />
    </View>
  );
};

export default AddTask;
