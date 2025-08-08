import React, { useState } from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import { BumbleHeader, BumbleCard } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  return (
    <View style={styles.containerHome}>
      <BumbleHeader />
      
      <ScrollView style={{ flex: 1 }}>
        {DEMO.map((item) => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <BumbleCard
              hasActions
              image={item.image}
              name={item.name}
              age={item.age}
              job={item.job}
              education={item.education}
              topics={item.topics}
              description={item.description}
              matches={item.match}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
