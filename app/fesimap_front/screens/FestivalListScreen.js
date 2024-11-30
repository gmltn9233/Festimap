import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function FestivalListScreen({
  savedFestivals,
  setSavedFestivals,
}) {
  const festivals = [
    {
      id: "1",
      name: "벚꽃축제",
      location: "Waterfront Park",
      icon: "🌸",
      date: "2025-04-05",
    },
    {
      id: "2",
      name: "크리스마스 마켓",
      location: "City Center",
      icon: "🎄",
      date: "2025-12-24",
    },
    {
      id: "3",
      name: "불꽃축제",
      location: "Hilltop Gardens",
      icon: "🎆",
      date: "2025-08-15",
    },
    {
      id: "4",
      name: "음악 페스티벌",
      location: "Music Hall",
      icon: "🎤",
      date: "2025-07-10",
    },
    {
      id: "5",
      name: "단풍 축제",
      location: "Mountain Trail",
      icon: "🍂",
      date: "2025-10-20",
    },
    {
      id: "6",
      name: "푸드 페스티벌",
      location: "Gourmet Street",
      icon: "🍔",
      date: "2025-05-14",
    },
    {
      id: "7",
      name: "전통문화 축제",
      location: "Cultural Center",
      icon: "🎭",
      date: "2025-06-25",
    },
    {
      id: "8",
      name: "와인 축제",
      location: "Vineyard Park",
      icon: "🍷",
      date: "2025-09-10",
    },
    {
      id: "9",
      name: "해변 축제",
      location: "Sunny Beach",
      icon: "🏖️",
      date: "2025-07-25",
    },
    {
      id: "10",
      name: "겨울왕국 축제",
      location: "Ice Land",
      icon: "❄️",
      date: "2025-01-05",
    },
  ];

  const toggleSaveFestival = (festival) => {
    if (savedFestivals.some((item) => item.id === festival.id)) {
      // 이미 저장된 경우 추가 동작 없음
      return;
    } else {
      // 저장되지 않은 경우 추가
      setSavedFestivals([...savedFestivals, festival]);
    }
  };

  const renderFestivalItem = ({ item }) => {
    const isSaved = savedFestivals.some((festival) => festival.id === item.id);
    return (
      <TouchableOpacity
        style={styles.festivalItem}
        onPress={() => toggleSaveFestival(item)}
      >
        <View style={styles.festivalRow}>
          <Text style={styles.festivalIcon}>{item.icon}</Text>
          <View>
            <Text style={styles.festivalName}>{item.name}</Text>
            <Text style={styles.festivalDate}>날짜: {item.date}</Text>
            <Text style={styles.festivalLocation}>
              Location: {item.location}
            </Text>
          </View>
          <Text style={styles.checkmark}>{isSaved ? "✔️" : "➕"}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      <Text style={styles.title}>축제 목록🎠</Text>
      <FlatList
        data={festivals}
        renderItem={renderFestivalItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  maintitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  festivalItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  festivalRow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  festivalIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  festivalName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  festivalDate: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  festivalLocation: {
    fontSize: 14,
    color: "#666",
    // marginTop: 5,
  },
  checkmark: {
    fontSize: 18,
    color: "green",
    left: 290,
    position: "absolute",
  },
});
