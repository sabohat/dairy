import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Queries from "../services/queries";

const AuthContext = React.createContext();

const fireAuth = getAuth();

export function AuthProvider({ children }) {
	const navigation = useNavigation();
	const [auth, setAuth] = React.useState();
	const [user, setUser] = React.useState();

	React.useEffect(() => {
		return onAuthStateChanged(fireAuth, async (user) => {
			if (user) {
				setUser(user);
				let signed = await Queries.getUser(user.uid);
				if (signed) {
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
								name: "GetDetails",
							},
						],
					});
				}
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
		<AuthContext.Provider value={{ auth, setAuth, user }}>
			<AuthContext.Consumer>{() => children}</AuthContext.Consumer>
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const { auth, setAuth, user } = React.useContext(AuthContext);

	return [user, auth, setAuth];
}
