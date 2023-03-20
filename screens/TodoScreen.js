import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToDoInput from '../components/ToDoInput';
import ToDos from '../components/ToDos';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadTodos();
  }, []);
  React.useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos)).catch(error => {
      console.error(error);
    });
  }, [todos]);
  const setTodoCheckhed = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isChecked: !todo.isChecked};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };
  return (
    <View style={styles.mainContainer}>
      <ToDoInput todos={todos} setTodos={setTodos} />
      <ToDos
        todos={todos}
        setTodos={setTodos}
        setTodoCheckhed={setTodoCheckhed}
        deleteTodo={deleteTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
