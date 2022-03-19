import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ArticleDetails({ route, navigator }) {
  const { data } = route.params;
  const {item} = data;
  console.log("data", data);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{item.title}</Text>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.contentWrapper}>
            <Text style={styles.content}>{item.content}</Text>
        </View>
        <View style={styles.info}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      marginTop: 16,
    },
    card: {
      marginTop: 5,
      height: 300,
    },
    image: {
      width: "100%",
      height: 200,
      borderRadius: 10,
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
    contentWrapper: {
        marginTop: 8,
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
  });
  