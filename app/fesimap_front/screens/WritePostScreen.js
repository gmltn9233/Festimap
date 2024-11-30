import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function WritePostScreen({ navigation, route }) {
  const { category } = route.params || {}; // 글쓰기 카테고리 받기
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 상태

  // 이미지 선택 핸들러
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("권한 필요", "갤러리에 접근하려면 권한이 필요합니다.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // 이미지 URI 저장
    }
  };

  // 글쓰기 완료 핸들러
  const handlePost = () => {
    if (!title || !content) {
      Alert.alert("알림", "제목과 내용을 모두 입력해주세요!");
      return;
    }
    // 여기에서 서버나 상태 관리 라이브러리로 데이터 전송 가능
    console.log(
      `Category: ${category}, Title: ${title}, Content: ${content}, Image: ${selectedImage}`
    );
    Alert.alert("글쓰기 완료", "글이 성공적으로 작성되었습니다.");
    navigation.goBack(); // 이전 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} 글쓰기</Text>

      <TextInput
        style={styles.input}
        placeholder="제목을 입력하세요"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.textArea}
        placeholder="내용을 입력하세요"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={5}
      />

      {/* 이미지 추가 버튼 */}
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>이미지 추가</Text>
      </TouchableOpacity>

      {/* 선택된 이미지 미리보기 */}
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.previewImage} />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handlePost}>
        <Text style={styles.submitButtonText}>작성 완료</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    height: 200,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 16,
    textAlignVertical: "top", // Android에서 텍스트 정렬
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  imageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  previewImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "contain",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
