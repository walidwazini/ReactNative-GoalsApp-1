import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
  TextInput, Button, FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHanlder = () => {
    console.log(enteredGoal)
    setCourseGoals(currentGoals => [...courseGoals, {
      id: Math.random().toString(),
      val: enteredGoal
    }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput
          placeholder='Course Goal' style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHanlder} />
      </View>
      <FlatList
      keyExtractor={(item, index) => item.id}
        // FlatList automatically add keys to our item
        data={courseGoals} renderItem={itemData => (
         <GoalItem goalTitle={itemData.item.val} />
        )} />

      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'red',
    borderWidth: 1,
    padding: 10
  },
 

});
