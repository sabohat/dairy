import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import { TextInputMask } from "react-native-masked-text";

export default function SignUpScreen() {
	const [phoneNumber, setPhoneNumber] = React.useState("");

	const handleLogin = () => {
		let correctPhone = phoneNumber.replaceAll(/\D/g, "");

		if (correctPhone.length !== 12) {
			return;
		}

		console.log(correctPhone);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Let's sign up and use it</Text>
			<View style={styles.inputs}>
				<TextInput
					placeholder="Telefon raqamingiz"
					style={styles.input}
					value={phoneNumber}
					onChangeText={setPhoneNumber}
					render={(props) => {
						return (
							<TextInputMask
								type={"custom"}
								autoFocus
								keyboardType="phone-pad"
								options={{
									mask: "+998 (99) 999-99-99",
								}}
								placeholder="Telefon raqam"
								{...props}
							/>
						);
					}}
				/>
				<Button
					onPress={handleLogin}
					style={styles.button}
					mode="contained"
				>
					<Text>Login</Text>
				</Button>
			</View>
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
		fontSize: 20,
		fontWeight: "700",
	},
	inputs: {
		width: "100%",
		flexDirection: "column",
		marginTop: 20,
	},
	input: {
		width: "100%",
	},
	button: {
		marginTop: 20,
		padding: 10,
	},
});
