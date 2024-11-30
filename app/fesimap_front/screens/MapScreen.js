import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import MapDetailsScreen from "./MapDetailsScreen";

export default function MapScreen() {
  const [viewType, setViewType] = useState("map"); // "map" or "info"

  const toggleView = (type) => {
    setViewType(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      {/* 상단 탭 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            viewType === "map" && styles.activeTabButton,
          ]}
          onPress={() => toggleView("map")}
        >
          <Text
            style={[
              styles.tabButtonText,
              viewType === "map" && styles.activeTabButtonText,
            ]}
          >
            전지역 지도
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            viewType === "info" && styles.activeTabButton,
          ]}
          onPress={() => toggleView("info")}
        >
          <Text
            style={[
              styles.tabButtonText,
              viewType === "info" && styles.activeTabButtonText,
            ]}
          >
            세부 정보
          </Text>
        </TouchableOpacity>
      </View>

      {/* 지도 화면 */}
      {viewType === "map" && (
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Map.png")} // 이미지 경로
          />
        </TouchableOpacity>
        // <MapView
        //   style={styles.map}
        //   initialRegion={{
        //     latitude: 37.5665, // 서울
        //     longitude: 126.978,
        //     latitudeDelta: 0.1,
        //     longitudeDelta: 0.1,
        //   }}
        // >
        //   {/* 마커 */}
        //   <Marker
        //     coordinate={{ latitude: 37.5665, longitude: 126.978 }}
        //     title="혼잡 지역"
        //     description="혼잡도가 높은 지역입니다."
        //     pinColor="red"
        //   />
        //   {/* 혼잡도 범위 표시 */}
        //   <Circle
        //     center={{ latitude: 37.5665, longitude: 126.978 }}
        //     radius={1000}
        //     strokeWidth={2}
        //     strokeColor="rgba(255,0,0,0.5)"
        //     fillColor="rgba(255,0,0,0.3)"
        //   />
        // </MapView>
      )}

      {/* 세부 정보 화면 */}
      {viewType === "info" && (
        <View style={styles.infoContainer}>
          {/* <Text style={styles.infoText}>현재 혼잡도: 높음</Text>
          <Text style={styles.infoText}>추천 시간대: 18:00 이후</Text>
          <Text style={styles.infoText}>최적 경로: 강변길을 추천합니다.</Text> */}
          <MapDetailsScreen />
        </View>
      )}
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
    marginTop: 35,
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  tabButtonText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  activeTabButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
    // width: "",
  },
  infoText: {
    fontSize: 18,
    marginVertical: 10,
  },
});
