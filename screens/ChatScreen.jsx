import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  RadioButton,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

export default function ChatScreen({ navigation }) {
  const [checked, setChecked] = React.useState("menses");
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
          <View style={styles.cardInfo}>
            <Title>User 11121</Title>
            <Paragraph>Email / Phone number</Paragraph>
          </View>
        </Card.Content>
      </Card>

      <View>
        <Text style={styles.sectionTitle}>My Goal</Text>
        <View style={styles.optionList}>
          <Pressable style={styles.option} onPress={() => setChecked("menses")}>
            <Text>Tracking Cycle</Text>
            <RadioButton
              value="menses"
              status={checked === "menses" ? "checked" : "unchecked"}
            />
          </Pressable>
          <Divider />
          <Pressable
            style={styles.option}
            onPress={() => setChecked("conception")}
          >
            <Text>Getting Pregnant</Text>
            <RadioButton
              value="conception"
              status={checked === "conception" ? "checked" : "unchecked"}
            />
          </Pressable>
          <Divider />
          <Pressable
            style={styles.option}
            onPress={() => setChecked("pregnant")}
          >
            <Text>Track Pregnancy</Text>
            <RadioButton
              value="pregnant"
              status={checked === "pregnant" ? "checked" : "unchecked"}
            />
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Sozlamalar</Text>
        <View style={styles.optionList}>
          <Pressable
            style={styles.option}
            onPress={() => console.log("settings")}
          >
            <Text>Notifications</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </Pressable>
          <Divider />
          <Pressable
            style={styles.option}
            onPress={() => console.log("settings")}
          >
            <Text>Update Profile</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </Pressable>
          <Divider />
          <Pressable
            style={styles.option}
            onPress={() => console.log("settings")}
          >
            <Text>General</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </Pressable>
          <Divider />
          <Pressable
            style={styles.option}
            onPress={() => {
              signOut(auth);
            }}
          >
            <Text>Akkountdan Chiqish</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 16,
  },
  card: {
    marginVertical: 16,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardContent: {
    flexDirection: "row",
  },
  cardInfo: {
    marginLeft: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  optionList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
  },
  category: {
    fontSize: 12,
    color: "blue",
    textTransform: "uppercase",
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    marginTop: 8,
    fontSize: 12,
    color: "grey",
    flexDirection: "row",
  },
  author: {
    marginRight: "auto",
  },
  titleWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  floatingButton: {
    backgroundColor: "#771E99",
    position: "absolute",
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    bottom: 15,
    right: 20,
    borderRadius: 30,
    zIndex: 3,
  },
  create: {
    color: "#ffffff",
    marginLeft: 10,
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    lineHeight: 24,
  },
});
