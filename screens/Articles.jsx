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
        <Text style={styles.sectionTitle}>Maqolalar</Text>
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
        style={{ paddingHorizontal: 16, marginBottom:80 }}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    title: "Hayz nima? Yosh qiz va onalarga maslahatlar",
    category: "Hayz",
    author: "Anon",
    date: "12/2022",
    content:
      "Hayz sikli-ritmik va siklik qaytalanuvchi gormanal o‘zgarishlar bolib organizmni homlaorlikka tayorlashdir.Hayz — oy ko‘rishning boshlanishi qizlarning balog‘atga yetganidan nishona. Bu qizlar va ayollarda har 21—30 (ko‘pincha 28) kunda sodir bo‘ladigan, 3—6 kun davom etadigan biologik jarayon. Hayz payti asosan tuxumdon va bachadonda o‘zgarish ro‘y beradi, bachadondan ma’lum miqdorda qon ketadi.",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
    title:
      "Ko’ngil aynishi haqida – sabablari, belgilari, tashxislash, davolash va oldini olish",
    category: "Sog'liq",
    author: "Anon",
    date: "12/2022",
    content:
      "Ko’ngil aynish – bu epigastral sohada, to’sh suyagi orqasida, tomoqda va og’izda o’ziga xos noqulaylik hissi hisoblanib, bu ko’pincha qusish xabarchisidir. Tuprik, gipergidroz, holsizlik, bosh aylanishi bilan birga kelishi mumkin. Bu dietasida xato bo’lgan sog’lom odamlarda juda kam uchraydi. Odatda ovqat hazm qilish organlari va markaziy asab tizimining kasalliklari, intoksikatsiya bilan paydo bo’ladi. Ko’ngil aynish sabablarini aniqlash uchun endoskopik, rentgenologik, ultratovush, elektrofiziologik va laboratoriya tadqiqot usullaridan foydalaniladi. Tashxis qo’yilishidan oldin odatda simptomning og’irligini kamaytirish uchun sedativ fitopreparatlar, prokinetiklar va enterosorbentslar qo’llaniladi.",
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300",
    title:
      "Husnbuzarlar yuzda emas, tanada paydo bo‘lsa: kelib chiqish sabablari va davolash usullari",
    category: "Go'zallik",
    author: "Anon",
    date: "12/2022",
    content:
      "Ushbu muammo ikki xil sabab tufayli yuzaga kelishi mumkin: tashqi va ichki. Tashqi tomondan ko‘pincha gigiyena talablarining buzilishi, shuningdek, sifatsiz kiyimlar yoki yomon ekologiya tufayli yuzaga keladi. Ichki sabablar esa odatda endokrin tizimning buzilishi, dori-darmonlar qabul qilishning nojo‘ya ta’siri, stress va ovqatlanishning buzilishi bilan bog‘liq.",
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
