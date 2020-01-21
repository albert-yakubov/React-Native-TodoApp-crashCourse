import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TextInput } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [listGoals, setListGoals] = useState([]);
  

  const addGoal = goalTitle => {
    setListGoals(current => [...current, {id: Math.random().toString(), value: goalTitle}]);
  };


  return (
    <View style={styles.screen} >
    
        <GoalInput onAddGoal={addGoal}/>

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={listGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value}/>}

      />  
    </View>

    
  );
} 

const styles = StyleSheet.create({
screen: {padding: 50},





});

