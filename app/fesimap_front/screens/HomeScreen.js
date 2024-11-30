import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

export default function HomeScreen({ navigation }) {
  // 축제 일정 데이터
  const upcomingFestivals = [
    {
      id: "1",
      name: "벚꽃축제",
      location: "여의도 공원",
      icon: "🌸",
      date: "2025-04-05",
    },
    {
      id: "2",
      name: "크리스마스",
      location: "잠실 롯데월드",
      icon: "🎄",
      date: "2025-12-25",
    },
    {
      id: "3",
      name: "내생일",
      location: "우리집앞",
      icon: "🎆",
      date: "2025-09-20",
    },
  ];

  const renderFestivalItem = ({ item }) => (
    <View style={styles.festivalItem}>
      <Text style={styles.festivalIcon}>{item.icon}</Text>
      <View>
        <Text style={styles.festivalName}>{item.name}</Text>
        <Text style={styles.festivalLocation}>Location: {item.location}</Text>
        <Text style={styles.festivalLocation}>Date: {item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 상단 제목 */}
      <Text style={styles.title}>Festimap</Text>

      {/* 상단 버튼 섹션 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("FestivalList")}
        >
          <Text style={styles.emoji}>🎠</Text>
          <Text style={styles.cardText}>축제 목록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SavedFestivals")}
        >
          <Text style={styles.emoji}>🗃️</Text>
          <Text style={styles.cardText}>저장된 축제</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Community")}
        >
          <Text style={styles.emoji}>💬</Text>
          <Text style={styles.cardText}>혼잡도 커뮤니티</Text>
        </TouchableOpacity>
      </View>

      {/* 현재 위치에서 진행 중인 축제 */}
      <View style={styles.currentFestivalContainer}>
        <Text style={styles.sectionTitle}>내 위치에서 진행중인 축제</Text>
        <View style={styles.currentFestival}>
          <Image
            source={require("../assets/images/image.png")} // 이미지 경로
            style={styles.image} // 스타일 적용
          />
        </View>
        <Text style={styles.currentFestivalTitle}>2025 세계 불꽃축제</Text>
      </View>

      {/* 다가오는 축제 일정 */}
      <View style={styles.upcomingFestivalContainer}>
        <Text style={styles.sectionTitle}>다가오는 축제 일정</Text>
        <FlatList
          data={upcomingFestivals}
          renderItem={renderFestivalItem}
          keyExtractor={(item) => item.id}
        />
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  emoji: {
    fontSize: 20,
    marginBottom: 5,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    fontWeight: 1000,
    textAlign: "center",
  },
  currentFestivalContainer: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 350, // 이미지 너비
    height: 200, // 이미지 높이
    // resizeMode: "contain", // 이미?지 크기 조정 모드
    borderRadius: 10,
  },
  currentFestival: {
    height: 200,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  currentFestivalText: {
    fontSize: 16,
    color: "#888",
  },
  currentFestivalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  upcomingFestivalContainer: {
    marginTop: 30,
  },
  festivalItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  festivalIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  festivalName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  festivalLocation: {
    fontSize: 14,
    color: "#888",
    marginVertical: 3,
  },
});
