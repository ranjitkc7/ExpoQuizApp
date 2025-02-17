import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

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
        },
        tabBarActiveTintColor: "#00bbf9",
        tabBarInactiveTintColor: "white",
        headerTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Read",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gamepad" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default LayoutPage