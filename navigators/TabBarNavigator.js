import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ArticlesScreen from "../screens/Articles";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabBarNavigator() {
	const BottomNavigator = createMaterialBottomTabNavigator();

	return (
		<BottomNavigator.Navigator
			barStyle={{
				backgroundColor: "red",
				paddingTop: 5,
			}}
		>
			<BottomNavigator.Screen
				name="Articles"
				component={ArticlesScreen}
				options={{
					tabBarIcon: ({ focused, color }) => {
						return (
							<MaterialCommunityIcons
								name="library"
								size={20}
								color={color}
							/>
						);
					},
				}}
			/>
			<BottomNavigator.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused, color }) => {
						return (
							<MaterialCommunityIcons
								name="account"
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
