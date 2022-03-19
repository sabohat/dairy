import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import ArticleDetails from "../screens/ArticleDetails";
import ArticlesScreen from "../screens/Articles";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Articles" component={ArticlesScreen} />
      <MainStack.Screen name="Article" component={ArticleDetails} />
    </MainStack.Navigator>
  );
}
