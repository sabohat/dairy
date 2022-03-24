import FileSystem from "expo-file-system";
import Asset from "expo-asset";

async function openDatabase(pathToDatabaseFile) {
	if (
		!(
			await FileSystem.getInfoAsync(
				FileSystem.documentDirectory + "SQLite"
			)
		).exists
	) {
		await FileSystem.makeDirectoryAsync(
			FileSystem.documentDirectory + "SQLite"
		);
	}
	await FileSystem.downloadAsync(
		Asset.fromModule(require(pathToDatabaseFile)).uri,
		FileSystem.documentDirectory + "SQLite/myDatabaseName.db"
	);
	return SQLite.openDatabase("myDatabaseName.db");
}
