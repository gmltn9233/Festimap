import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function DetailInfoScreen({ route }) {
  const { name, location, status, distance } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>
      {/* 상단 이름과 상태 */}
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>지금 위치에서 {distance}km</Text>
        <Text
          style={[
            styles.status,
            status === "red"
              ? styles.statusRed
              : status === "yellow"
              ? styles.statusYellow
              : styles.statusGreen,
          ]}
        >
          {status === "red"
            ? "혼잡도가 높음"
            : status === "yellow"
            ? "혼잡도가 보통"
            : "혼잡도가 낮음"}
        </Text>
      </View>

      {/* 장소 혼잡도 그래프 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>장소 혼잡도</Text>
        <View style={styles.graphPlaceholder}>
          <Text>그래프 2023, 2024, 현재 혼잡도 그래프</Text>
        </View>
      </View>

      {/* 방문자 연령분포 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>방문자 연령분포</Text>
        <View style={styles.graphPlaceholder}>
          <Text>10대 ~ 70대 연령 분포 그래프</Text>
        </View>
      </View>

      {/* 지도 */}
      <View style={styles.section}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.5665, // 임시 좌표 (서울)
            longitude: 126.978,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.5665, longitude: 126.978 }}
            title={name}
            description={location}
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  btn: {
    // marginTop: 10,
  },
  backButton: {
    marginTop: 50,
    marginLeft: 25,
  },
  backButtonText: {
    color: "black",
    fontSize: 30,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusRed: {
    color: "red",
  },
  statusYellow: {
    color: "orange",
  },
  statusGreen: {
    color: "green",
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  graphPlaceholder: {
    height: 100,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  map: {
    height: 200,
    borderRadius: 10,
  },
});
