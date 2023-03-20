/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View, Text, Pressable, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const ToDos = props => {
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = Date.now();

  //     props.todos.forEach(todo => {
  //       const dateObj = new Date(todo.deadline);
  //       const hour = dateObj.getHours().toString();
  //       const minutes = dateObj.getMinutes().toString();
  //       const deadline = parseInt(hour + minutes, 10);
  //       const dateObj2 = new Date(now);
  //       const hours1 = dateObj2.getHours().toString();
  //       const minutes1 = dateObj2.getMinutes().toString();
  //       const deadline2 = parseInt(hours1 + minutes1);
  //       if (deadline2 > deadline) {
  //         console.log('deadline dolmuşş', todo.todo);
  //         console.log('------------------');
  //       }
  //     });
  //   }, 12000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [props.todos]);
  // React.useEffect(() => {
  //   // check for overdue todos every minute
  //   const intervalId = setInterval(checkOverdueTodos, 2000);

  //   return () => clearInterval(intervalId);
  // }, []);

  /*Alert.alert('Overdue Todo!', 'todoitem{} date passed!!', [{text: 'OK'}]);*/
  // const checkOverdueTodos = () => {
  //   const now = new Date().getTime();
  //   props.todos.forEach(todo => {
  //     console.log('todo.deadline', todo.deadline);
  //     console.log('now', now);
  //   });

  //   const overDueTodos = props.todos.filter(todo => todo.deadline < now);
  //   console.log('overDueTodos', overDueTodos);
  //   overDueTodos.forEach(todo => {
  //     todo.overdue = true;
  //     console.log(`Todo "${todo.title}" is overdue!`);
  //   });
  //   // console.log('overDueTodos', overDueTodos);

  //   //props.setTodos([...props.todos]);
  //   // console.log('roaldinhooo');
  // };
  React.useEffect(() => {}, []);
  function humanizeRemainingTime(remainingTime) {
    remainingTime = remainingTime - Date.now();
    if (remainingTime < 0) {
      return 'Overdue!';
    } else {
      const seconds = Math.floor(remainingTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const timeParts = [];

      if (days > 0) {
        timeParts.push(`${days} day${days > 1 ? 's' : ''}`);
      }

      if (hours % 24 > 0) {
        timeParts.push(`${hours % 24} hour${hours % 24 > 1 ? 's' : ''}`);
      }

      if (minutes % 60 > 0) {
        timeParts.push(`${minutes % 60} minute${minutes % 60 > 1 ? 's' : ''}`);
      }

      return timeParts.join(', ');
    }
  }

  return (
    <ScrollView style={styles.container}>
      {props.todos.map(todoitem => {
        return (
          <Pressable
            style={[styles.todoContainer, todoitem.isChecked && styles.checked]}
            key={todoitem.id}
            onPress={props.setTodoCheckhed.bind(this, todoitem.id)}>
            <Text
              style={[styles.todoText, todoitem.isChecked && styles.checked]}>
              {todoitem.todo}
            </Text>

            <View style={styles.iconHolder}>
              {/* <Text style={styles.redColor}>
                {humanizeRemainingTime(todoitem.deadline)}
              </Text> */}
              <View style={styles.iconContainer}>
                {todoitem.isChecked && (
                  <Icon style={styles.icon} name="check" />
                )}
              </View>
              <Pressable
                style={styles.iconContainer}
                onPress={props.deleteTodo.bind(this, todoitem.id)}>
                <Icon style={styles.icon2} name="trash" />
              </Pressable>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    resizeMode: 'cover',
  },
  todoContainer: {
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderWidth: 1,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  icon: {
    fontSize: 20,
    color: 'green',
  },
  icon2: {
    fontSize: 20,
    color: 'red',
  },
  todoText: {
    fontSize: 20,
  },
  checked: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  iconHolder: {
    flexDirection: 'row',
  },
  redColor: {
    color: 'red',
  },
});

export default ToDos;
