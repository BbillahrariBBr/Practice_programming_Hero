import { View, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function CreateTodo(props) {
    const { todoContent, setTodoContent } = props;
    return (
        <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.createTodoBox}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder="Write Here..."
                    value={todoContent},
                onChangeText={(text) => setTodoContent(text)}
                />
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.addBtn}> ADD </Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    createTodoBox: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        bottom: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: "#9b59b6",
        borderWidth: 2,
        width: 250,

    },
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#9b59b6',
        borderRadius: 10,

    },
    addBtn: {
        color: "#fff",

    },
})