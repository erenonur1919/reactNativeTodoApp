import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Alert,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const ToDoInput = props => {
  const [input, setInput] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [deadline, setDeadline] = React.useState('');

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const now = new Date();

  //     if (remainingTime <= 0) {
  //       setRemainingTime('Deadline passed');
  //     } else {
  //       const deadlineTimestamp = Date.parse(date) - 2 * 60 * 60 * 1000;
  //       const deadlineDate = new Date(deadlineTimestamp);
  //       const kalanZaman = deadlineDate - Date.now();
  //       setRemainingTime(kalanZaman);
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [date, remainingTime]);

  const [show, setShow] = React.useState(false);

  const showTimepicker = () => {
    setShow(true);
  };
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(false);
  //   setDate(currentDate);
  //   console.log('currentDate', currentDate);
  //   // console.log('horus', date.getHours());
  //   // console.log('era'); // output: 13:00:54
  //   const deadlineTimestamp = Date.parse(currentDate) - 3 * 60 * 60 * 1000;
  //   const deadlineDate = new Date(deadlineTimestamp);
  //   const kalanZaman = deadlineDate - Date.now();
  //   setDeadline(kalanZaman);
  //   //console.log('kalanzaman', humanizeRemainingTime(kalanZaman));
  // };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    console.log('currentDate', currentDate);
    // console.log('horus', date.getHours());
    // console.log('era'); // output: 13:00:54
    const deadlineTimestamp = Date.parse(currentDate) - 3 * 60 * 60 * 1000;
    const deadlineDate = new Date(deadlineTimestamp);
    const kalanZaman = deadlineDate;
    setDeadline(kalanZaman);
    //console.log('kalanzaman', humanizeRemainingTime(kalanZaman));
  };
  const addTodos = () => {
    if (input.trim().length > 0 && deadline) {
      props.setTodos([
        ...props.todos,
        {
          id: Date.now(),
          todo: input,
          isChecked: false,
          deadline: deadline,
          overdue: false,
        },
      ]);
      setInput('');
      console.log(props.todos);
    } else {
      Alert.alert('Invalid Todo', 'Please enter a todo and deadline', [
        {text: 'OK'},
      ]);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add Todos"
          onChangeText={setInput}
          value={input}
        />
        <View>
          <Pressable onPress={showTimepicker}>
            <Icon style={styles.icon} size={20} color="black" name="calendar" />
          </Pressable>
        </View>
        {show && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Pressable onPress={addTodos}>
          <Icon style={styles.icon} size={20} color="black" name="plus" />
        </Pressable>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.lineStyle} />
        <View>
          <Text style={styles.header}>TODOS</Text>
        </View>
        <View style={styles.lineStyle} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  lineStyle: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  header: {
    width: 70,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default ToDoInput;
