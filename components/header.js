import { StyleSheet, Text, View } from "react-native";
import React from 'react'

const Header = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.title}>TODO App </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
head:{
height :50,
paddingTop:6,
backgroundColor : 'coral',

},
title: {
textAlign:'center',
color:'#fff',
fontSize: 25,
fontWeight:'bold',
},
})