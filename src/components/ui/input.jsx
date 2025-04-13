import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';

const Input = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  input: {
    padding: 10,
    backgroundColor: Colors.input,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
