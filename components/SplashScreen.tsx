import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';
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
            backgroundColor: 'transparent',
          }
        ]}
      >
        <Image 
          source={require('../assets/logo.jpeg')}
          style={styles.logoImage}
          resizeMode="contain"
          onError={(error) => {
            console.log('Image loading error:', error);
            console.log('Error details:', error.nativeEvent);
          }}
          onLoad={() => {
            console.log('Image loaded successfully');
            console.log('Image dimensions:', styles.logoImage);
          }}
        />
      </Animated.View>
      
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
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
  logoImage: {
    width: 280,
    height: 280,
    backgroundColor: 'transparent',
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
    fontSize: 18,
    color: WHITE,
    opacity: 0.9,
    fontWeight: '500',
  },
});

export default SplashScreen;
