import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FireworksPostDetailScreen({ navigation }) {
  const post = {
    title: "불꽃축제 명당 추천",
    date: "2025-08-12",
    content: `이번 주 불꽃축제 명당은 강변 공원 쪽이라고 하네요. 
    넓은 공간과 강이 내려다보이는 뷰가 좋아 많은 사람들이 추천하고 있습니다.
    특히, 강변 공원 중에서도 북쪽 입구 근처가 인기가 많다고 합니다.
    
    주차 공간이 부족할 수 있으니 대중교통 이용을 추천드리고요, 
    돗자리와 간단한 음식을 준비해 가시면 더 즐거운 시간을 보낼 수 있을 거예요!
    
    주변에는 간이 화장실도 설치되어 있고, 인근 상가에서 간단한 음식도 구매할 수 있으니 참고하세요.
    `,
    tips: [
      "17:00 이전에 도착하면 좋은 자리를 잡을 수 있습니다.",
      "돗자리와 담요를 챙기세요. 밤에는 추울 수 있습니다.",
      "간단한 간식이나 음료를 준비해 가시면 편리합니다.",
      "쓰레기를 되가져오는 매너를 꼭 지켜주세요.",
    ],
  };

  return (
    <View style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* 제목 */}
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>작성일: {post.date}</Text>
      {/* 내용 */}
      <View style={styles.contentview}>
        <Text style={styles.content}>{post.content}</Text>
      </View>

      {/* 추가 팁 섹션 */}
      <Text style={styles.tipsTitle}>🎆 추가 팁</Text>
      {post.tips.map((tip, index) => (
        <Text key={index} style={styles.tipItem}>
          - {tip}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  backButton: {
    marginTop: 30,
    marginBottom: 30,
  },
  backButtonText: {
    color: "black",
    fontSize: 30,
  },
  date: {
    marginLeft: 220,
    marginBottom: 10,
    color: "gray",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  content: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    lineHeight: 24,
    borderRadius: 10,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tipItem: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
});
