import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Calendar, Edit, More, Trash} from 'iconsax-react-native';
import {setColor} from '../../utils/function';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/actions/tasksActions';
import {useNavigation} from '@react-navigation/native';
import {UPDATETASK} from '../../utils/routes';

const TaskItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const deleteItem = () => {
    Alert.alert('uyarı', 'kayıt silinecek emin misiniz?', [
      {
        text: 'Hayır',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Evet',
        onPress: () => dispatch(deleteTask(item.id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: setColor(item.status),
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 100,
              paddingVertical: 8,
              width: 120,
            }}>
            <Text style={{color: 'white', fontWeight: 500}}>{item.status}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Calendar size={20} color="black" />
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity onPress={deleteItem}>
          <Trash size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(UPDATETASK, {task: item})}>
          <Edit size={25} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: 'black',
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
  },
});
