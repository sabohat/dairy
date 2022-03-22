import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigators/MainStackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./services/firebase";

// Create a client
const queryClient = new QueryClient();

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
				<PaperProvider>
					<NavigationContainer>
						<QueryClientProvider client={queryClient}>
							<MainStackNavigator />
						</QueryClientProvider>
					</NavigationContainer>
				</PaperProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
