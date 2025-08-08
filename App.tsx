import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile, Unsplash, Onboarding } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import CustomTabBar from "./components/CustomTabBar";
import SplashScreen from "./components/SplashScreen";
import * as Haptics from "expo-haptics";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    // Simulate app initialization and check onboarding status
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would check AsyncStorage or your backend
      // For now, we'll always show onboarding
      setHasCompletedOnboarding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  const handleOnboardingComplete = () => {
    setHasCompletedOnboarding(true);
  };

  if (isLoading) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!hasCompletedOnboarding ? (
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
          >
            {(props) => (
              <Onboarding 
                {...props} 
                onComplete={handleOnboardingComplete}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
          >
            {() => (
              <Tab.Navigator
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Tab.Screen
                  name="Explore"
                  component={Unsplash}
                />

                <Tab.Screen
                  name="Matches"
                  component={Matches}
                />

                <Tab.Screen
                  name="Chat"
                  component={Messages}
                />

                <Tab.Screen
                  name="Profile"
                  component={Profile}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
