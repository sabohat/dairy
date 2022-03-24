import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Calendar from "../components/Calendar";

const auth = getAuth();

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			{/* <Pressable
				onPress={() => {
					signOut(auth);
				}}
			>
				<Text>Chiqish</Text>
			</Pressable> */}
			<Calendar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
