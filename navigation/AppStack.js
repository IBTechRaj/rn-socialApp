import React from 'react'
import { createStackNavigator } from '@react-navigation/atack'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStacknavigator()

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppStack