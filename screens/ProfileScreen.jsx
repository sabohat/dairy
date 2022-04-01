import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import {
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";

export default function ProfileScreen() {
  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <CalendarProvider>
        <ExpandableCalendar
          initialPosition="closed"
          firstDay={1}
          style={{
            width: "100%",
          }}
          markingType={"period"}
          onCalendarToggled={(isOpen) => setIsOpen(isOpen)}
          markedDates={
            isOpen && {
              "2022-04-22": {
                startingDay: true,
                color: "pink",
                textColor: "white",
              },
              "2022-04-23": {
                color: "pink",
                textColor: "white",
              },
              "2022-04-24": {
                selected: true,
                color: "pink",
                textColor: "white",
              },
              "2022-04-25": {
                selected: true,
                color: "pink",
                textColor: "white",
              },
              "2022-04-26": {
                selected: true,
                color: "pink",
                textColor: "white",
              },
              "2022-04-27": {
                endingDay: true,
                color: "pink",
                textColor: "white",
              },
              "2022-04-16": {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
              "2022-04-17": { marked: true },
              "2022-04-18": { marked: true, dotColor: "red", activeOpacity: 0 },
              "2022-04-19": { disabled: true, disableTouchEvent: true },
            }
          }
        />
        {!isOpen && (
          <View style={styles.section}>
            <View style={styles.circle}>
              <Text style={styles.text}>Keyingi Hayz</Text>
              <Text style={styles.day}>13 </Text>
              <Text style={styles.text}>kundan so'ng</Text>
              <Pressable
                style={styles.btn}
                onPress={(item) => console.log(item)}
              >
                <Text style={styles.btnText}>Bugunni belgilash</Text>
              </Pressable>
            </View>
          </View>
        )}
      </CalendarProvider>
      <Text>Statistics</Text>
      <View style={styles.statistics}>
		  <Text>Hayz sikli</Text>
		  <Text>Normal</Text>
	  </View>
	  <View style={styles.statistics}>
		  <Text>Oxirgi hayz kunlari</Text>
		  <Text>7</Text>
	  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    textAlign: "center",
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  circle: {
    marginTop: 20,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "pink",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 15,
  },
  text: {
    fontSize: 24,
  },
  day: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 48,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "rgba(240, 140, 218, 1)",
    borderRadius: 20,
  },
  btnText: {
    color: "white",
  },
  statistics: {
    width: "100%",
    backgroundColor: "rgba(255, 232, 232, 1)",
    marginBottom: 10,
    borderRadius: 20,
    padding: 20,
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
  },
});
