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

  const addGoalHanlder = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, {
      id: Math.random().toString(), val: goalTitle
    }])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHanlder} />
      <FlatList
      keyExtractor={(item, index) => item.id}
        // FlatList automatically add keys to our item
        data={courseGoals} renderItem={itemData => (
         <GoalItem onDelete={() => console.log('Test Delete')} itemTitle={itemData.item.val} />
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
