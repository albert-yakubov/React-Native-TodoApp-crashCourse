import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TextInput } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState(''); 
  const [listGoals, setListGoals] = useState([]);
  
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);

  };
  const addGoal = () => {
    setListGoals(current => [...current, {id: Math.random().toString(), value: enteredGoal}]);
  };


  return (
    <View style={styles.screen} >
    
        <View style={styles.inputContainer}>
        <TextInput placeholder="INPUT YOUR GOAL!"
        style={styles.inputStyle} onChangeText={inputHandler}
        value ={enteredGoal}/>
        <Button title = "ADD" onPress={addGoal} />
      </View>

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={listGoals} 
      renderItem={itemData => (
      <View  style={styles.listItemView}>
      <Text >{itemData.item.value}</Text>
      </View>
        )}
      />  
    </View>

    
  );
} 

const styles = StyleSheet.create({
screen: {padding: 50},

inputContainer: {flexDirection: 'row', 
justifyContent: 'space-between',
alignItems: 'center'},

inputStyle: {borderBottomColor:'black',
borderWidth: 1,
width: 200},

listItemView: {padding: 10,
        margin: 10,
            backgroundColor: '#ccc',
          borderColor: 'black',
        borderWidth: 1}

});

