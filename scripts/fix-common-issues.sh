#!/bin/bash

echo "🔧 Fixing common issues for Helix Dating App..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the mobile directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🧹 Clearing cache..."
npx expo r -c

echo "🔍 Checking for common issues..."

# Check if expo-haptics is properly installed
if ! npm list expo-haptics > /dev/null 2>&1; then
    echo "📦 Installing expo-haptics..."
    npx expo install expo-haptics
fi

# Check if all required dependencies are installed
echo "📋 Checking dependencies..."
npm list @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs expo-haptics

echo "✅ Common issues fixed!"
echo ""
echo "🚀 You can now run:"
echo "   npm start          # Start the development server"
echo "   npm run android    # Run on Android"
echo "   npm run ios        # Run on iOS"
echo ""
echo "📱 Make sure you have:"
echo "   - Expo Go app installed on your phone"
echo "   - Or Android Studio/iOS Simulator running"
