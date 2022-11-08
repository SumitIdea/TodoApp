import {Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function TodoItem({ index,name, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(name.key)}>
      <Text style={styles.items}>{name.text}</Text>
      <Image
              style={{ height: 20, width: 20, alignSelf: 'center', position: 'absolute', right: 10, marginTop:33 }}
              source={{ uri: 'https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-24.png' }} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
items: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderRadius: 10,
    fontWeight:'bold',
    fontSize:20,
    borderWidth: 1,
    borderStyle: 'dashed',
},

})