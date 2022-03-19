import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ArticlesScreen from "./screens/Articles";
import MainStackNavigator from "./navigators/MainStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
     <MainStackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
