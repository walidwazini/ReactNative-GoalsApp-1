import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
  TextInput, Button, FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const addGoalHandlder1 = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, {
      id: Math.random().toString(), val: goalTitle
    }])
    setIsAddMode(false)
  }
  //  isAddMode used as toggle for Modalcomponent
  const [isAddMode, setIsAddMode] = useState(false);
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      // goal in arg is object in currentGoals
      // id that match the goalId going to be remove
      // id that didn't match going to be filtered (not deleted)
      return currentGoals.filter((goal) => goal.id !== goalId)
      // id need to fwd to the GoalItem
    })
  }


  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visibleApp={isAddMode} onAddGoal={addGoalHandlder1} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        // FlatList automatically add keys to our item
        data={courseGoals} renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            itemTitle={itemData.item.val}
          />
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

});
