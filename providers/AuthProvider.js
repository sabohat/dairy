import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const AuthContext = React.createContext();

const fireAuth = getAuth();

export function AuthProvider({ children }) {
	const navigation = useNavigation();
	const [auth, setAuth] = React.useState();

	React.useEffect(() => {
		return onAuthStateChanged(fireAuth, (user) => {
			if (user) {
				navigation.reset({
					index: 0,
					routes: [
						{
							name: "BottomTabNavigator",
						},
					],
				});
			} else {
				navigation.reset({
					index: 0,
					routes: [
						{
							name: "SignUp",
							// name: "BottomTabNavigator",
						},
					],
				});
			}
		});
	}, [fireAuth]);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<AuthContext.Consumer>{() => children}</AuthContext.Consumer>
		</AuthContext.Provider>
	);
}
