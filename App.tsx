import { NavigationContainer } from '@react-Navigation/native';
import React from "react"
import { StyleSheet, Text, View, } from 'react-native'
import Home from "./Screen/home"
import QUIZ from "./Screen/quiz"
import Result from "./Screen/result"
import MyStack from "./navigation"

const App = () => {
  return (
    <View style={style.container}>

      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});