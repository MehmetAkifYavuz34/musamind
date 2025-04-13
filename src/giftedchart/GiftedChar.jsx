import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

export const GroupedBars = () => {
  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#5fc992',
    },
    {value: 20, frontColor: '#EDA7FF'},
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#5fc992',
    },
    {value: 40, frontColor: '#EDA7FF'},
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#5fc992',
    },
    {value: 25, frontColor: '#EDA7FF'},
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#5fc992',
    },
    {value: 20, frontColor: '#EDA7FF'},
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#5fc992',
    },
    {value: 40, frontColor: '#EDA7FF'},
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#5fc992',
    },
    {value: 30, frontColor: '#EDA7FF'},
  ];

  return (
    <View
      style={{
        margin: 10,
        paddingBottom: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 20,
      }}>
      <BarChart
        data={barData}
        barWidth={15}
        spacing={24}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'gray'}}
        noOfSections={6}
        maxValue={96}
        minValue={0}
      />
    </View>
  );
};
