import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MoreCircle} from 'iconsax-react-native';
import Colors from '../../theme/Colors';

const TasksStatusCard = ({item, value}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle size="32" color={Colors.WHITE} variant="Bulk" />
        </Pressable>
      </View>
    </View>
  );
};

export default TasksStatusCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    width: '45%',
    height: 170,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
