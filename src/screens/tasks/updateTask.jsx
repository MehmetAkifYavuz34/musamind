import {View} from 'react-native';
import React, {useState} from 'react';
import defaultScreenStyle from '../../styles/DefaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useDispatch} from 'react-redux';
import {updateTask} from '../../store/actions/tasksActions';

const UpdateTask = ({route}) => {
  const task = route.params.task;
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();
  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      date: date,
      status: status,
    };

    dispatch(updateTask(form));
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
      <Button onPress={() => saveTask()} title="güncelle" status="warning" />
    </View>
  );
};

export default UpdateTask;
