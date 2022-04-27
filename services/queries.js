import * as firestore from "firebase/firestore";
import { setDoc } from "firebase/firestore";
let fr = firestore.getFirestore();

export default class Queries {
	static async getUser(id) {
		let users = firestore.collection(fr, "users");
		let docRef = firestore.doc(users, id);
		let docSnap = await firestore.getDoc(docRef);

		return docSnap.exists();
	}

	static async getUserData(id) {
		let users = firestore.collection(fr, "users");
		let docRef = firestore.doc(users, id);
		let docSnap = await firestore.getDoc(docRef);

		let data = docSnap.data();

		return data;
	}

	static async editUser(
		username,
		age,
		cycle_length,
		perion_length,
		last_period_date,
		id
	) {
		let users = firestore.collection(fr, "users");
		let docRef = firestore.doc(users, id);
		return await setDoc(docRef, {
			age,
			name: username,
			cycle_length,
			perion_length,
			period_start: last_period_date,
		});
	}

	static async editUserLastPeriod(last_period_date, id) {
		let users = firestore.collection(fr, "users");
		let docRef = firestore.doc(users, id);
		return await setDoc(docRef, {
			period_start: last_period_date,
		});
	}
}
