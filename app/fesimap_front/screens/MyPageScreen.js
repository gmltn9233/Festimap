import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function MyPageScreen() {
  const handlePress = (action) => {
    if (action === "logout") {
      Alert.alert("로그아웃", "로그아웃 하시겠습니까?", [
        { text: "취소", style: "cancel" },
        { text: "확인", onPress: () => console.log("로그아웃 실행") },
      ]);
    } else if (action === "withdraw") {
      Alert.alert("탈퇴하기", "정말 탈퇴하시겠습니까?", [
        { text: "취소", style: "cancel" },
        { text: "확인", onPress: () => console.log("탈퇴 실행") },
      ]);
    } else {
      console.log(`${action} 버튼 클릭`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Festimap</Text>
      {/* 상단 프로필 섹션 */}
      <View style={styles.profileContainer}>
        <Image
          // source={require("../assets/images/profile.png")} // 프로필 이미지 경로
          style={styles.profileImage}
        />
        <Text style={styles.userName}>캡숑짱스톤</Text>
      </View>

      {/* 메뉴 리스트 */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress("editProfile")}
      >
        <Text style={styles.menuText}>개인정보 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress("logout")}
      >
        <Text style={styles.menuText}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress("withdraw")}
      >
        <Text style={styles.menuText}>?탈퇴하기</Text>
      </TouchableOpacity>
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
    marginTop: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
