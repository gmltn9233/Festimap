import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function CongestionCommunityScreen() {
  const posts = [
    {
      id: "1",
      title: "지금 너무 붐벼요!",
      content: "중앙 광장 쪽은 사람이 너무 많아요. 다른 곳 추천 부탁드려요.",
    },
    {
      id: "2",
      title: "혼잡도 낮은 입구",
      content: "서쪽 입구는 생각보다 한산해서 괜찮아요!",
    },
    {
      id: "3",
      title: "주차장 만석입니다.",
      content: "주차장은 이미 만석이라 대중교통 이용을 추천드립니다.",
    },
  ];

  const renderPost = ({ item }) => (
    <TouchableOpacity style={styles.post}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      <Text style={styles.title}>🚦 축제 혼잡도</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton}>
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
