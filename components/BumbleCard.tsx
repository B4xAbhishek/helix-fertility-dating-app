import React from "react";
import { Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
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
  const imageHeight = Math.round(cardWidth * 1.25); // 4:5 aspect ratio for portrait

  const renderFertilityInfo = () => {
    const fertilityInfo = [];
    
    if (reproductiveIntent) {
      fertilityInfo.push(
        <View key="reproductive" style={styles.infoRow}>
          <Icon name="heart" color="#1e2b8a" size={16} />
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
      {/* CARD IMAGE + OVERLAYED INFO */}
      <View style={{ width: cardWidth, alignSelf: "center" }}>
        <ImageBackground
          source={image}
          style={{ width: cardWidth, height: imageHeight, borderRadius: 16, overflow: "hidden" }}
          imageStyle={{ borderRadius: 16 }}
          accessibilityRole="image"
          accessibilityLabel={`${name}${age ? ", " + age : ""}`}
        >
          {/* subtle scrim for readability */}
          <View style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.25)" }} />
          <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: imageHeight * 0.55, backgroundColor: "rgba(0,0,0,0.45)" }} />

          {/* Top-right verification pill */}
          <View style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(255,255,255,0.95)", borderRadius: 14, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" }}>
            <Icon name="checkmark-circle" color="#007AFF" size={16} />
            <Text style={{ marginLeft: 6, fontSize: 12, fontWeight: "600", color: "#0A0A0A" }}>ID verified</Text>
          </View>

          {/* Bottom content */}
          <View style={{ position: "absolute", left: 14, right: 14, bottom: 14 }}>
            {/* NAME & AGE */}
            <Text style={[styles.nameText, { color: WHITE, textShadowColor: "rgba(0,0,0,0.5)", textShadowRadius: 4, textShadowOffset: { width: 0, height: 1 } }]}>
              {name}{age && `, ${age}`}
            </Text>

            {/* DATING INTENT */}
            {datingIntent && (
              <View style={[styles.infoRow, { marginTop: 4 }]}> 
                <Icon name="star" color="#FFD93D" size={16} />
                <Text style={[styles.infoText, { color: WHITE }]}>Looking for {datingIntent} relationship</Text>
              </View>
            )}

            {/* JOB INFO */}
            {job && (
              <View style={styles.infoRow}>
                <Icon name="briefcase" color={WHITE} size={16} />
                <Text style={[styles.infoText, { color: WHITE }]}>{job}</Text>
              </View>
            )}

            {/* EDUCATION INFO */}
            {education && (
              <View style={styles.infoRow}>
                <Icon name="school" color={WHITE} size={16} />
                <Text style={[styles.infoText, { color: WHITE }]}>{education}</Text>
              </View>
            )}

            {/* LIFESTYLE INFO */}
            <View>
              {renderLifestyleInfo().map((node, idx) => (
                <View key={`life-${idx}`} style={[styles.infoRow]}> 
                  {/* clone: enforce white text/icon without altering shared styles */}
                  {React.cloneElement(node, { key: `life-${idx}` }, React.Children.map((node as any).props.children, (child: any, i: number) => {
                    if (i === 0) return React.cloneElement(child, { color: WHITE });
                    if (child?.props?.style) return React.cloneElement(child, { style: [child.props.style, { color: WHITE }] });
                    return child;
                  }))}
                </View>
              ))}
            </View>

            {/* FERTILITY INFO */}
            <View>
              {renderFertilityInfo().map((node, idx) => (
                <View key={`fert-${idx}`} style={[styles.infoRow]}> 
                  {React.cloneElement(node, { key: `fert-${idx}` }, React.Children.map((node as any).props.children, (child: any, i: number) => {
                    if (i === 0) return React.cloneElement(child, { color: WHITE });
                    if (child?.props?.style) return React.cloneElement(child, { style: [child.props.style, { color: WHITE }] });
                    return child;
                  }))}
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* SECONDARY CONTENT BELOW THE IMAGE */}
      <View style={[styles.profileInfoContainer, { paddingTop: 12 }]}> 
        {/* CONVERSATION TOPICS */}
        {topics && topics.length > 0 && (
          <View style={styles.topicsContainer}>
            <Text style={styles.topicsTitle}>Things we can talk about</Text>
            <View style={styles.topicsList}>
              {topics.map((topic) => (
                <View key={topic} style={styles.topicTag}>
                  <Icon name="rocket" color="#1e2b8a" size={12} />
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ACTION BUTTONS (float under card) */}
        {hasActions && (
          <View style={[styles.actionButtonsContainer, { marginTop: 12 }]}> 
            <TouchableOpacity style={styles.miniActionButton} accessibilityRole="button" accessibilityLabel="Pass">
              <Icon name="heart" color={LIKE_ACTIONS} size={18} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainActionButton} accessibilityRole="button" accessibilityLabel="Like">
              <Icon name="star" color={STAR_ACTIONS} size={22} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default BumbleCard;