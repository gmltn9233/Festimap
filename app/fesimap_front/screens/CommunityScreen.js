import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CommunityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      <Text style={styles.title}>커뮤니티 & 축제 정보 공유</Text>

      <View style={styles.postContainer}>
        <TouchableOpacity
          style={styles.post}
          onPress={() => navigation.navigate("FireworksCommunity")}
        >
          <Text style={styles.postTitle}>🎆 불꽃축제 정보 공유</Text>
          <Text style={styles.postContent}>
            이번 주 불꽃축제 현황 업데이트! 함께 모여봐요.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.post}
          onPress={() => navigation.navigate("CongestionCommunity")}
        >
          <Text style={styles.postTitle}>🚦 축제 혼잡도</Text>
          <Text style={styles.postContent}>
            실시간 혼잡도 정보 업데이트와 공유하세요.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.post}
          onPress={() => navigation.navigate("FreeDiscussionCommunity")}
        >
          <Text style={styles.postTitle}>💬 자유로운 토론</Text>
          <Text style={styles.postContent}>
            축제와 관련된 자유로운 대화를 나눠보세요.
          </Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  postContainer: {
    flex: 1,
  },
  post: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postContent: {
    fontSize: 14,
    color: "#666",
  },
});
