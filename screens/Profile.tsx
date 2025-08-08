import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE, BLACK, DARK_GRAY, PRIMARY_COLOR, LIGHT_GRAY, BORDER_GRAY } from "../assets/styles";

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
  } = DEMO[7];

  return (
    <SafeAreaView style={localStyles.container}>
      <View style={localStyles.header}>
        <Text style={localStyles.headerTitle}>Profile</Text>
        <View style={localStyles.headerButtons}>
          <TouchableOpacity style={localStyles.headerButton}>
            <Ionicons name="scan" size={24} color={BLACK} />
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.headerButton}>
            <Ionicons name="settings" size={24} color={BLACK} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={localStyles.content}>
        <View style={localStyles.profileSection}>
          <View style={localStyles.profileImageContainer}>
            <View style={localStyles.profileImage}>
              <Icon name="person" color={DARK_GRAY} size={60} />
            </View>
            <View style={localStyles.profileCompletionBadge}>
              <Text style={localStyles.profileCompletionText}>95%</Text>
            </View>
          </View>
          <View style={localStyles.profileInfo}>
            <View style={localStyles.usernameContainer}>
              <Text style={localStyles.username}>Sk</Text>
              <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
            </View>
            <TouchableOpacity style={localStyles.completeProfileButton}>
              <Text style={localStyles.completeProfileText}>Complete profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={localStyles.tabsContainer}>
          <TouchableOpacity style={[localStyles.tab, localStyles.activeTab]}>
            <Text style={[localStyles.tabText, localStyles.activeTabText]}>Pay plan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.tab}>
            <Text style={localStyles.tabText}>Dating advice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.tab}>
            <View style={localStyles.tabWithBadge}>
              <Text style={localStyles.tabText}>Photo insights</Text>
              <View style={localStyles.badge} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.tab}>
            <Text style={localStyles.tabText}>Safety</Text>
          </TouchableOpacity>
        </View>

        <View style={localStyles.featuresContainer}>
          <View style={localStyles.featureCard}>
            <View style={localStyles.featureIcon}>
              <Ionicons name="star" size={24} color={PRIMARY_COLOR} />
              <Ionicons name="add" size={16} color={BLACK} />
            </View>
            <Text style={localStyles.featureTitle}>Spotlight</Text>
            <Text style={localStyles.featureCount}>1 left</Text>
          </View>

          <View style={localStyles.featureCard}>
            <View style={localStyles.featureIcon}>
              <Ionicons name="star" size={24} color={PRIMARY_COLOR} />
            </View>
            <Text style={localStyles.featureTitle}>SuperSwipe</Text>
            <Text style={localStyles.featureCount}>5 left</Text>
          </View>
        </View>

        <View style={localStyles.premiumSection}>
          <Text style={localStyles.premiumTitle}>Premium+</Text>
          <Text style={localStyles.premiumDescription}>
            Get the VIP treatment, and enjoy better ways to connect with incredible people.
          </Text>
          <TouchableOpacity style={localStyles.premiumButton}>
            <Text style={localStyles.premiumButtonText}>Explore Premium+</Text>
          </TouchableOpacity>
        </View>

        <View style={localStyles.comparisonSection}>
          <Text style={localStyles.comparisonTitle}>What you get:</Text>
          <View style={localStyles.comparisonHeader}>
            <Text style={localStyles.comparisonLabel}>Premium+</Text>
            <Text style={localStyles.comparisonLabel}>Premium</Text>
          </View>
          
          {[
            "Get exclusive photo insights",
            "Fast track your likes",
            "Stand out every day",
            "Unlimited likes",
            "See who liked you",
            "Advanced filters",
            "Incognito mode",
            "Travel mode",
            "2 Compliments a week"
          ].map((feature, index) => (
            <View key={index} style={localStyles.featureRow}>
              <View style={localStyles.featureInfo}>
                <Ionicons name="information-circle" size={16} color={DARK_GRAY} />
                <Text style={localStyles.featureText}>{feature}</Text>
              </View>
              <View style={localStyles.checkmarks}>
                <Ionicons name="checkmark" size={20} color={BLACK} />
                <Ionicons 
                  name="checkmark" 
                  size={20} 
                  color={index >= 3 ? DARK_GRAY : BLACK} 
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: BLACK,
  },
  headerButtons: {
    flexDirection: "row",
  },
  headerButton: {
    marginLeft: 16,
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImageContainer: {
    position: "relative",
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: LIGHT_GRAY,
    alignItems: "center",
    justifyContent: "center",
  },
  profileCompletionBadge: {
    position: "absolute",
    bottom: -5,
    left: -5,
    backgroundColor: BLACK,
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  profileCompletionText: {
    color: WHITE,
    fontSize: 10,
    fontWeight: "bold",
  },
  profileInfo: {
    flex: 1,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: BLACK,
    marginRight: 8,
  },
  completeProfileButton: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: BORDER_GRAY,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  completeProfileText: {
    fontSize: 14,
    color: BLACK,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 30,
    backgroundColor: LIGHT_GRAY,
    borderRadius: 25,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 21,
  },
  activeTab: {
    backgroundColor: BLACK,
  },
  tabText: {
    fontSize: 14,
    color: BLACK,
    fontWeight: "500",
  },
  activeTabText: {
    color: WHITE,
    fontWeight: "600",
  },
  tabWithBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FF3B30",
    marginLeft: 4,
  },
  featuresContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  featureCard: {
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: BORDER_GRAY,
  },
  featureIcon: {
    marginBottom: 8,
    alignItems: "center",
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: BLACK,
    marginBottom: 4,
  },
  featureCount: {
    fontSize: 12,
    color: DARK_GRAY,
  },
  premiumSection: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  premiumTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: WHITE,
    marginBottom: 8,
  },
  premiumDescription: {
    fontSize: 14,
    color: WHITE,
    marginBottom: 16,
    lineHeight: 20,
  },
  premiumButton: {
    backgroundColor: BLACK,
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  premiumButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
  comparisonSection: {
    marginBottom: 30,
  },
  comparisonTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: BLACK,
    marginBottom: 16,
  },
  comparisonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  comparisonLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: BLACK,
    textDecorationLine: "underline",
  },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  featureInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  featureText: {
    fontSize: 14,
    color: BLACK,
    marginLeft: 8,
  },
  checkmarks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
  },
});

export default Profile;
