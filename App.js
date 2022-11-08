import React, { useState } from 'react';
import type {Node} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
const App: () => Node = () => {

  const [todos, setTodos] = useState([
    {text: 'Buy coffee', key: '1'},
    {text: 'Create an app', key: '2'},  
  {text: 'Play on the switch', key: '3'}

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  // setTodos((prevTodos)=>{
  //   return prevTodos.splice(index,1)
  // })

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return[
      {text: text, key: Math.random().toString() },
      ...prevTodos
    ]
    })
  }
  return (
    <SafeAreaView style={styles.container}> 
 <StatusBar
        backgroundColor="coral"></StatusBar>
{/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
    <Header></Header>
      <View style={styles.content}>
        <AddTodo submitHandler ={submitHandler}></AddTodo>
        <View style={styles.list}></View>
        <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          // <Text style={{fontSize:30}}>{item.text}</Text>
          <TodoItem index={index} name={item} pressHandler={pressHandler}></TodoItem>
        )}
        />
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
 },
 content: {
  padding :40,
  
 },
 list: {

marginTop: 20,
 },
});

export default App;
