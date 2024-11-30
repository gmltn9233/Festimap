import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function FireworksCommunityScreen({ navigation }) {
  const posts = [
    {
      id: "1",
      title: "불꽃축제 명당 추천",
      content:
        "이번 주 불꽃축제 명당은 강변 공원 쪽이라고 하네요. 다들 가보세요!",
      date: "2025-08-12",
    },
    {
      id: "2",
      title: "불꽃놀이 시간표 공유",
      content: "19:00 시작, 20:30 종료 예정입니다. 타이밍 놓치지 마세요!",
      date: "2025-08-11",
    },
    {
      id: "3",
      title: "차량 통제 구간 주의!",
      content: "축제 기간 중 근처 도로는 17:00부터 통제된다고 합니다.",
      date: "2025-08-10",
    },
  ];

  const renderPost = ({ item }) => (
    <TouchableOpacity
      style={styles.post}
      onPress={() => navigation.navigate("FireworksPostDetail")}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postDate}>작성일: {item.date}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      <Text style={styles.title}>🎆 불꽃축제 정보 공유</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("WritePost", { category: "불꽃축제 정보" })
        }
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  maintitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  post: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 15,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postDate: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
    marginBottom: 10,
  },
  postContent: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "gray",
    borderRadius: 100,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 45,
    textAlign: "center",
    top: 5,
  },
});
