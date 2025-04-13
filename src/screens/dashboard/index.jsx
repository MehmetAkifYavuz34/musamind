import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {useSelector} from 'react-redux';
import defaultScreenStyle from '../../styles/DefaultScreenStyle';
import {GroupedBars} from '../../giftedchart/GiftedChar';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state.tasks);
  const countTasksStatus = status => {
    return tasks.filter(item => item.status === status).length;
  };
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title={'Project Summary'} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {taskStatus.map((item, index) => (
            <TasksStatusCard
              value={countTasksStatus(item.status)}
              item={item}
            />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />
        <View>
          <GroupedBars />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginRight: 5,
                backgroundColor: '#EDA7FF',
                width: 20,
                height: 9,
                borderRadius: 10,
              }}></Text>
            <Text>Review</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                marginRight: 5,
                backgroundColor: '#5fc992',
                width: 20,
                height: 9,
                borderRadius: 10,
              }}></Text>
            <Text>Complete</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {},
});
