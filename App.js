import "react-native-gesture-handler";
import "./services/firebase";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigators/MainStackNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./providers/AuthProvider";

if (typeof String.prototype.replaceAll === "undefined") {
	String.prototype.replaceAll = function (match, replace) {
		return this.replace(new RegExp(match, "g"), () => replace);
	};
}

// Create a client
const queryClient = new QueryClient();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<SafeAreaView
					edges={["top", "left", "right"]}
					style={{ flex: 1 }}
				>
					<AuthProvider>
						<PaperProvider>
							<QueryClientProvider client={queryClient}>
								<MainStackNavigator />
							</QueryClientProvider>
						</PaperProvider>
					</AuthProvider>
				</SafeAreaView>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
