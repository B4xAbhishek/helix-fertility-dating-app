import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const BumbleHeader = () => (
  <View style={styles.bumbleHeader}>
    <Text style={styles.bumbleHeaderTitle}>Bumble</Text>
    <TouchableOpacity style={styles.bumbleHeaderButton}>
      <Icon name="settings" size={24} color={DARK_GRAY} />
    </TouchableOpacity>
  </View>
);

export default BumbleHeader;

