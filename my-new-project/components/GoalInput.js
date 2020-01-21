import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, ScrollView} from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(''); 
    const inputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    
      };
    return <View style={styles.inputContainer}>
        <TextInput placeholder="INPUT YOUR GOAL!"
        style={styles.inputStyle} onChangeText={inputHandler}
        value ={enteredGoal}/>
        <Button title = "ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>;
};
const styles = StyleSheet.create({inputContainer: {flexDirection: 'row', 
justifyContent: 'space-between',
alignItems: 'center'},

inputStyle: {borderBottomColor:'black',
borderWidth: 1,
width: 200}});

export default GoalInput;