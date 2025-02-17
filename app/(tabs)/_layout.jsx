import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const LayoutPage = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#003049",
          borderBottomColor: "#000000",
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          backgroundColor: "#003049",
          height: 53,
        },
        tabBarActiveTintColor: "#00f5d4",
        tabBarInactiveTintColor: "white",
        headerTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Read",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gamepad" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: "Result",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="store" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default LayoutPage