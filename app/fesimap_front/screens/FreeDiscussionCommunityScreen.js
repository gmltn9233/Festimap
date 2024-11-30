import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FreeDiscussionCommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      <Text style={styles.title}>💬 자유로운 토론</Text>
      <Text style={styles.content}>
        여기에 자유로운 토론 글 목록이 표시됩니다.
      </Text>
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
  content: {
    fontSize: 16,
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
