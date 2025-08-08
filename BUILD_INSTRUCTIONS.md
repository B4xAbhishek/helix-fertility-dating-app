# 🚀 Helix Dating App - Build Instructions

## 📱 Enhanced Swiping Features

The app now includes professional Tinder-like swiping functionality:

### ✨ New Swiping Features
- **Smooth Pan Gestures**: Natural card swiping with PanResponder
- **Like/Dislike Overlays**: Visual feedback with "LIKE" and "NOPE" overlays
- **Haptic Feedback**: Tactile feedback on swipes and button presses
- **Rotation Animation**: Cards rotate based on swipe direction
- **Scale Animation**: Cards scale down when swiping away
- **Opacity Transitions**: Smooth fade effects during swipes
- **Enhanced Shadows**: Better visual depth with improved shadows

### 🎯 How to Use
1. **Swipe Right**: Like a profile (shows green "LIKE" overlay)
2. **Swipe Left**: Dislike a profile (shows red "NOPE" overlay)
3. **Tap Buttons**: Use the heart (like) and X (dislike) buttons
4. **Filters**: Tap the filter icon to access fertility-aware filters

## 🔧 Building APK Locally

### Prerequisites
1. **Install EAS CLI**:
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure EAS** (if not already done):
   ```bash
   eas build:configure
   ```

### 🏗️ Build Commands

#### Local Build (Recommended for Development)
```bash
# Build Android APK locally
npm run build:android

# Build iOS locally
npm run build:ios

# Build both platforms locally
npm run build:all
```

#### Cloud Build (For Production)
```bash
# Build Android APK in cloud
npm run build:android-cloud

# Build iOS in cloud
npm run build:ios-cloud

# Build both platforms in cloud
npm run build:all-cloud
```

#### Preview Build (Quick Testing)
```bash
# Build preview APK
npm run preview
```

### 📦 Build Profiles

The app includes three build profiles:

1. **Development**: Debug build with development client
2. **Preview**: Internal distribution with APK for Android
3. **Production**: Production build with AAB for Android

### 🚀 Quick Start

1. **Navigate to mobile directory**:
   ```bash
   cd mobile
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build APK locally**:
   ```bash
   npm run build:android
   ```

4. **Find your APK**:
   - Local builds: Check the terminal output for the APK location
   - Cloud builds: Download from the provided URL

### 🔧 Additional Commands

```bash
# Clean and restart
npm run clean

# Test production build
npm run test

# Submit to app stores
npm run submit:android
npm run submit:ios

# Update EAS configuration
npm run configure
```

### 📱 App Features

#### Fertility-Aware Dating
- **Reproductive Intent**: Specify what you're looking for (egg/sperm donors, co-parenting, etc.)
- **Genetic Compatibility**: Blood type, recessive traits, fertility indicators
- **Donor Preferences**: Egg/sperm donor matching
- **Family Planning**: Children preferences and family goals

#### Professional UI/UX
- **Smooth Animations**: Tinder-like card transitions
- **Haptic Feedback**: Tactile responses for interactions
- **Modern Design**: Clean, professional interface
- **Comprehensive Filters**: Advanced filtering options

#### Enhanced Onboarding
- **6-Step Process**: Comprehensive profile setup
- **Fertility Questions**: Reproductive intent and genetic info
- **Lifestyle Preferences**: Religion, habits, family plans
- **Professional Design**: Modern, engaging interface

### 🛠️ Troubleshooting

#### Common Issues

1. **EAS not found**:
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Build fails locally**:
   - Ensure you have Android Studio installed
   - Check that ANDROID_HOME is set
   - Try cloud build instead: `npm run build:android-cloud`

3. **Permission issues**:
   - Make sure you're logged in: `eas login`
   - Check your Expo account permissions

4. **Dependencies missing**:
   ```bash
   npm install
   expo install
   ```

### 📋 Requirements

#### For Local Builds
- **Android Studio** with Android SDK
- **Java Development Kit (JDK)**
- **Node.js** (v16 or higher)
- **Expo CLI** and **EAS CLI**

#### For Cloud Builds
- **Expo Account** (free)
- **EAS CLI** installed and logged in
- **Internet connection**

### 🎯 Next Steps

1. **Test the APK** on your device
2. **Customize the app** for your specific needs
3. **Configure backend** for real data
4. **Deploy to app stores** when ready

### 📞 Support

For issues with:
- **Build process**: Check EAS documentation
- **App functionality**: Review the code comments
- **Configuration**: Verify app.json and eas.json settings

---

**Happy Building! 🚀**
