import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import React, { useState } from 'react'

export default function AddTodo ({submitHandler}) {
  
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
    <View>
     <TextInput
     value={text}
     style={styles.input}
     placeholder="Add New Todo List"
     onChangeText={(t)=>changeHandler(t)}
     />

     {/* <Button onPress={() => console.log(text)} title="Add Todo" color='coral'/> */}
     <Button onPress={() => {submitHandler(text),setText('')}} title="Add Todo" color='coral'/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
})
