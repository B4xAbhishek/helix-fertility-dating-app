import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_COLOR, WHITE } from '../assets/styles';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const logoScale = new Animated.Value(0.8);
  const logoOpacity = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);

  useEffect(() => {
    const animation = Animated.sequence([
      // Logo animation
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      // Text animation
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      // Wait a bit
      Animated.delay(500),
    ]);

    animation.start(() => {
      // Navigate after animation completes
      setTimeout(onFinish, 300);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }
        ]}
      >
        <View style={styles.heartContainer}>
          <Ionicons name="heart" size={80} color={WHITE} />
          <View style={styles.helixContainer}>
            <View style={styles.helixStrand} />
            <View style={styles.helixStrand} />
            <View style={styles.helixRungs}>
              {[...Array(8)].map((_, i) => (
                <View key={i} style={styles.helixRung} />
              ))}
            </View>
          </View>
        </View>
      </Animated.View>
      
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.appName}>helix</Text>
        <Text style={styles.tagline}>Connect with purpose</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  heartContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helixContainer: {
    position: 'absolute',
    width: 60,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helixStrand: {
    position: 'absolute',
    width: 2,
    height: 60,
    backgroundColor: WHITE,
    borderRadius: 1,
  },
  helixRungs: {
    position: 'absolute',
    width: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helixRung: {
    width: 30,
    height: 2,
    backgroundColor: WHITE,
    borderRadius: 1,
  },
  textContainer: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: WHITE,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: WHITE,
    opacity: 0.8,
  },
});

export default SplashScreen;
