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

    return (
        <Modal visible={props.visibleApp} animationType='fade' >
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder='Course Goal' style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
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
