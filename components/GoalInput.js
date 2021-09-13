import React, { useState } from 'react'
import {
    StyleSheet, Text, View, ScrollView,
    TextInput, Button, FlatList, Modal
} from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const addGoalHandlder2 = () => {
        props.onAddGoal(enteredGoal)
        //  Make the input as empty string after add a goal
        setEnteredGoal('')
        
    }


    return (
        <Modal visible={props.visibleApp} animationType='fade' >
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder='Course Goal' style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title='ADD' onPress={addGoalHandlder2} />
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'red',
        borderWidth: 1,
        margin: 10,
        padding: 10
    },
})

export default GoalInput
