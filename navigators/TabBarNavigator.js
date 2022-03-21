import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ArticlesScreen from "../screens/Articles";
import ProfileScreen from "../screens/ProfileScreen";

export default function TabBarNavigator() {
	const BottomNavigator = createMaterialBottomTabNavigator();

	return (
		<BottomNavigator.Navigator>
			<BottomNavigator.Screen
				name="Articles"
				component={ArticlesScreen}
			/>
			<BottomNavigator.Screen name="Profile" component={ProfileScreen} />
		</BottomNavigator.Navigator>
	);
}
