import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ArticlesScreen from "../screens/Articles";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";

export default function TabBarNavigator() {
  const BottomNavigator = createMaterialBottomTabNavigator();

  return (
    <BottomNavigator.Navigator
      barStyle={{
        backgroundColor: "pink",
      }}
    >
      <BottomNavigator.Screen
        name="Diary"
        component={ProfileScreen}
        options={{
          title: "Kundalik",
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialCommunityIcons name="calendar" size={20} color={color} />
            );
          },
        }}
      />
      <BottomNavigator.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{
          title: "Maqolalar",
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialCommunityIcons name="library" size={20} color={color} />
            );
          },
        }}
      />
      <BottomNavigator.Screen
        name="Profil"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialCommunityIcons
                name="face-profile-woman"
                size={20}
                color={color}
              />
            );
          },
        }}
      />
    </BottomNavigator.Navigator>
  );
}
