import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';

export default function App() {
  const [todoContent, setTodoContent] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.mainApp}>
        <Text style={styles.heading}>Hero Todo</Text>
        <View style={styles.todos}>
          <Todo />
          <Todo />
          <Todo />
        </View>
      </View>
      <CreateTodo todoContent={todoContent} setTodoContent={setTodoContent} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainApp: {
    paddingTop: 40,
    paddingHorizontal: 20,

  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,

  },
  todos: {

  },
});
