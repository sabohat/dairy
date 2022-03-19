import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ArticlesScreen({navigation}) {
    const handleArticleClick = () => {
        navigation.navigate("Article");
    }
    
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Stories</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => articleCard({ item, onPress: handleArticleClick })}
          keyExtractor={(item) => item.id}
          onPress={handleArticleClick}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const data = [
  {
    id: 1,
    title: "Article 1",
    category: "Category 1",
    author: "Sabokhat",
    date: "12/2022",
  },
  {
    id: 2,
    title: "Article 2",
    category: "Category 2",
    author: "Sabokhat",
    date: "12/2022",
  },
  {
    id: 3,
    title: "Article 2",
    category: "Category 2",
    author: "Sabokhat",
    date: "12/2022",
  },
];



const articleCard = ({ item, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.info}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </Pressable>
  );
};

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
