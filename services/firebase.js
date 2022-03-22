import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import Constants from "expo-constants";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: Constants.manifest.extra.apiKey,
	authDomain: Constants.manifest.extra.authDomain,
	projectId: Constants.manifest.extra.projectId,
	storageBucket: Constants.manifest.extra.storageBucket,
	messagingSenderId: Constants.manifest.extra.messagingSenderId,
	appId: Constants.manifest.extra.appId,
};

let firebaseApp, fireAuth;

if (getApps().length < 1) {
	firebaseApp = initializeApp(firebaseConfig);
	fireAuth = initializeAuth(firebaseApp, {
		persistence: getReactNativePersistence(AsyncStorage),
	});
} else {
	firebaseApp = getApp();
	fireAuth = getAuth();
}

export default {
	firebaseApp,
	fireAuth,
};

// Initialize Firebase
