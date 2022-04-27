import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Pressable, Share } from "react-native";
import ArticleDetails from "../screens/ArticleDetails";
import ArticlesScreen from "../screens/Articles";
import TabBarNavigator from "./TabBarNavigator";
import * as Sharing from "expo-sharing";
import SignUpScreen from "../screens/SignUp";
import GetDetails from "../screens/GetDetails";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
	return (
		<MainStack.Navigator initialRouteName="SignUp">
			<MainStack.Screen
				name="SignUp"
				component={SignUpScreen}
				options={{
					title: "Ro'yhatdan o'tish",
				}}
			/>
			<MainStack.Screen
				name="GetDetails"
				component={GetDetails}
				options={{
					title: "Ma'lumotlarni kiritish",
				}}
			/>
			<MainStack.Screen
				name="BottomTabNavigator"
				component={TabBarNavigator}
				options={{
					headerShown: false,
				}}
			/>
			<MainStack.Screen
				name="Article"
				component={ArticleDetails}
				options={(item) => {
					return {
						title:
							item?.route?.params?.data?.item?.title || "Article",
						headerRight: () => (
							<Pressable
								onPress={async () => {
									const result = await Share.share({
										message:
											"React Native | A framework for building native apps using React",
										url: "https://sabohat.me",
									});
								}}
							>
								<Text>Share</Text>
							</Pressable>
						),
					};
				}}
			/>
		</MainStack.Navigator>
	);
}
