import { View, Text, StyleSheet, Platform, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import { TextInputMask } from "react-native-masked-text";
import { firebaseApp, fireAuth } from "../services/firebase";

import { getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import {
	FirebaseRecaptchaVerifierModal,
	FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import {
	PhoneAuthProvider,
	signInWithCredential,
} from "firebase/auth/react-native";

const auth = getAuth();
const app = getApp();

if (!app?.options || Platform.OS === "web") {
	throw new Error(
		"This example only works on Android or iOS, and requires a valid Firebase config."
	);
}

export default function SignUpScreen() {
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const recaptchaVerifier = React.useRef(null);
	const [verificationId, setVerificationId] = React.useState();
	const [verificationCode, setVerificationCode] = React.useState();

	// const firebaseConfig = app ? app.options : undefined;
	const [message, showMessage] = React.useState();
	const attemptInvisibleVerification = false;

	const handleLogin = async () => {
		let correctPhone = phoneNumber.replaceAll(/\D/g, "");

		if (correctPhone.length !== 12) {
			return;
		}

		const phoneProvider = new PhoneAuthProvider(auth);
		const verificationId = await phoneProvider.verifyPhoneNumber(
			"+" + correctPhone,
			recaptchaVerifier.current
		);

		let codePrompt = Alert.prompt(
			"Codeni kiriting",
			"Sizga yuborilgan kodni kiriting",
			async (text) => {
				const credential = PhoneAuthProvider.credential(
					verificationId,
					text
				);
				setVerificationId(text);

				let result = await signInWithCredential(auth, credential).catch(
					(e) => {
						console.log(e + "");
					}
				);
				console.log(result);
			}
		);
	};

	return (
		<View style={styles.container}>
			<FirebaseRecaptchaVerifierModal
				ref={recaptchaVerifier}
				firebaseConfig={app.options}
				// attemptInvisibleVerification
			/>
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
