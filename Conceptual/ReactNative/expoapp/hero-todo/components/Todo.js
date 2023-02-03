import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Todo() {
    return (
        <View style={styles.todo}>
            <View style={styles.todoNumber}>
                <View style={styles.order}>
                    <Text>#1</Text>
                </View>
                <Text>Task One</Text>
            </View>
            <TouchableOpacity style={styles.btn}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {

    },
    todoNumber: {

    },
    order: {

    },
    btn: {

    }
})