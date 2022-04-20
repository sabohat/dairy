import React from "react";
import * as SQLite from "expo-sqlite";
// import { openDatabase } from "../services/sqllite";
import { Platform } from "react-native";

const DatabaseContext = React.createContext();

export default function DatabaseProvider({ children }) {
	const [db, setDb] = React.useState(initDatabase());

	function initDatabase() {
		try {
			if (Platform.OS === "web") {
				return {
					transaction: () => {
						return {
							executeSql: () => {},
						};
					},
				};
			}

			const db = SQLite.openDatabase("myDatabaseName.db");
			db.exec(
				[{ sql: "SELECT 1+1 as result;", args: [] }],
				false,
				(...args) => console.log(args)
			);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<DatabaseContext.Provider value={{ db }}>
			<DatabaseContext.Consumer>
				{() => children}
			</DatabaseContext.Consumer>
		</DatabaseContext.Provider>
	);
}
