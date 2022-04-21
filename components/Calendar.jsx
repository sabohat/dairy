import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Calendar, CalendarProps } from "react-native-calendars";

export default function CalendarComponent() {
	return (
		<View style={styles.container}>
			<Calendar
				// style={styles.calendar}
				current={"2012-05-16"}
				minDate={"2012-05-10"}
				// displayLoadingIndicator
				markingType={"period"}
				theme={{
					calendarBackground: "#333248",
					textSectionTitleColor: "white",
					textSectionTitleDisabledColor: "gray",
					dayTextColor: "white",
					todayTextColor: "white",
					selectedDayTextColor: "white",
					monthTextColor: "white",
					indicatorColor: "white",
					selectedDayBackgroundColor: "#333248",
					arrowColor: "white",
					// textDisabledColor: 'red',
					"stylesheet.calendar.header": {
						week: {
							marginTop: 30,
							marginHorizontal: 12,
							flexDirection: "row",
							justifyContent: "space-between",
						},
					},
				}}
				// markedDates={{
				// 	"2012-05-17": { disabled: true },
				// 	"2012-05-08": { textColor: "pink" },
				// 	"2012-05-09": { textColor: "pink" },
				// 	"2012-05-14": {
				// 		startingDay: true,
				// 		color: "green",
				// 		endingDay: true,
				// 	},
				// 	"2012-05-21": { startingDay: true, color: "green" },
				// 	"2012-05-22": { endingDay: true, color: "gray" },
				// 	"2012-05-24": { startingDay: true, color: "gray" },
				// 	"2012-05-25": { color: "gray" },
				// 	"2012-05-26": { endingDay: true, color: "gray" },
				// }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
});
