import React from 'react';
import {View,  Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return  <View  style={styles.listItemView}>
    <Text >{props.title}</Text>
    </View>;
};

const styles = StyleSheet.create({listItemView: {padding: 10,
    margin: 10,
        backgroundColor: '#ccc',
      borderColor: 'black',
    borderWidth: 1}});

export default GoalItem;