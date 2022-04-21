import "../services/firebase";
import { View, Text, StyleSheet, Platform, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import { TextInputMask } from "react-native-masked-text";
import { getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import DatePicker from "react-native-datepicker";

export default function GetDetails() {
  const [userData, setUserData] = React.useState({
    duration_length: 0,
    last_period: "",
    cycle_length: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma'lumotlarni kiriting</Text>
      <View style={styles.inputs}>

        <TextInput
          placeholder="O'rtacha hayz davomiyligi"
          style={styles.input}
          value={userData.duration_length}
          onChangeText={(text) =>
            setUserData({ ...userData, duration_length: text })
          }
          render={(props) => {
            return (
              <TextInputMask
                type={"custom"}
                autoFocus
                keyboardType="phone-pad"
                options={{
                  mask: "9",
                }}
                placeholder="O'rtacha hayz davomiyligi"
                {...props}
              />
            );
          }}
        />
        <DatePicker
        style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <TextInput
          placeholder="O'rtacha hayz davomiyligi"
          style={styles.input}
          value={userData.cycle_length}
          onChangeText={(text) =>
            setUserData({ ...userData, cycle_length: text })
          }
          render={(props) => {
            return (
              <TextInputMask
                type={"custom"}
                autoFocus
                keyboardType="phone-pad"
                options={{
                  mask: "99",
                }}
                placeholder="O'rtacha sikl davomiyligi"
                {...props}
              />
            );
          }}
        />
        <Button style={styles.button} mode="contained">
          <Text>Kirish</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 16,
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "700",
  },
  inputs: {
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
  bottomText: {
    marginTop: 20,
    alignItems: "center",
  },
});
