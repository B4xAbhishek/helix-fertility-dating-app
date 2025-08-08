import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
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

  const { width } = useWindowDimensions();
  const horizontalPad = Math.max(16, Math.min(24, width * 0.05));
  const isVeryNarrow = width < 360;
  const featureColumns = width < 400 ? 1 : 2;

  const featureItems = [
    { key: "spotlight", title: "Spotlight", count: "1 left", withAdd: true },
    { key: "superswipe", title: "SuperSwipe", count: "5 left", withAdd: false },
  ];

  const plans = ["Premium+", "Premium"] as const;

  type Availability = "full" | "limited" | "none";

  const comparisonFeatures: { label: string; plus: Availability; basic: Availability }[] = [
    { label: "Get exclusive photo insights", plus: "full", basic: "none" },
    { label: "Fast track your likes",       plus: "full", basic: "none" },
    { label: "Stand out every day",         plus: "full", basic: "none" },
    { label: "Unlimited likes",             plus: "full", basic: "limited" },
    { label: "See who liked you",           plus: "full", basic: "limited" },
    { label: "Advanced filters",            plus: "full", basic: "limited" },
    { label: "Incognito mode",              plus: "full", basic: "none" },
    { label: "Travel mode",                 plus: "full", basic: "limited" },
    { label: "2 Compliments a week",        plus: "full", basic: "none" },
  ];

  const renderStatus = (status: Availability) => {
    switch (status) {
      case "full":
        return <Ionicons accessibilityLabel="Included" name="checkmark" size={20} color={BLACK} />;
      case "limited":
        return (
          <View style={localStyles.limitedPill}>
            <Ionicons accessibilityLabel="Limited" name="ellipsis-horizontal" size={14} color={BLACK} />
            <Text style={localStyles.limitedText}>Limited</Text>
          </View>
        );
      default:
        return <Ionicons accessibilityLabel="Not included" name="remove" size={20} color={DARK_GRAY} />;
    }
  };

  return (
    <SafeAreaView style={localStyles.container}>
      <View style={[localStyles.header, { paddingHorizontal: horizontalPad }]}>
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

      <ScrollView style={localStyles.content} contentContainerStyle={{ paddingHorizontal: horizontalPad }}>
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

        <View style={[localStyles.tabsContainer, { padding: isVeryNarrow ? 2 : 4 }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <TouchableOpacity style={[localStyles.tab, localStyles.activeTab, { minWidth: 120 }]}>
              <Text style={[localStyles.tabText, localStyles.activeTabText]}>Pay plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[localStyles.tab, { minWidth: 120 }]}>
              <Text style={localStyles.tabText}>Dating advice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[localStyles.tab, { minWidth: 140 }]}>
              <View style={localStyles.tabWithBadge}>
                <Text style={localStyles.tabText}>Photo insights</Text>
                <View style={localStyles.badge} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[localStyles.tab, { minWidth: 120 }]}>
              <Text style={localStyles.tabText}>Safety</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <FlatList
          data={featureItems}
          keyExtractor={(item) => item.key}
          numColumns={featureColumns}
          columnWrapperStyle={featureColumns > 1 ? { justifyContent: "space-between" } : undefined}
          contentContainerStyle={{ marginBottom: 30 }}
          renderItem={({ item }) => (
            <View style={[localStyles.featureCard, { flex: 1, marginHorizontal: featureColumns > 1 ? 5 : 0, marginBottom: 10 }]}>
              <View style={localStyles.featureIcon}>
                <Ionicons name="star" size={24} color={PRIMARY_COLOR} />
                {item.withAdd && <Ionicons name="add" size={16} color={BLACK} />}
              </View>
              <Text style={localStyles.featureTitle}>{item.title}</Text>
              <Text style={localStyles.featureCount}>{item.count}</Text>
            </View>
          )}
        />

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
          <FlatList
            data={comparisonFeatures}
            keyExtractor={(item) => item.label}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
              <View style={localStyles.tableHeader}>
                <View style={[localStyles.headerFeatureCell]}>
                  <Text style={localStyles.headerText}>Feature</Text>
                </View>
                <View style={localStyles.headerPlanCell}>
                  <Text style={localStyles.headerText}>{plans[0]}</Text>
                </View>
                <View style={localStyles.headerPlanCell}>
                  <Text style={localStyles.headerText}>{plans[1]}</Text>
                </View>
              </View>
            }
            renderItem={({ item, index }) => (
              <View style={[localStyles.tableRow, index % 2 === 0 && localStyles.rowAlt]}> 
                <View style={localStyles.featureCell}>
                  <View style={localStyles.featureInfo}>
                    <Ionicons name="information-circle" size={16} color={DARK_GRAY} />
                    <Text style={localStyles.featureText}>{item.label}</Text>
                  </View>
                </View>
                <View style={localStyles.planCell}>{renderStatus(item.plus)}</View>
                <View style={localStyles.planCell}>{renderStatus(item.basic)}</View>
              </View>
            )}
          />
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
    borderRadius: 21,
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
    backgroundColor: "#1e2b8a",
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
    marginHorizontal: 0,
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
  tableHeader: {
    flexDirection: "row",
    backgroundColor: LIGHT_GRAY,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: BORDER_GRAY,
  },
  headerFeatureCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  headerPlanCell: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 12,
    fontWeight: "700",
    color: BLACK,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: BORDER_GRAY,
    paddingVertical: 10,
  },
  rowAlt: {
    backgroundColor: "#FAFAFA",
  },
  featureCell: {
    flex: 1,
    paddingHorizontal: 8,
  },
  planCell: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  limitedPill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BORDER_GRAY,
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  limitedText: {
    marginLeft: 4,
    fontSize: 10,
    color: BLACK,
    fontWeight: "600",
  },
});

export default Profile;
