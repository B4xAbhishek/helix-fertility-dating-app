import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WHITE, BLACK, DARK_GRAY } from "../assets/styles";

const Messages = () => {
  const matches = [
    {
      id: 1,
      name: "Sarah",
      image: require("../assets/images/02.jpg"),
      newMatches: "50+",
    },
  ];

  const chats = [
    {
      id: 1,
      name: "Aran",
      image: require("../assets/images/01.jpg"),
      lastMessage: "My day has been lovely thanks it's been a little...",
      time: "1 day ago",
      status: "Your move",
    },
    {
      id: 2,
      name: "Amar",
      image: require("../assets/images/03.jpg"),
      lastMessage: "Occasionally. Though CA is a big state so I like...",
      time: "1 day ago",
      status: "Your move",
    },
    {
      id: 3,
      name: "Dominic",
      image: require("../assets/images/04.jpg"),
      lastMessage: "Are you there now?",
      time: "2 days ago",
      status: "Your move",
    },
    {
      id: 4,
      name: "Apu",
      image: require("../assets/images/05.jpg"),
      lastMessage: "Wanna meet tomorrow evening ?",
      time: "2 days ago",
      status: "Your move",
    },
    {
      id: 5,
      name: "Aman",
      image: require("../assets/images/06.jpg"),
      lastMessage: "Windsor outside of London",
      time: "2 days ago",
      status: "Your move",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color={BLACK} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Your matches section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your matches</Text>
          <View style={styles.matchesCard}>
            <Image source={matches[0].image} style={styles.matchImage} />
            <View style={styles.matchContent}>
              <Text style={styles.matchText}>
                People are waiting to talk to you. Like them back to start chatting.
              </Text>
              <TouchableOpacity style={styles.seeWhoButton}>
                <Text style={styles.seeWhoText}>See who's liked you</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.matchBadge}>
              <Text style={styles.matchBadgeText}>{matches[0].newMatches}</Text>
            </View>
          </View>
        </View>

        {/* Chats section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Chats (Recent)</Text>
            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="menu" size={24} color={BLACK} />
            </TouchableOpacity>
          </View>

          {/* Opening Moves Card */}
          <TouchableOpacity style={styles.openingMovesCard}>
            <View style={styles.openingMovesContent}>
              <View style={styles.openingMovesIcon}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>A</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>A</Text>
                </View>
              </View>
              <View style={styles.openingMovesText}>
                <Text style={styles.openingMovesTitle}>Need help with the first message?</Text>
                <Text style={styles.openingMovesSubtitle}>Try Opening Moves.</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={DARK_GRAY} />
            </View>
          </TouchableOpacity>

          {/* Chat List */}
          {chats.map((chat) => (
            <TouchableOpacity key={chat.id} style={styles.chatItem}>
              <View style={styles.chatImageContainer}>
                <Image source={chat.image} style={styles.chatImage} />
                <View style={styles.onlineIndicator} />
              </View>
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatTime}>{chat.time}</Text>
                </View>
                <View style={styles.chatMessageContainer}>
                  <Text style={styles.chatMessage} numberOfLines={1}>
                    {chat.lastMessage}
                  </Text>
                  <View style={styles.chatStatus}>
                    <Text style={styles.chatStatusText}>{chat.status}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: BLACK,
  },
  searchButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: BLACK,
  },
  menuButton: {
    padding: 8,
  },
  matchesCard: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  matchImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  matchContent: {
    flex: 1,
  },
  matchText: {
    fontSize: 14,
    color: DARK_GRAY,
    lineHeight: 20,
    marginBottom: 8,
  },
  seeWhoButton: {
    alignSelf: "flex-start",
  },
  seeWhoText: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
  matchBadge: {
    position: "absolute",
    top: 8,
    right: 12,
    backgroundColor: "#FFD93D",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 30,
    alignItems: "center",
  },
  matchBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: BLACK,
  },
  openingMovesCard: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  openingMovesContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  openingMovesIcon: {
    flexDirection: "row",
    marginRight: 12,
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: "#FFD93D",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
  },
  iconText: {
    fontSize: 12,
    fontWeight: "bold",
    color: BLACK,
  },
  openingMovesText: {
    flex: 1,
  },
  openingMovesTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: BLACK,
    marginBottom: 2,
  },
  openingMovesSubtitle: {
    fontSize: 14,
    color: DARK_GRAY,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  chatImageContainer: {
    position: "relative",
    marginRight: 12,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFD93D",
    borderWidth: 2,
    borderColor: WHITE,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: BLACK,
  },
  chatTime: {
    fontSize: 12,
    color: DARK_GRAY,
  },
  chatMessageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatMessage: {
    fontSize: 14,
    color: DARK_GRAY,
    flex: 1,
    marginRight: 8,
  },
  chatStatus: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  chatStatusText: {
    fontSize: 12,
    color: DARK_GRAY,
    fontWeight: "500",
  },
});

export default Messages;
