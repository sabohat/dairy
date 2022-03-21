import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigators/MainStackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as PaperProvider } from "react-native-paper";

// Create a client
const queryClient = new QueryClient();

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<QueryClientProvider client={queryClient}>
					<MainStackNavigator />
				</QueryClientProvider>
			</NavigationContainer>
		</PaperProvider>
	);
}
