import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Animated,
  PanResponder,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "../assets/styles";
import Filters from "../components/Filters";
import DEMO from "../assets/data/demo";
import { DataT } from "../types";

const { width, height } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;
const ROTATION_ANGLE = 15;

const Unsplash = () => {
  const [profiles, setProfiles] = useState<DataT[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  
  // Animation values
  const position = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const likeOpacity = useRef(new Animated.Value(0)).current;
  const dislikeOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProfiles(DEMO);
    } catch (error) {
      console.error("Error loading profiles:", error);
      setProfiles(DEMO);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (filters: Record<string, any>) => {
    setActiveFilters(filters);
    // In a real app, you would filter the profiles based on the filters
    // For now, we'll just log the filters
    console.log("Applied filters:", filters);
  };

  const resetCardPosition = () => {
    Animated.parallel([
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(likeOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(dislikeOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    const toValue = direction === 'right' ? width * 1.5 : -width * 1.5;
    const rotateValue = direction === 'right' ? ROTATION_ANGLE : -ROTATION_ANGLE;

    // Show like/dislike overlay
    if (direction === 'right') {
      Animated.timing(likeOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(dislikeOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }

    Animated.parallel([
      Animated.timing(position, {
        toValue: { x: toValue, y: 0 },
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (currentIndex < profiles.length - 1) {
        setCurrentIndex(currentIndex + 1);
        resetCardPosition();
      }
    });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
      
      // Calculate rotation based on horizontal movement
      const rotate = gesture.dx / width * ROTATION_ANGLE;
      position.x.setValue(gesture.dx);
      position.y.setValue(gesture.dy);
      
      // Show like/dislike overlay based on direction
      if (gesture.dx > 50) {
        likeOpacity.setValue(Math.min(gesture.dx / 100, 1));
        dislikeOpacity.setValue(0);
      } else if (gesture.dx < -50) {
        dislikeOpacity.setValue(Math.min(Math.abs(gesture.dx) / 100, 1));
        likeOpacity.setValue(0);
      } else {
        likeOpacity.setValue(0);
        dislikeOpacity.setValue(0);
      }
    },
    onPanResponderRelease: (_, gesture) => {
      if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
        const direction = gesture.dx > 0 ? 'right' : 'left';
        handleSwipe(direction);
      } else {
        resetCardPosition();
      }
    },
  });

  const handleLike = () => {
    handleSwipe('right');
  };

  const handleDislike = () => {
    handleSwipe('left');
  };

  const handleStar = () => {
    // Handle star action
    console.log("Star action");
  };

  const handleFlash = () => {
    // Handle flash action
    console.log("Flash action");
  };

  const renderProfileInfo = (profile: DataT) => {
    return (
      <View style={styles.profileInfoContainer}>
        <View style={styles.basicInfo}>
          <Text style={styles.nameAge}>
            {profile.name}{profile.age && `, ${profile.age}`}
          </Text>
          
          {profile.datingIntent && (
            <View style={styles.infoRow}>
              <Ionicons name="star" color="#FFD93D" size={16} />
              <Text style={styles.infoText}>
                Looking for {profile.datingIntent} relationship
              </Text>
            </View>
          )}

          {profile.job && (
            <View style={styles.infoRow}>
              <Ionicons name="briefcase" color={WHITE} size={16} />
              <Text style={styles.infoText}>{profile.job}</Text>
            </View>
          )}

          {profile.education && (
            <View style={styles.infoRow}>
              <Ionicons name="school" color={WHITE} size={16} />
              <Text style={styles.infoText}>{profile.education}</Text>
            </View>
          )}

          {profile.location && (
            <View style={styles.infoRow}>
              <Ionicons name="location" color={WHITE} size={16} />
              <Text style={styles.infoText}>{profile.location}</Text>
            </View>
          )}

          {profile.height && (
            <View style={styles.infoRow}>
              <Ionicons name="resize" color={WHITE} size={16} />
              <Text style={styles.infoText}>{profile.height}</Text>
            </View>
          )}

          {profile.religion && (
            <View style={styles.infoRow}>
              <Ionicons name="book" color={WHITE} size={16} />
              <Text style={styles.infoText}>{profile.religion}</Text>
            </View>
          )}

          {profile.smoking !== undefined || profile.drinking || profile.drugs !== undefined ? (
            <View style={styles.infoRow}>
              <Ionicons name="leaf" color={WHITE} size={16} />
              <Text style={styles.infoText}>
                {profile.smoking !== undefined ? (profile.smoking ? "Smoker" : "Non-smoker") : ""}
                {profile.drinking ? `, ${profile.drinking}` : ""}
                {profile.drugs !== undefined ? `, ${profile.drugs ? "Uses drugs" : "No drugs"}` : ""}
              </Text>
            </View>
          ) : null}

          {profile.reproductiveIntent && (
            <View style={styles.infoRow}>
              <Ionicons name="heart" color="#1e2b8a" size={16} />
              <Text style={styles.infoText}>
                Looking for {profile.reproductiveIntent.searchingFor} donor for {profile.reproductiveIntent.lookingFor}
              </Text>
            </View>
          )}

          {profile.geneticTraits?.bloodType && (
            <View style={styles.infoRow}>
              <Ionicons name="medical" color="#4ECDC4" size={16} />
              <Text style={styles.infoText}>Blood Type: {profile.geneticTraits.bloodType}</Text>
            </View>
          )}

          {profile.donorPreferences?.isDonor && (
            <View style={styles.infoRow}>
              <Ionicons name="gift" color="#45B7D1" size={16} />
              <Text style={styles.infoText}>
                {profile.donorPreferences.donorType} donor
              </Text>
            </View>
          )}

          {profile.children?.hasChildren !== undefined && (
            <View style={styles.infoRow}>
              <Ionicons name="people" color="#96CEB4" size={16} />
              <Text style={styles.infoText}>
                {profile.children.hasChildren 
                  ? `Has ${profile.children.numberOfChildren || 1} child${profile.children.numberOfChildren !== 1 ? 'ren' : ''}`
                  : "No children"
                }
              </Text>
            </View>
          )}
        </View>

        <View style={styles.verifiedBadge}>
          <Ionicons name="checkmark-circle" size={20} color="#007AFF" />
          <Text style={styles.verifiedText}>ID verified</Text>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
        <Text style={styles.loadingText}>Loading profiles...</Text>
      </View>
    );
  }

  if (profiles.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No profiles available</Text>
      </View>
    );
  }

  const currentProfile = profiles[currentIndex];

  if (!currentProfile) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No current profile available</Text>
      </View>
    );
  }

  const cardStyle = {
    transform: [
      { translateX: position.x },
      { translateY: position.y },
      { scale },
      { 
        rotate: position.x.interpolate({
          inputRange: [-width * 2, 0, width * 2],
          outputRange: [`-${ROTATION_ANGLE}deg`, '0deg', `${ROTATION_ANGLE}deg`],
        })
      },
    ],
    opacity,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location" size={20} color={BLACK} />
          <Text style={styles.locationText}>New York</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setFiltersVisible(true)}
        >
          <Ionicons name="options" size={20} color={BLACK} />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Main Card Container */}
      <View style={styles.cardContainer}>
        <Animated.View 
          style={[styles.card, cardStyle]}
          {...panResponder.panHandlers}
        >
          <Image
            source={currentProfile.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          
          {/* Match Percentage Badge */}
          <View style={styles.matchBadge}>
            <Ionicons name="heart" size={16} color={WHITE} />
            <Text style={styles.matchText}>78% Match!</Text>
          </View>
          
          {/* Like Overlay */}
          <Animated.View style={[localStyles.overlay, localStyles.likeOverlay, { opacity: likeOpacity }]}>
            <View style={localStyles.overlayContent}>
              <Ionicons name="heart" size={60} color="#4CAF50" />
              <Text style={localStyles.overlayText}>LIKE</Text>
            </View>
          </Animated.View>

          {/* Dislike Overlay */}
          <Animated.View style={[localStyles.overlay, localStyles.dislikeOverlay, { opacity: dislikeOpacity }]}>
            <View style={localStyles.overlayContent}>
              <Ionicons name="close" size={60} color="#F44336" />
              <Text style={localStyles.overlayText}>NOPE</Text>
            </View>
          </Animated.View>
          
          <View style={styles.cardOverlay}>
            <ScrollView 
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              <Text style={styles.nameText}>
                {currentProfile.name}
              </Text>
            </ScrollView>
          </View>
        </Animated.View>
      </View>

      {/* Description below the image */}
      {currentProfile.description && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{currentProfile.description}</Text>
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={handleStar}>
          <Ionicons name="star" size={24} color="#FFA200" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Ionicons name="heart" size={24} color="#B644B2" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleDislike}>
          <Ionicons name="close" size={24} color={BLACK} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleFlash}>
          <Ionicons name="flash" size={24} color="#5028D7" />
        </TouchableOpacity>
      </View>

      <Filters
        visible={filtersVisible}
        onClose={() => setFiltersVisible(false)}
        onApply={applyFilters}
        initialFilters={activeFilters}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  likeOverlay: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    borderWidth: 4,
    borderColor: "#4CAF50",
  },
  dislikeOverlay: {
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    borderWidth: 4,
    borderColor: "#F44336",
  },
  overlayContent: {
    alignItems: "center",
  },
  overlayText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: DARK_GRAY,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
  },
  errorText: {
    fontSize: 16,
    color: DARK_GRAY,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: WHITE,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  locationText: {
    fontSize: 16,
    color: BLACK,
    marginLeft: 4,
    fontWeight: "500",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  filterText: {
    fontSize: 16,
    color: BLACK,
    marginLeft: 4,
    fontWeight: "500",
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: "80%",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  matchBadge: {
    position: "absolute",
    bottom: 120,
    left: 20,
    backgroundColor: "#B644B2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  matchText: {
    color: WHITE,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 20,
    maxHeight: "60%",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  basicInfo: {
    flex: 1,
  },
  nameAge: {
    fontSize: 18,
    fontWeight: "bold",
    color: WHITE,
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: WHITE,
    marginLeft: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  verifiedText: {
    fontSize: 12,
    color: WHITE,
    marginLeft: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: WHITE,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bioText: {
    fontSize: 16,
    color: WHITE,
    lineHeight: 22,
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  additionalInfo: {
    marginTop: 10,
  },
  additionalText: {
    fontSize: 14,
    color: WHITE,
    lineHeight: 20,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: WHITE,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: WHITE,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 10,
    color: BLACK,
    marginTop: 4,
    fontWeight: "500",
  },
  activeNavText: {
    color: "#B644B2",
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: WHITE,
    borderRadius: 12,
    elevation: 2,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  descriptionText: {
    fontSize: 16,
    color: DARK_GRAY,
    lineHeight: 22,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default Unsplash;
