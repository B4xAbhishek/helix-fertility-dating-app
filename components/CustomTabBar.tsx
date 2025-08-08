import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WHITE, BLACK, DARK_GRAY } from "../assets/styles";

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabBar = ({ state, descriptors, navigation }: CustomTabBarProps) => {
  const tabIcons = {
    Explore: "diamond",
    Matches: "people",
    Chat: "chatbubbles",
    Profile: "person",
  };

  const tabLabels = {
    Explore: "Discover",
    Matches: "People",
    Chat: "Chats",
    Profile: "Profile",
  };

  const getNotificationCount = (routeName: string) => {
    switch (routeName) {
      case "Matches":
        return "50+";
      case "Chat":
        return "5";
      case "Profile":
        return "1";
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = tabLabels[route.name as keyof typeof tabLabels] || route.name;
        const iconName = tabIcons[route.name as keyof typeof tabIcons] || "help";
        const isFocused = state.index === index;
        const notificationCount = getNotificationCount(route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={onPress}
          >
            <View style={styles.iconContainer}>
              <Ionicons
                name={iconName as any}
                size={24}
                color={isFocused ? "#FF6B6B" : DARK_GRAY}
              />
              {notificationCount && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>{notificationCount}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.tabLabel, isFocused && styles.activeTabLabel]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingBottom: 20,
    paddingTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  iconContainer: {
    position: "relative",
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: DARK_GRAY,
    fontWeight: "500",
  },
  activeTabLabel: {
    color: "#FF6B6B",
    fontWeight: "600",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -8,
    backgroundColor: "#FF3B30",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  notificationText: {
    fontSize: 10,
    color: WHITE,
    fontWeight: "bold",
  },
});

export default CustomTabBar;

