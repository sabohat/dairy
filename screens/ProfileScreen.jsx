import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";

export default function ProfileScreen() {
  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };
  return (
    <View style={styles.container}>
      <Calendar
        style={{
          width: "100%",
          height: 350,
        }}
        markingType={"period"}
        markedDates={{
          "2022-04-22": {
            startingDay: true,
            color: "pink",
            textColor: "white",
          },
          "2022-04-23": {
            color: "pink",
            textColor: "white",
          },
          "2022-04-24": { selected: true, color: "pink", textColor: "white" },
          "2022-04-25": { selected: true, color: "pink", textColor: "white" },
          "2022-04-26": { selected: true, color: "pink", textColor: "white" },
          "2022-04-27": { endingDay: true, color: "pink", textColor: "white" },
          "2022-04-16": { selected: true, marked: true, selectedColor: "blue" },
          "2022-04-17": { marked: true },
          "2022-04-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2022-04-19": { disabled: true, disableTouchEvent: true },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
