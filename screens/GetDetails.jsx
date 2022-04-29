import {
	View,
	Text,
	StyleSheet,
	Platform,
	Pressable,
	Alert,
	TextInput as NativeTextInput,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useAuth } from "../providers/AuthProvider";
import Queries from "../services/queries";
import { useNavigation } from "@react-navigation/native";

export default function GetDetails() {
	const [age, setAge] = React.useState("");
	const [userName, setUserName] = React.useState("");
	const [cycleLength, setCycleLength] = React.useState("");
	const [periodLength, setPeriodLength] = React.useState("");
	const [lastPeriod, setLastPeriod] = React.useState(new Date());
	const [error, setError] = React.useState("");
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const navigation = useNavigation();

	const [user] = useAuth();

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		console.log("A date has been picked: ", date);
		setLastPeriod(date);
		hideDatePicker();
	};

	const handleSubmit = async () => {
		// validate inputs
		if (
			age === "" ||
			userName === "" ||
			cycleLength === "" ||
			periodLength === ""
		) {
			setError("Iltimos, barcha ma'lumotlarni kiriting.");
			return;
		}
		// check if age is a number
		if (isNaN(age)) {
			setError("Yosh uchun raqam kiriting");
			return;
		}
		// check if cycle length is a number
		if (isNaN(cycleLength)) {
			setError("Hayz sikli uchun raqam kiriting");
			return;
		}
		// check if period length is a number
		if (isNaN(periodLength)) {
			setError("Hayz davomiyligi uchun raqam kiriting");
			return;
		}
		// check if max last period date is future
		if (lastPeriod > new Date()) {
			setError("Iltimos, to'g'ri sana kiriting");
			return;
		}
		
		try {
			await Queries.editUser(
				userName,
				age,
				cycleLength,
				periodLength,
				lastPeriod,
				user.uid
			);

			navigation.navigate("BottomTabNavigator");
		} catch (error) {}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Ma'lumotlarni kiriting</Text>

			<TextInput
				placeholder="Username kiriting"
				style={styles.input}
				value={userName}
				onChangeText={setUserName}
			/>

			<TextInput
				placeholder="Yoshingizni kiriting"
				style={styles.input}
				value={age}
				onChangeText={setAge}
				render={({ ...props }) => (
					<NativeTextInput keyboardType="number-pad" {...props} />
				)}
			/>

			<TextInput
				placeholder="O'rtacha hayz sikli"
				style={styles.input}
				value={cycleLength}
				onChangeText={setCycleLength}
				render={({ ...props }) => (
					<NativeTextInput keyboardType="number-pad" {...props} />
				)}
			/>
			<TextInput
				placeholder="O'rtacha hayz davomiyligi"
				style={styles.input}
				value={periodLength}
				onChangeText={setPeriodLength}
				render={({ ...props }) => (
					<NativeTextInput keyboardType="number-pad" {...props} />
				)}
			/>

			<Pressable style={styles.input} onPress={showDatePicker}>
				<TextInput
					placeholder="O'rtacha hayz davomiyligi"
					value={moment(lastPeriod).format("DD/MM/YYYY")}
				/>
				<View
					style={{
						position: "absolute",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
					}}
				></View>
			</Pressable>

			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>

			<Button
				onPress={handleSubmit}
				style={styles.button}
				mode="contained"
			>
				<Text>Kirish</Text>
			</Button>

			{error !== "" && <Text style={styles.errorMessage}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: 16,
	},
	title: {
		marginTop: 16,
		fontSize: 20,
		fontWeight: "700",
	},
	inputs: {
		width: "100%",
		flexDirection: "column",
		marginTop: 20,
	},
	input: {
		marginTop: 10,
		width: "100%",
	},
	button: {
		width: "100%",
		marginTop: 20,
		padding: 10,
	},
	bottomText: {
		marginTop: 20,
		alignItems: "center",
	},
	errorMessage: {
		color: "red",
		marginTop: 10,
	},
});
