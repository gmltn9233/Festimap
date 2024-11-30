import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function MapDetailsScreen() {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [activeTab, setActiveTab] = useState("congestion"); // 현재 활성화된 탭 ("congestion" 또는 "popularity")

  const congestionData = [
    {
      id: "1",
      name: "여의도역 1번출구",
      location: "Waterfront Park",
      status: "red",
    },
    { id: "2", name: "배달존 2", location: "City Center", status: "yellow" },
    { id: "3", name: "선착장", location: "Hilltop Gardens", status: "green" },
  ];

  const popularityData = [
    { id: "1", name: "홍대입구", location: "Hongdae Area", status: "red" },
    { id: "2", name: "강남역", location: "Gangnam Station", status: "yellow" },
    {
      id: "3",
      name: "북촌 한옥마을",
      location: "Bukchon Village",
      status: "green",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate("DetailInfo", {
          name: item.name,
          location: item.location,
          status: item.status,
          distance: "1km", // 거리 정보를 전달 (예제용)
        })
      }
    >
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{item.id}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>Location: {item.location}</Text>
      </View>
      <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusIndicator,
            {
              backgroundColor:
                item.status === "red"
                  ? "red"
                  : item.status === "yellow"
                  ? "yellow"
                  : "green",
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 상단 탭 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "congestion" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("congestion")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "congestion" && styles.activeTabButtonText,
            ]}
          >
            혼잡도순
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "popularity" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("popularity")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "popularity" && styles.activeTabButtonText,
            ]}
          >
            인기순
          </Text>
        </TouchableOpacity>
      </View>

      {/* 리스트 */}
      <FlatList
        data={activeTab === "congestion" ? congestionData : popularityData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // padding: 20,
  },

  tabContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabButton: {
    marginVertical: 5,
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: "#dddddd80",
    width: 80,
    alignItems: "center",
    borderRadius: 30,
  },
  tabButtonText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabButton: {
    // borderBottomWidth: 2,
    backgroundColor: "#dddddd80",
  },
  activeTabButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  rankContainer: {
    width: 30,
    alignItems: "center",
  },
  rank: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 15,
    marginTop: 3,
    color: "#666",
  },
  statusContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
  statusIndicator: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
});
