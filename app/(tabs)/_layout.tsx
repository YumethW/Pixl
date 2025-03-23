import React from "react";
import { Tabs } from "expo-router";
import {
  Home,
  Import,
  Search,
  UserRoundPen,
} from "lucide-react-native";
import { View } from "react-native";

const _layout = () => {
  return (
      <Tabs
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 8,
            paddingTop: 8,
            height: 100,
            overflow: "hidden",
            backgroundColor: "#000000",
            justifyContent: "center",
            alignContent: "center",
          },
          tabBarActiveTintColor: "#004953",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
            marginBottom: 4,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <View className={`${focused ? "p-9 rounded-lg" : ""}`}>
                <Home
                  color={focused ? "#004953" : color}
                  size={focused ? 24 : 20}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            title: "Search",
            tabBarIcon: ({ focused, color }) => (
              <View className={`${focused ? "p-9 rounded-lg" : ""}`}>
                <Search
                  color={focused ? "#004953" : color}
                  size={focused ? 24 : 20}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            headerShown: false,
            title: "Saved",
            tabBarIcon: ({ focused, color }) => (
              <View className={`${focused ? "p-9 rounded-lg" : ""}`}>
                <Import
                  color={focused ? "#004953" : color}
                  size={focused ? 24 : 20}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused, color }) => (
              <View className={`${focused ? "p-9 rounded-lg" : ""}`}>
                <UserRoundPen
                  color={focused ? "#004953" : color}
                  size={focused ? 24 : 20}
                />
              </View>
            ),
          }}
        />
      </Tabs>
  );
};

export default _layout;
