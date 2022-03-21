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
} from "react-native-paper";

export default function ArticlesScreen({ navigation }) {
	const handleArticleClick = (item) => {
		navigation.navigate("Article", {
			data: {
				item,
			},
		});
	};

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.sectionTitle}>Stories</Text>
			</View>
			<FlatList
				data={data}
				renderItem={({ item }) =>
					articleCard({
						item,
						onPress: (item) => handleArticleClick(item),
					})
				}
				keyExtractor={(item) => item.id}
				style={{ paddingHorizontal: 16, marginBottom: 100 }}
			/>
		</SafeAreaView>
	);
}

const data = [
	{
		id: 1,
		image: "https://picsum.photos/200/300",
		title: "Article 1",
		category: "Category 1",
		author: "Sabokhat",
		date: "12/2022",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: 2,
		image: "https://picsum.photos/200/300",
		title: "Article 2",
		category: "Category 2",
		author: "Sabokhat",
		date: "12/2022",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: 3,
		image: "https://picsum.photos/200/300",
		title: "Article 2",
		category: "Category 2",
		author: "Sabokhat",
		date: "12/2022",
		content:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
];

const articleCard = ({ item, onPress }) => {
	return (
		<Pressable style={styles.card} onPress={() => onPress(item)}>
			<Card>
				<Card.Cover source={{ uri: item.image }} />

				<Card.Content>
					<Title>{item.title}</Title>
					<Paragraph>{item.category}</Paragraph>
				</Card.Content>
			</Card>
		</Pressable>
	);
};

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
		marginTop: 5,
		marginBottom: 5,
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
