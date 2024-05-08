import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='Home' options={{headerShown:false}}/>
        <Tabs.Screen name='Create' options={{headerShown:false}}/>
        <Tabs.Screen name='Activity' options={{headerShown:false}}/>
        <Tabs.Screen name='Profile' options={{headerShown:false}}/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})