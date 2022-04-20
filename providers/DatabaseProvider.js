import React from "react";
import * as SQLite from "expo-sqlite";
// import { openDatabase } from "../services/sqllite";
import { Platform } from "react-native";
import Models from "../services/models";

const DatabaseContext = React.createContext();

export default function DatabaseProvider({ children }) {
	const [db, setDb] = React.useState(initDatabase());

	async function initDatabase() {
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
			let data = await Models.initTables(db);
			console.log(data);
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
