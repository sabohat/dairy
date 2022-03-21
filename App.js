import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ArticlesScreen from "./screens/Articles";
import MainStackNavigator from "./navigators/MainStackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

export default function App() {
	return (
		<NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<MainStackNavigator />
			</QueryClientProvider>
		</NavigationContainer>
	);
}
