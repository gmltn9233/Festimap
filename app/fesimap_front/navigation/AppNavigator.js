import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import MyPageScreen from "../screens/MyPageScreen";
import SplashScreen from "../screens/SplashScreen";
import FestivalListScreen from "../screens/FestivalListScreen";
import CommunityScreen from "../screens/CommunityScreen";
import { Ionicons } from "@expo/vector-icons";
import SavedFestivalListScreen from "../screens/SavedFestivalListScreen";
import FireworksCommunityScreen from "../screens/FireworksCommunityScreen";
import CongestionCommunityScreen from "../screens/CongestionCommunityScreen";
import FreeDiscussionCommunityScreen from "../screens/FreeDiscussionCommunityScreen";
import WritePostScreen from "../screens/WritePostScreen";
import FireworksPostDetailScreen from "../screens/FireworksPostDetailScreen";
import DetailInfoScreen from "../screens/DetailInfoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator 설정
function TabNavigator({ savedFestivals, setSavedFestivals }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline"; // 집 모양 아이콘
          } else if (route.name === "Map") {
            iconName = "location-outline"; // 지도 핀 모양 아이콘
          } else if (route.name === "MyPage") {
            iconName = "person-outline"; // 사람 모양 아이콘
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "gray",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {(props) => (
          <HomeScreen
            {...props}
            savedFestivals={savedFestivals}
            setSavedFestivals={setSavedFestivals}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator 설정
export default function AppNavigator() {
  const [savedFestivals, setSavedFestivals] = useState([]); // 저장된 축제 상태 관리

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {(props) => (
            <TabNavigator
              {...props}
              savedFestivals={savedFestivals}
              setSavedFestivals={setSavedFestivals}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FestivalList" options={{ headerShown: false }}>
          {(props) => (
            <FestivalListScreen
              {...props}
              savedFestivals={savedFestivals}
              setSavedFestivals={setSavedFestivals}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="SavedFestivals" options={{ headerShown: false }}>
          {(props) => (
            <SavedFestivalListScreen
              {...props}
              savedFestivals={savedFestivals}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Community"
          component={CommunityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FireworksCommunity"
          component={FireworksCommunityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CongestionCommunity"
          component={CongestionCommunityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FreeDiscussionCommunity"
          component={FreeDiscussionCommunityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WritePost"
          component={WritePostScreen}
          options={{ title: "글쓰기" }}
        />
        <Stack.Screen
          name="FireworksPostDetail"
          component={FireworksPostDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailInfo"
          component={DetailInfoScreen}
          options={{ title: "세부 정보", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
