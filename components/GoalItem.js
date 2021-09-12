import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={props.onDelete} >
            <View style={styles.listItem} on >
                <Text>{props.itemTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },

})

export default GoalItem
 