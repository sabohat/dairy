import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import {
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";
import moment from "moment";
import { useAuth } from "../providers/AuthProvider";
import Queries from "../services/queries";

export default function ProfileScreen() {
  const [userData, setUserData] = React.useState({});
  const [periodData, setPeriodData] = React.useState({
    nextPeriodStart: new Date(),
    nextPeriodEnd: new Date(),
    lastPeriodStart: new Date(),
    lastPeriodEnd: new Date(),
    nextOvulationStart: new Date(),
    nextOvulationEnd: new Date(),
    lastOvulationStart: new Date(),
    lastOvulationEnd: new Date(),
    daysTillNextPeriod: 0,
  });

  const [user] = useAuth();

  React.useEffect(async () => {
    if (!user) return;
    let userData = await Queries.getUserData(user.uid);
    setUserData(userData);
    console.log(userData);

    // next period estimate date
    const nextPeriodStart = moment(userData?.period_start?.seconds * 1000).add(
      userData?.cycle_length,
      "days"
    );
    const nextPeriodEnd = moment(nextPeriodStart).add(
      userData?.perion_length,
      "days"
    );
    const lastPeriodStart = moment(userData?.period_start?.seconds * 1000);
    const lastPeriodEnd = moment(lastPeriodStart).add(
      userData?.perion_length,
      "days"
    );

    const nextOvulationStart = moment(nextPeriodStart)
      .add(userData?.perion_length, "days")
      .add(7, "days");
    const nextOvulationEnd = moment(nextPeriodStart)
      .add(userData?.perion_length, "days")
      .add(13, "days");

    const lastOvulationStart = moment(lastPeriodStart)
      .add(userData?.period_length, "days")
      .add(7, "days");
    const lastOvulationEnd = moment(lastPeriodStart)
      .add(userData?.period_length, "days")
      .add(13, "days");

    const daysTillNextPeriod = moment(nextPeriodStart).diff(new Date(), "days");

    setPeriodData({
      nextPeriodStart: moment(nextPeriodStart).format("YYYY-MM-DD"),
      nextPeriodEnd: moment(nextPeriodEnd).format("YYYY-MM-DD"),
      lastPeriodStart: moment(lastPeriodStart).format("YYYY-MM-DD"),
      lastPeriodEnd: moment(lastPeriodEnd).format("YYYY-MM-DD"),
      nextOvulationStart: moment(nextOvulationStart).format("YYYY-MM-DD"),
      nextOvulationEnd: moment(nextOvulationEnd).format("YYYY-MM-DD"),
      lastOvulationStart: moment(lastOvulationStart).format("YYYY-MM-DD"),
      lastOvulationEnd: moment(lastOvulationEnd).format("YYYY-MM-DD"),
      daysTillNextPeriod: daysTillNextPeriod,
    });

    console.log(periodData);
  }, [user]);

  const ovulation = {
    selected: true,
    color: "green",
    textColor: "gray",
  };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <CalendarProvider>
        <ExpandableCalendar
          initialPosition="closed"
          // disablePan={true}
          // hideKnob
          openThreshold
          allowShadow
          closeOnDayPress
          firstDay={1}
          style={{
            width: "100%",
          }}
          markedDates={{
			[periodData.lastOvulationStart]: {
				selected: true,
				startingDay: true,
				color: "#80deea",
				textColor: "gray",
			  },
			  [moment(periodData.lastOvulationStart)
				.add(1, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "#80deea",
				textColor: "gray",
			  },
			  [moment(periodData.lastOvulationStart)
				.add(2, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "#80deea",
				textColor: "gray",
			  },
			  [moment(periodData.lastOvulationStart)
				.add(3, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "#80deea",
				textColor: "gray",
			  },
			  [moment(periodData.lastOvulationStart)
				.add(4, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "#80deea",
				textColor: "gray",
			  },
			  [moment(periodData.lastOvulationStart)
				.add(5, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "#80deea",
				textColor: "gray",
			  },
			  [periodData.lastOvulationEnd]: {
				selected: true,
				endingDay: true,
				color: "#80deea",
				textColor: "gray",
			  },
            [periodData.nextOvulationStart]: {
              selected: true,
              startingDay: true,
              color: "#80deea",
              textColor: "gray",
            },
            [moment(periodData.nextOvulationStart)
              .add(1, "days")
              .format("YYYY-MM-DD")]: {
              selected: true,
              color: "#80deea",
              textColor: "gray",
            },
            [moment(periodData.nextOvulationStart)
              .add(2, "days")
              .format("YYYY-MM-DD")]: {
              selected: true,
              color: "#80deea",
              textColor: "gray",
            },
            [moment(periodData.nextOvulationStart)
              .add(3, "days")
              .format("YYYY-MM-DD")]: {
              selected: true,
              color: "#80deea",
              textColor: "gray",
            },
            [moment(periodData.nextOvulationStart)
              .add(4, "days")
              .format("YYYY-MM-DD")]: {
              selected: true,
              color: "#80deea",
              textColor: "gray",
            },
            [moment(periodData.nextOvulationStart)
              .add(5, "days")
              .format("YYYY-MM-DD")]: {
              selected: true,
              color: "#80deea",
              textColor: "gray",
            },
            [periodData.nextOvulationEnd]: {
              selected: true,
              endingDay: true,
              color: "#80deea",
              textColor: "gray",
            },

			[periodData.lastPeriodStart]: {
				selected: true,
				startingDay: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.lastPeriodStart)
				.add(1, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.lastPeriodStart)
				.add(2, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.lastPeriodStart)
				.add(3, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.lastPeriodStart)
				.add(4, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [periodData.lastPeriodEnd]: {
				selected: true,
				endingDay: true,
				color: "pink",
				textColor: "gray",
			  },

			  [periodData.nextPeriodStart]: {
				selected: true,
				startingDay: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.nextPeriodStart)
				.add(1, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.nextPeriodStart)
				.add(2, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.nextPeriodStart)
				.add(3, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [moment(periodData.nextPeriodStart)
				.add(4, "days")
				.format("YYYY-MM-DD")]: {
				selected: true,
				color: "pink",
				textColor: "gray",
			  },
			  [periodData.nextOvulationEnd]: {
				selected: true,
				endingDay: true,
				color: "pink",
				textColor: "gray",
			  },
            
          }}
          markingType={"period"}
          onCalendarToggled={(isOpen) => setIsOpen(isOpen)}
        />
        {!isOpen && (
          <View style={styles.section}>
            <View style={styles.circle}>
              <Text style={styles.text}>Keyingi Hayz</Text>
              <Text style={styles.day}>{periodData?.daysTillNextPeriod}</Text>
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

        {isOpen && (
          <View style={styles.smallSection}>
            <View style={styles.smallCircle}>
              <Text style={styles.smallText}>Keyingi Hayz</Text>
              <Text style={styles.smallDay}>{periodData?.daysTillNextPeriod}</Text>
              <Text style={styles.smallText}>kundan so'ng</Text>
            </View>
          </View>
        )}
      </CalendarProvider>
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
  smallSection: {
    textAlign: "center",
    height: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  smallCircle: {
    width: 140,
    height: 140,
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
  smallText: {
    fontSize: 14,
  },
  smallDay: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 22,
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
