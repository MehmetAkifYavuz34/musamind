import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/DefaultScreenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';
import {useNavigation} from '@react-navigation/native';
import {ADDTASK} from '../../utils/routes';
import AddTask from './addTask';

const Tasks = () => {
  const navigation = useNavigation();
  const {tasks} = useSelector(state => state.tasks);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={tasks}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}>
            Henüz veri gelmedi
          </Text>
        }
        renderItem={({item}) => <TaskItem item={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

export default Tasks;
