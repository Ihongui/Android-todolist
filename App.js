import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (textInputValue.trim() !== "") {
      setTodoList([...todoList, { id: Date.now(), text: textInputValue }]);
      setTextInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        faite votre liste et supprimer ce qui ne vous convient pas !
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Text to enter"
        value={textInputValue}
        onChangeText={setTextInputValue}
      />
      <View style={styles.buttonContainer}>
        <Button title="Ajouter" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <Button
              title="Supprimer"
              onPress={() => handleDeleteTodo(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.title}>create by Fabrice Ihongui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginVertical: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
  },
  textInput: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    width: 250,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ccc",
    marginVertical: 5,
    width: 250,
  },
});
