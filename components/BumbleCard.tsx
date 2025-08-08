import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  WHITE,
  DARK_GRAY,
  GRAY,
  STAR_ACTIONS,
  LIKE_ACTIONS,
} from "../assets/styles";

const BumbleCard = ({
  description,
  hasActions,
  image,
  name,
  age,
  job,
  education,
  topics,
  reproductiveIntent,
  geneticTraits,
  donorPreferences,
  children,
  location,
  height,
  religion,
  smoking,
  drinking,
  drugs,
  datingIntent,
  ...props
}: CardItemT & {
  age?: string;
  job?: string;
  education?: string;
  topics?: string[];
  reproductiveIntent?: Record<string, any>;
  geneticTraits?: Record<string, any>;
  donorPreferences?: Record<string, any>;
  children?: Record<string, any>;
  location?: string;
  height?: string;
  religion?: string;
  smoking?: boolean;
  drinking?: string;
  drugs?: boolean;
  datingIntent?: string;
}) => {
  const fullWidth = Dimensions.get("window").width;
  const cardWidth = fullWidth - 40;

  const renderFertilityInfo = () => {
    const fertilityInfo = [];
    
    if (reproductiveIntent) {
      fertilityInfo.push(
        <View key="reproductive" style={styles.infoRow}>
          <Icon name="heart" color="#FF6B6B" size={16} />
          <Text style={styles.infoText}>
            {reproductiveIntent.searchingFor && reproductiveIntent.lookingFor 
              ? `Looking for ${reproductiveIntent.searchingFor} donor for ${reproductiveIntent.lookingFor}`
              : "Fertility-aware matching"}
          </Text>
        </View>
      );
    }

    if (geneticTraits?.bloodType) {
      fertilityInfo.push(
        <View key="blood" style={styles.infoRow}>
          <Icon name="medical" color="#4ECDC4" size={16} />
          <Text style={styles.infoText}>Blood Type: {geneticTraits.bloodType}</Text>
        </View>
      );
    }

    if (donorPreferences?.isDonor) {
      fertilityInfo.push(
        <View key="donor" style={styles.infoRow}>
          <Icon name="gift" color="#45B7D1" size={16} />
          <Text style={styles.infoText}>
            {donorPreferences.donorType} donor
          </Text>
        </View>
      );
    }

    if (children?.hasChildren !== undefined) {
      fertilityInfo.push(
        <View key="children" style={styles.infoRow}>
          <Icon name="people" color="#96CEB4" size={16} />
          <Text style={styles.infoText}>
            {children.hasChildren 
              ? `Has ${children.numberOfChildren || 1} child${children.numberOfChildren !== 1 ? 'ren' : ''}`
              : "No children"
            }
          </Text>
        </View>
      );
    }

    return fertilityInfo;
  };

  const renderLifestyleInfo = () => {
    const lifestyleInfo = [];
    
    if (location) {
      lifestyleInfo.push(
        <View key="location" style={styles.infoRow}>
          <Icon name="location" color={DARK_GRAY} size={16} />
          <Text style={styles.infoText}>{location}</Text>
        </View>
      );
    }

    if (height) {
      lifestyleInfo.push(
        <View key="height" style={styles.infoRow}>
          <Icon name="resize" color={DARK_GRAY} size={16} />
          <Text style={styles.infoText}>{height}</Text>
        </View>
      );
    }

    if (religion) {
      lifestyleInfo.push(
        <View key="religion" style={styles.infoRow}>
          <Icon name="book" color={DARK_GRAY} size={16} />
          <Text style={styles.infoText}>{religion}</Text>
        </View>
      );
    }

    if (smoking !== undefined || drinking || drugs !== undefined) {
      const habits = [];
      if (smoking !== undefined) habits.push(smoking ? "Smoker" : "Non-smoker");
      if (drinking) habits.push(drinking);
      if (drugs !== undefined) habits.push(drugs ? "Uses drugs" : "No drugs");
      
      if (habits.length > 0) {
        lifestyleInfo.push(
          <View key="habits" style={styles.infoRow}>
            <Icon name="leaf" color={DARK_GRAY} size={16} />
            <Text style={styles.infoText}>{habits.join(", ")}</Text>
          </View>
        );
      }
    }

    return lifestyleInfo;
  };

  return (
    <View style={styles.containerBumbleCard}>
      {/* PROFILE IMAGE */}
      <Image 
        source={image} 
        style={{
          width: cardWidth,
          height: 450,
          borderRadius: 12,
        }} 
      />

      {/* PROFILE INFO SECTION */}
      <View style={styles.profileInfoContainer}>
        {/* VERIFICATION BADGE */}
        <View style={styles.verificationBadge}>
          <Icon name="checkmark-circle" color="#007AFF" size={16} />
          <Text style={styles.verificationText}>ID verified</Text>
        </View>

        {/* NAME AND AGE */}
        <Text style={styles.nameText}>{name}{age && `, ${age}`}</Text>

        {/* DATING INTENT */}
        {datingIntent && (
          <View style={styles.infoRow}>
            <Icon name="star" color="#FFD93D" size={16} />
            <Text style={styles.infoText}>Looking for {datingIntent} relationship</Text>
          </View>
        )}

        {/* JOB INFO */}
        {job && (
          <View style={styles.infoRow}>
            <Icon name="briefcase" color={DARK_GRAY} size={16} />
            <Text style={styles.infoText}>{job}</Text>
          </View>
        )}

        {/* EDUCATION INFO */}
        {education && (
          <View style={styles.infoRow}>
            <Icon name="school" color={DARK_GRAY} size={16} />
            <Text style={styles.infoText}>{education}</Text>
          </View>
        )}

        {/* LIFESTYLE INFO */}
        {renderLifestyleInfo()}

        {/* FERTILITY INFO */}
        {renderFertilityInfo()}

        {/* CONVERSATION TOPICS */}
        {topics && topics.length > 0 && (
          <View style={styles.topicsContainer}>
            <Text style={styles.topicsTitle}>Things we can talk about</Text>
            <View style={styles.topicsList}>
              {topics.map((topic, index) => (
                <View key={index} style={styles.topicTag}>
                  <Icon name="rocket" color="#FF3B30" size={12} />
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ACTION BUTTONS */}
        {hasActions && (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.miniActionButton}>
              <Icon name="heart" color={LIKE_ACTIONS} size={18} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainActionButton}>
              <Icon name="star" color={STAR_ACTIONS} size={22} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default BumbleCard;
