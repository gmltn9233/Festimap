import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main"); // Main 화면으로 이동
    }, 3000); // 3초 후 이동

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>실시간으로 보는 축제의 흐름,</Text>
      <Text style={styles.title}>Festimap</Text>
      <Image source={require("../assets/splash.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  subtitle: {
    fontSize: 20,
    position: "absolute",
    top: 230,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    position: "absolute",
    top: 240,
  },
  image: {
    width: 380,
    height: 380,
    resizeMode: "contain",
    position: "absolute",
    bottom: 5,
  },
});
