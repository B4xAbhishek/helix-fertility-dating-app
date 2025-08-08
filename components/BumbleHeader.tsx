import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const BumbleHeader = () => (
  <View style={styles.bumbleHeader}>
    <View style={styles.headerLeft}>
      <Icon name="heart" size={24} color="#1e2b8a" />
      <Text style={styles.bumbleHeaderTitle}>helix</Text>
    </View>
    <TouchableOpacity style={styles.bumbleHeaderButton}>
      <Icon name="menu" size={24} color={DARK_GRAY} />
    </TouchableOpacity>
  </View>
);

export default BumbleHeader;

