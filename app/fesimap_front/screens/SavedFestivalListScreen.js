import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SavedFestivalListScreen({
  savedFestivals,
  setSavedFestivals,
}) {
  const [notes, setNotes] = useState({}); // 축제별 메모 저장 상태

  const handleNoteChange = (id, text) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [id]: text, // 축제 ID를 키로 사용하여 메모 저장
    }));
  };

  const deleteFestival = (id) => {
    setSavedFestivals(savedFestivals.filter((festival) => festival.id !== id));
  };

  const renderFestivalItem = ({ item }) => (
    <View style={styles.festivalItem}>
      <View style={styles.festivalRow}>
        <Text style={styles.festivalIcon}>{item.icon}</Text>
        <View>
          <Text style={styles.festivalName}>{item.name}</Text>
          <Text style={styles.festivalLocation}>Location: {item.location}</Text>
        </View>
        {/* 휴지통 버튼 */}
        {/* <TouchableOpacity onPress={() => deleteFestival(item.id)}>
          <Text style={styles.trashIcon}>🗑️</Text>
        </TouchableOpacity> */}
      </View>
      {/* 메모 입력 */}
      <TextInput
        style={styles.noteInput}
        placeholder="메모를 입력하세요"
        value={notes[item.id] || ""}
        onChangeText={(text) => handleNoteChange(item.id, text)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      <Text style={styles.title}>저장된 축제</Text>
      {savedFestivals.length > 0 ? (
        <FlatList
          data={savedFestivals}
          renderItem={renderFestivalItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyText}>저장된 축제가 없습니다.</Text>
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
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
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
    position: "relative",
    // justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  festivalIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  festivalName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  festivalLocation: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  trashIcon: {
    fontSize: 24,
    marginLeft: 10,
    position: "absolute",
    left: 100,
    top: 5,
  },
  noteInput: {
    marginTop: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#ffffff",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 50,
  },
});
