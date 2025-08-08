import React from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
import { TabBarIconT } from "../types";

const TabBarIcon = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? PRIMARY_COLOR : DARK_GRAY;
  const textFocused = focused ? PRIMARY_COLOR : DARK_GRAY;

  const getIconName = (name: string) => {
    switch (name) {
      case "search":
        return "search";
      case "heart":
        return "heart";
      case "chatbubble":
        return "chatbubbles";
      case "person":
        return "person";
      default:
        return name;
    }
  };

  return (
    <View style={[styles.iconMenu, focused && styles.iconMenuFocused]}>
      <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
        <Ionicons 
          name={getIconName(iconName) as any} 
          size={24} 
          color={iconFocused} 
        />
      </View>
      <Text style={[styles.tabButtonText, { color: textFocused }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconMenu: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    minWidth: 60,
  },
  iconMenuFocused: {
    backgroundColor: "rgba(147, 51, 234, 0.1)",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  iconContainerFocused: {
    transform: [{ scale: 1.1 }],
  },
  tabButtonText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default TabBarIcon;
