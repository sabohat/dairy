export default class Models {
	static async initTables(db) {
		return new Promise((resolve, reject) => {
			try {
				// Create table
				/**
				 *
				 */

				let query = `CREATE TABLE if not exists period_time (
                    start_time date not null,
                    end_time date not null,
                    length integer not null
                );`;
				db.exec([{ sql: query, args: [] }], false, (...args) => {
					resolve(args);
				});
			} catch (error) {
				reject(error);
			}
		});
	}
}
